// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import { CancelJobCommand, CancelJobCommandInput, CancelJobCommandOutput } from "./commands/CancelJobCommand";
import { CreateJobCommand, CreateJobCommandInput, CreateJobCommandOutput } from "./commands/CreateJobCommand";
import {
  CreatePipelineCommand,
  CreatePipelineCommandInput,
  CreatePipelineCommandOutput,
} from "./commands/CreatePipelineCommand";
import {
  CreatePresetCommand,
  CreatePresetCommandInput,
  CreatePresetCommandOutput,
} from "./commands/CreatePresetCommand";
import {
  DeletePipelineCommand,
  DeletePipelineCommandInput,
  DeletePipelineCommandOutput,
} from "./commands/DeletePipelineCommand";
import {
  DeletePresetCommand,
  DeletePresetCommandInput,
  DeletePresetCommandOutput,
} from "./commands/DeletePresetCommand";
import {
  ListJobsByPipelineCommand,
  ListJobsByPipelineCommandInput,
  ListJobsByPipelineCommandOutput,
} from "./commands/ListJobsByPipelineCommand";
import {
  ListJobsByStatusCommand,
  ListJobsByStatusCommandInput,
  ListJobsByStatusCommandOutput,
} from "./commands/ListJobsByStatusCommand";
import {
  ListPipelinesCommand,
  ListPipelinesCommandInput,
  ListPipelinesCommandOutput,
} from "./commands/ListPipelinesCommand";
import { ListPresetsCommand, ListPresetsCommandInput, ListPresetsCommandOutput } from "./commands/ListPresetsCommand";
import { ReadJobCommand, ReadJobCommandInput, ReadJobCommandOutput } from "./commands/ReadJobCommand";
import {
  ReadPipelineCommand,
  ReadPipelineCommandInput,
  ReadPipelineCommandOutput,
} from "./commands/ReadPipelineCommand";
import { ReadPresetCommand, ReadPresetCommandInput, ReadPresetCommandOutput } from "./commands/ReadPresetCommand";
import { TestRoleCommand, TestRoleCommandInput, TestRoleCommandOutput } from "./commands/TestRoleCommand";
import {
  UpdatePipelineCommand,
  UpdatePipelineCommandInput,
  UpdatePipelineCommandOutput,
} from "./commands/UpdatePipelineCommand";
import {
  UpdatePipelineNotificationsCommand,
  UpdatePipelineNotificationsCommandInput,
  UpdatePipelineNotificationsCommandOutput,
} from "./commands/UpdatePipelineNotificationsCommand";
import {
  UpdatePipelineStatusCommand,
  UpdatePipelineStatusCommandInput,
  UpdatePipelineStatusCommandOutput,
} from "./commands/UpdatePipelineStatusCommand";
import { ElasticTranscoderClient } from "./ElasticTranscoderClient";

/**
 * <fullname>AWS Elastic Transcoder Service</fullname>
 *         <p>The AWS Elastic Transcoder Service.</p>
 */
export class ElasticTranscoder extends ElasticTranscoderClient {
  /**
   * <p>The CancelJob operation cancels an unfinished job.</p>
   *         <note>
   *             <p>You can only cancel a job that has a status of <code>Submitted</code>. To prevent a
   *             pipeline from starting to process a job while you're getting the job identifier, use
   *                 <a>UpdatePipelineStatus</a> to temporarily pause the pipeline.</p>
   *          </note>
   */
  public cancelJob(args: CancelJobCommandInput, options?: __HttpHandlerOptions): Promise<CancelJobCommandOutput>;
  public cancelJob(args: CancelJobCommandInput, cb: (err: any, data?: CancelJobCommandOutput) => void): void;
  public cancelJob(
    args: CancelJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelJobCommandOutput) => void
  ): void;
  public cancelJob(
    args: CancelJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CancelJobCommandOutput) => void),
    cb?: (err: any, data?: CancelJobCommandOutput) => void
  ): Promise<CancelJobCommandOutput> | void {
    const command = new CancelJobCommand(args);
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
   * <p>When you create a job, Elastic Transcoder returns JSON data that includes the values that you specified
   *             plus information about the job that is created.</p>
   *         <p>If you have specified more than one output for your jobs (for example, one output for the
   *             Kindle Fire and another output for the Apple iPhone 4s), you currently must use the Elastic Transcoder API to
   *             list the jobs (as opposed to the AWS Console).</p>
   */
  public createJob(args: CreateJobCommandInput, options?: __HttpHandlerOptions): Promise<CreateJobCommandOutput>;
  public createJob(args: CreateJobCommandInput, cb: (err: any, data?: CreateJobCommandOutput) => void): void;
  public createJob(
    args: CreateJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateJobCommandOutput) => void
  ): void;
  public createJob(
    args: CreateJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateJobCommandOutput) => void),
    cb?: (err: any, data?: CreateJobCommandOutput) => void
  ): Promise<CreateJobCommandOutput> | void {
    const command = new CreateJobCommand(args);
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
   * <p>The CreatePipeline operation creates a pipeline with settings that you specify.</p>
   */
  public createPipeline(
    args: CreatePipelineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePipelineCommandOutput>;
  public createPipeline(
    args: CreatePipelineCommandInput,
    cb: (err: any, data?: CreatePipelineCommandOutput) => void
  ): void;
  public createPipeline(
    args: CreatePipelineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePipelineCommandOutput) => void
  ): void;
  public createPipeline(
    args: CreatePipelineCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreatePipelineCommandOutput) => void),
    cb?: (err: any, data?: CreatePipelineCommandOutput) => void
  ): Promise<CreatePipelineCommandOutput> | void {
    const command = new CreatePipelineCommand(args);
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
   * <p>The CreatePreset operation creates a preset with settings that you specify.</p>
   *         <important>
   *             <p>Elastic Transcoder checks the CreatePreset settings to ensure that they meet Elastic Transcoder requirements
   *             and to determine whether they comply with H.264 standards. If your settings are not
   *             valid for Elastic Transcoder, Elastic Transcoder returns an HTTP 400 response (<code>ValidationException</code>) and
   *             does not create the preset. If the settings are valid for Elastic Transcoder but aren't strictly
   *             compliant with the H.264 standard, Elastic Transcoder creates the preset and returns a warning message
   *             in the response. This helps you determine whether your settings comply with the H.264
   *             standard while giving you greater flexibility with respect to the video that Elastic Transcoder
   *             produces.</p>
   *          </important>
   *         <p>Elastic Transcoder uses the H.264 video-compression format. For more information, see the International
   *             Telecommunication Union publication <i>Recommendation ITU-T H.264: Advanced video coding
   *                 for generic audiovisual services</i>.</p>
   */
  public createPreset(
    args: CreatePresetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePresetCommandOutput>;
  public createPreset(args: CreatePresetCommandInput, cb: (err: any, data?: CreatePresetCommandOutput) => void): void;
  public createPreset(
    args: CreatePresetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePresetCommandOutput) => void
  ): void;
  public createPreset(
    args: CreatePresetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreatePresetCommandOutput) => void),
    cb?: (err: any, data?: CreatePresetCommandOutput) => void
  ): Promise<CreatePresetCommandOutput> | void {
    const command = new CreatePresetCommand(args);
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
   * <p>The DeletePipeline operation removes a pipeline.</p>
   *         <p> You can only delete a pipeline that has never been used or that is not currently in use
   *             (doesn't contain any active jobs). If the pipeline is currently in use,
   *                 <code>DeletePipeline</code> returns an error. </p>
   */
  public deletePipeline(
    args: DeletePipelineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePipelineCommandOutput>;
  public deletePipeline(
    args: DeletePipelineCommandInput,
    cb: (err: any, data?: DeletePipelineCommandOutput) => void
  ): void;
  public deletePipeline(
    args: DeletePipelineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePipelineCommandOutput) => void
  ): void;
  public deletePipeline(
    args: DeletePipelineCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeletePipelineCommandOutput) => void),
    cb?: (err: any, data?: DeletePipelineCommandOutput) => void
  ): Promise<DeletePipelineCommandOutput> | void {
    const command = new DeletePipelineCommand(args);
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
   * <p>The DeletePreset operation removes a preset that you've added in an AWS region.</p>
   *         <note>
   *             <p>You can't delete the default presets that are included with Elastic Transcoder.</p>
   *         </note>
   */
  public deletePreset(
    args: DeletePresetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePresetCommandOutput>;
  public deletePreset(args: DeletePresetCommandInput, cb: (err: any, data?: DeletePresetCommandOutput) => void): void;
  public deletePreset(
    args: DeletePresetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePresetCommandOutput) => void
  ): void;
  public deletePreset(
    args: DeletePresetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeletePresetCommandOutput) => void),
    cb?: (err: any, data?: DeletePresetCommandOutput) => void
  ): Promise<DeletePresetCommandOutput> | void {
    const command = new DeletePresetCommand(args);
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
   * <p>The ListJobsByPipeline operation gets a list of the jobs currently in a pipeline.</p>
   *         <p>Elastic Transcoder returns all of the jobs currently in the specified pipeline. The response body contains
   *             one element for each job that satisfies the search criteria.</p>
   */
  public listJobsByPipeline(
    args: ListJobsByPipelineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListJobsByPipelineCommandOutput>;
  public listJobsByPipeline(
    args: ListJobsByPipelineCommandInput,
    cb: (err: any, data?: ListJobsByPipelineCommandOutput) => void
  ): void;
  public listJobsByPipeline(
    args: ListJobsByPipelineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListJobsByPipelineCommandOutput) => void
  ): void;
  public listJobsByPipeline(
    args: ListJobsByPipelineCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListJobsByPipelineCommandOutput) => void),
    cb?: (err: any, data?: ListJobsByPipelineCommandOutput) => void
  ): Promise<ListJobsByPipelineCommandOutput> | void {
    const command = new ListJobsByPipelineCommand(args);
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
   * <p>The ListJobsByStatus operation gets a list of jobs that have a specified status. The response
   *             body contains one element for each job that satisfies the search criteria.</p>
   */
  public listJobsByStatus(
    args: ListJobsByStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListJobsByStatusCommandOutput>;
  public listJobsByStatus(
    args: ListJobsByStatusCommandInput,
    cb: (err: any, data?: ListJobsByStatusCommandOutput) => void
  ): void;
  public listJobsByStatus(
    args: ListJobsByStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListJobsByStatusCommandOutput) => void
  ): void;
  public listJobsByStatus(
    args: ListJobsByStatusCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListJobsByStatusCommandOutput) => void),
    cb?: (err: any, data?: ListJobsByStatusCommandOutput) => void
  ): Promise<ListJobsByStatusCommandOutput> | void {
    const command = new ListJobsByStatusCommand(args);
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
   * <p>The ListPipelines operation gets a list of the pipelines associated with the current AWS account.</p>
   */
  public listPipelines(
    args: ListPipelinesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPipelinesCommandOutput>;
  public listPipelines(
    args: ListPipelinesCommandInput,
    cb: (err: any, data?: ListPipelinesCommandOutput) => void
  ): void;
  public listPipelines(
    args: ListPipelinesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPipelinesCommandOutput) => void
  ): void;
  public listPipelines(
    args: ListPipelinesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListPipelinesCommandOutput) => void),
    cb?: (err: any, data?: ListPipelinesCommandOutput) => void
  ): Promise<ListPipelinesCommandOutput> | void {
    const command = new ListPipelinesCommand(args);
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
   * <p>The ListPresets operation gets a list of the default presets included with Elastic Transcoder and the presets that
   *             you've added in an AWS region.</p>
   */
  public listPresets(args: ListPresetsCommandInput, options?: __HttpHandlerOptions): Promise<ListPresetsCommandOutput>;
  public listPresets(args: ListPresetsCommandInput, cb: (err: any, data?: ListPresetsCommandOutput) => void): void;
  public listPresets(
    args: ListPresetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPresetsCommandOutput) => void
  ): void;
  public listPresets(
    args: ListPresetsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListPresetsCommandOutput) => void),
    cb?: (err: any, data?: ListPresetsCommandOutput) => void
  ): Promise<ListPresetsCommandOutput> | void {
    const command = new ListPresetsCommand(args);
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
   * <p>The ReadJob operation returns detailed information about a job.</p>
   */
  public readJob(args: ReadJobCommandInput, options?: __HttpHandlerOptions): Promise<ReadJobCommandOutput>;
  public readJob(args: ReadJobCommandInput, cb: (err: any, data?: ReadJobCommandOutput) => void): void;
  public readJob(
    args: ReadJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ReadJobCommandOutput) => void
  ): void;
  public readJob(
    args: ReadJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ReadJobCommandOutput) => void),
    cb?: (err: any, data?: ReadJobCommandOutput) => void
  ): Promise<ReadJobCommandOutput> | void {
    const command = new ReadJobCommand(args);
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
   * <p>The ReadPipeline operation gets detailed information about a pipeline.</p>
   */
  public readPipeline(
    args: ReadPipelineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ReadPipelineCommandOutput>;
  public readPipeline(args: ReadPipelineCommandInput, cb: (err: any, data?: ReadPipelineCommandOutput) => void): void;
  public readPipeline(
    args: ReadPipelineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ReadPipelineCommandOutput) => void
  ): void;
  public readPipeline(
    args: ReadPipelineCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ReadPipelineCommandOutput) => void),
    cb?: (err: any, data?: ReadPipelineCommandOutput) => void
  ): Promise<ReadPipelineCommandOutput> | void {
    const command = new ReadPipelineCommand(args);
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
   * <p>The ReadPreset operation gets detailed information about a preset.</p>
   */
  public readPreset(args: ReadPresetCommandInput, options?: __HttpHandlerOptions): Promise<ReadPresetCommandOutput>;
  public readPreset(args: ReadPresetCommandInput, cb: (err: any, data?: ReadPresetCommandOutput) => void): void;
  public readPreset(
    args: ReadPresetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ReadPresetCommandOutput) => void
  ): void;
  public readPreset(
    args: ReadPresetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ReadPresetCommandOutput) => void),
    cb?: (err: any, data?: ReadPresetCommandOutput) => void
  ): Promise<ReadPresetCommandOutput> | void {
    const command = new ReadPresetCommand(args);
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
   * @deprecated
   *
   * <p>The TestRole operation tests the IAM role used to create the pipeline.</p>
   *         <p>The <code>TestRole</code> action lets you determine whether the IAM role you are using
   *             has sufficient permissions to let Elastic Transcoder perform tasks associated with the transcoding
   *             process. The action attempts to assume the specified IAM role, checks read access to the
   *             input and output buckets, and tries to send a test notification to Amazon SNS topics
   *             that you specify.</p>
   */
  public testRole(args: TestRoleCommandInput, options?: __HttpHandlerOptions): Promise<TestRoleCommandOutput>;
  public testRole(args: TestRoleCommandInput, cb: (err: any, data?: TestRoleCommandOutput) => void): void;
  public testRole(
    args: TestRoleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TestRoleCommandOutput) => void
  ): void;
  public testRole(
    args: TestRoleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TestRoleCommandOutput) => void),
    cb?: (err: any, data?: TestRoleCommandOutput) => void
  ): Promise<TestRoleCommandOutput> | void {
    const command = new TestRoleCommand(args);
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
   * <p> Use the <code>UpdatePipeline</code> operation to update settings for a pipeline.</p>
   *         <important>
   *             <p>When you change pipeline settings, your changes take effect immediately.
   *             Jobs that you have already submitted and that Elastic Transcoder has not started to process are
   *             affected in addition to jobs that you submit after you change settings. </p>
   *          </important>
   */
  public updatePipeline(
    args: UpdatePipelineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePipelineCommandOutput>;
  public updatePipeline(
    args: UpdatePipelineCommandInput,
    cb: (err: any, data?: UpdatePipelineCommandOutput) => void
  ): void;
  public updatePipeline(
    args: UpdatePipelineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePipelineCommandOutput) => void
  ): void;
  public updatePipeline(
    args: UpdatePipelineCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdatePipelineCommandOutput) => void),
    cb?: (err: any, data?: UpdatePipelineCommandOutput) => void
  ): Promise<UpdatePipelineCommandOutput> | void {
    const command = new UpdatePipelineCommand(args);
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
   * <p>With the UpdatePipelineNotifications operation, you can update Amazon Simple Notification Service (Amazon SNS) notifications for a pipeline.</p>
   *         <p>When you update notifications for a pipeline, Elastic Transcoder returns the values that you specified in the request.</p>
   */
  public updatePipelineNotifications(
    args: UpdatePipelineNotificationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePipelineNotificationsCommandOutput>;
  public updatePipelineNotifications(
    args: UpdatePipelineNotificationsCommandInput,
    cb: (err: any, data?: UpdatePipelineNotificationsCommandOutput) => void
  ): void;
  public updatePipelineNotifications(
    args: UpdatePipelineNotificationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePipelineNotificationsCommandOutput) => void
  ): void;
  public updatePipelineNotifications(
    args: UpdatePipelineNotificationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdatePipelineNotificationsCommandOutput) => void),
    cb?: (err: any, data?: UpdatePipelineNotificationsCommandOutput) => void
  ): Promise<UpdatePipelineNotificationsCommandOutput> | void {
    const command = new UpdatePipelineNotificationsCommand(args);
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
   * <p>The UpdatePipelineStatus operation pauses or reactivates a pipeline, so that the pipeline
   *             stops or restarts the processing of jobs.</p>
   *         <p>Changing the pipeline status is useful if you want to cancel one or more jobs. You can't
   *             cancel jobs after Elastic Transcoder has started processing them; if you pause the pipeline to which
   *             you submitted the jobs, you have more time to get the job IDs for the jobs that you want
   *             to cancel, and to send a <a>CancelJob</a> request. </p>
   */
  public updatePipelineStatus(
    args: UpdatePipelineStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePipelineStatusCommandOutput>;
  public updatePipelineStatus(
    args: UpdatePipelineStatusCommandInput,
    cb: (err: any, data?: UpdatePipelineStatusCommandOutput) => void
  ): void;
  public updatePipelineStatus(
    args: UpdatePipelineStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePipelineStatusCommandOutput) => void
  ): void;
  public updatePipelineStatus(
    args: UpdatePipelineStatusCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdatePipelineStatusCommandOutput) => void),
    cb?: (err: any, data?: UpdatePipelineStatusCommandOutput) => void
  ): Promise<UpdatePipelineStatusCommandOutput> | void {
    const command = new UpdatePipelineStatusCommand(args);
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
