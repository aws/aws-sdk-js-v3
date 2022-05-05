// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  AssociateCertificateCommand,
  AssociateCertificateCommandInput,
  AssociateCertificateCommandOutput,
} from "./commands/AssociateCertificateCommand";
import { CancelJobCommand, CancelJobCommandInput, CancelJobCommandOutput } from "./commands/CancelJobCommand";
import { CreateJobCommand, CreateJobCommandInput, CreateJobCommandOutput } from "./commands/CreateJobCommand";
import {
  CreateJobTemplateCommand,
  CreateJobTemplateCommandInput,
  CreateJobTemplateCommandOutput,
} from "./commands/CreateJobTemplateCommand";
import {
  CreatePresetCommand,
  CreatePresetCommandInput,
  CreatePresetCommandOutput,
} from "./commands/CreatePresetCommand";
import { CreateQueueCommand, CreateQueueCommandInput, CreateQueueCommandOutput } from "./commands/CreateQueueCommand";
import {
  DeleteJobTemplateCommand,
  DeleteJobTemplateCommandInput,
  DeleteJobTemplateCommandOutput,
} from "./commands/DeleteJobTemplateCommand";
import {
  DeletePolicyCommand,
  DeletePolicyCommandInput,
  DeletePolicyCommandOutput,
} from "./commands/DeletePolicyCommand";
import {
  DeletePresetCommand,
  DeletePresetCommandInput,
  DeletePresetCommandOutput,
} from "./commands/DeletePresetCommand";
import { DeleteQueueCommand, DeleteQueueCommandInput, DeleteQueueCommandOutput } from "./commands/DeleteQueueCommand";
import {
  DescribeEndpointsCommand,
  DescribeEndpointsCommandInput,
  DescribeEndpointsCommandOutput,
} from "./commands/DescribeEndpointsCommand";
import {
  DisassociateCertificateCommand,
  DisassociateCertificateCommandInput,
  DisassociateCertificateCommandOutput,
} from "./commands/DisassociateCertificateCommand";
import { GetJobCommand, GetJobCommandInput, GetJobCommandOutput } from "./commands/GetJobCommand";
import {
  GetJobTemplateCommand,
  GetJobTemplateCommandInput,
  GetJobTemplateCommandOutput,
} from "./commands/GetJobTemplateCommand";
import { GetPolicyCommand, GetPolicyCommandInput, GetPolicyCommandOutput } from "./commands/GetPolicyCommand";
import { GetPresetCommand, GetPresetCommandInput, GetPresetCommandOutput } from "./commands/GetPresetCommand";
import { GetQueueCommand, GetQueueCommandInput, GetQueueCommandOutput } from "./commands/GetQueueCommand";
import { ListJobsCommand, ListJobsCommandInput, ListJobsCommandOutput } from "./commands/ListJobsCommand";
import {
  ListJobTemplatesCommand,
  ListJobTemplatesCommandInput,
  ListJobTemplatesCommandOutput,
} from "./commands/ListJobTemplatesCommand";
import { ListPresetsCommand, ListPresetsCommandInput, ListPresetsCommandOutput } from "./commands/ListPresetsCommand";
import { ListQueuesCommand, ListQueuesCommandInput, ListQueuesCommandOutput } from "./commands/ListQueuesCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { PutPolicyCommand, PutPolicyCommandInput, PutPolicyCommandOutput } from "./commands/PutPolicyCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateJobTemplateCommand,
  UpdateJobTemplateCommandInput,
  UpdateJobTemplateCommandOutput,
} from "./commands/UpdateJobTemplateCommand";
import {
  UpdatePresetCommand,
  UpdatePresetCommandInput,
  UpdatePresetCommandOutput,
} from "./commands/UpdatePresetCommand";
import { UpdateQueueCommand, UpdateQueueCommandInput, UpdateQueueCommandOutput } from "./commands/UpdateQueueCommand";
import { MediaConvertClient } from "./MediaConvertClient";

/**
 * AWS Elemental MediaConvert
 */
export class MediaConvert extends MediaConvertClient {
  /**
   * Associates an AWS Certificate Manager (ACM) Amazon Resource Name (ARN) with AWS Elemental MediaConvert.
   */
  public associateCertificate(
    args: AssociateCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateCertificateCommandOutput>;
  public associateCertificate(
    args: AssociateCertificateCommandInput,
    cb: (err: any, data?: AssociateCertificateCommandOutput) => void
  ): void;
  public associateCertificate(
    args: AssociateCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateCertificateCommandOutput) => void
  ): void;
  public associateCertificate(
    args: AssociateCertificateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateCertificateCommandOutput) => void),
    cb?: (err: any, data?: AssociateCertificateCommandOutput) => void
  ): Promise<AssociateCertificateCommandOutput> | void {
    const command = new AssociateCertificateCommand(args);
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
   * Permanently cancel a job. Once you have canceled a job, you can't start it again.
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
   * Create a new transcoding job. For information about jobs and job settings, see the User Guide at http://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html
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
   * Create a new job template. For information about job templates see the User Guide at http://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html
   */
  public createJobTemplate(
    args: CreateJobTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateJobTemplateCommandOutput>;
  public createJobTemplate(
    args: CreateJobTemplateCommandInput,
    cb: (err: any, data?: CreateJobTemplateCommandOutput) => void
  ): void;
  public createJobTemplate(
    args: CreateJobTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateJobTemplateCommandOutput) => void
  ): void;
  public createJobTemplate(
    args: CreateJobTemplateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateJobTemplateCommandOutput) => void),
    cb?: (err: any, data?: CreateJobTemplateCommandOutput) => void
  ): Promise<CreateJobTemplateCommandOutput> | void {
    const command = new CreateJobTemplateCommand(args);
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
   * Create a new preset. For information about job templates see the User Guide at http://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html
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
   * Create a new transcoding queue. For information about queues, see Working With Queues in the User Guide at https://docs.aws.amazon.com/mediaconvert/latest/ug/working-with-queues.html
   */
  public createQueue(args: CreateQueueCommandInput, options?: __HttpHandlerOptions): Promise<CreateQueueCommandOutput>;
  public createQueue(args: CreateQueueCommandInput, cb: (err: any, data?: CreateQueueCommandOutput) => void): void;
  public createQueue(
    args: CreateQueueCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateQueueCommandOutput) => void
  ): void;
  public createQueue(
    args: CreateQueueCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateQueueCommandOutput) => void),
    cb?: (err: any, data?: CreateQueueCommandOutput) => void
  ): Promise<CreateQueueCommandOutput> | void {
    const command = new CreateQueueCommand(args);
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
   * Permanently delete a job template you have created.
   */
  public deleteJobTemplate(
    args: DeleteJobTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteJobTemplateCommandOutput>;
  public deleteJobTemplate(
    args: DeleteJobTemplateCommandInput,
    cb: (err: any, data?: DeleteJobTemplateCommandOutput) => void
  ): void;
  public deleteJobTemplate(
    args: DeleteJobTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteJobTemplateCommandOutput) => void
  ): void;
  public deleteJobTemplate(
    args: DeleteJobTemplateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteJobTemplateCommandOutput) => void),
    cb?: (err: any, data?: DeleteJobTemplateCommandOutput) => void
  ): Promise<DeleteJobTemplateCommandOutput> | void {
    const command = new DeleteJobTemplateCommand(args);
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
   * Permanently delete a policy that you created.
   */
  public deletePolicy(
    args: DeletePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePolicyCommandOutput>;
  public deletePolicy(args: DeletePolicyCommandInput, cb: (err: any, data?: DeletePolicyCommandOutput) => void): void;
  public deletePolicy(
    args: DeletePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePolicyCommandOutput) => void
  ): void;
  public deletePolicy(
    args: DeletePolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeletePolicyCommandOutput) => void),
    cb?: (err: any, data?: DeletePolicyCommandOutput) => void
  ): Promise<DeletePolicyCommandOutput> | void {
    const command = new DeletePolicyCommand(args);
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
   * Permanently delete a preset you have created.
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
   * Permanently delete a queue you have created.
   */
  public deleteQueue(args: DeleteQueueCommandInput, options?: __HttpHandlerOptions): Promise<DeleteQueueCommandOutput>;
  public deleteQueue(args: DeleteQueueCommandInput, cb: (err: any, data?: DeleteQueueCommandOutput) => void): void;
  public deleteQueue(
    args: DeleteQueueCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteQueueCommandOutput) => void
  ): void;
  public deleteQueue(
    args: DeleteQueueCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteQueueCommandOutput) => void),
    cb?: (err: any, data?: DeleteQueueCommandOutput) => void
  ): Promise<DeleteQueueCommandOutput> | void {
    const command = new DeleteQueueCommand(args);
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
   * Send an request with an empty body to the regional API endpoint to get your account API endpoint.
   */
  public describeEndpoints(
    args: DescribeEndpointsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEndpointsCommandOutput>;
  public describeEndpoints(
    args: DescribeEndpointsCommandInput,
    cb: (err: any, data?: DescribeEndpointsCommandOutput) => void
  ): void;
  public describeEndpoints(
    args: DescribeEndpointsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEndpointsCommandOutput) => void
  ): void;
  public describeEndpoints(
    args: DescribeEndpointsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeEndpointsCommandOutput) => void),
    cb?: (err: any, data?: DescribeEndpointsCommandOutput) => void
  ): Promise<DescribeEndpointsCommandOutput> | void {
    const command = new DescribeEndpointsCommand(args);
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
   * Removes an association between the Amazon Resource Name (ARN) of an AWS Certificate Manager (ACM) certificate and an AWS Elemental MediaConvert resource.
   */
  public disassociateCertificate(
    args: DisassociateCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateCertificateCommandOutput>;
  public disassociateCertificate(
    args: DisassociateCertificateCommandInput,
    cb: (err: any, data?: DisassociateCertificateCommandOutput) => void
  ): void;
  public disassociateCertificate(
    args: DisassociateCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateCertificateCommandOutput) => void
  ): void;
  public disassociateCertificate(
    args: DisassociateCertificateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisassociateCertificateCommandOutput) => void),
    cb?: (err: any, data?: DisassociateCertificateCommandOutput) => void
  ): Promise<DisassociateCertificateCommandOutput> | void {
    const command = new DisassociateCertificateCommand(args);
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
   * Retrieve the JSON for a specific completed transcoding job.
   */
  public getJob(args: GetJobCommandInput, options?: __HttpHandlerOptions): Promise<GetJobCommandOutput>;
  public getJob(args: GetJobCommandInput, cb: (err: any, data?: GetJobCommandOutput) => void): void;
  public getJob(
    args: GetJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetJobCommandOutput) => void
  ): void;
  public getJob(
    args: GetJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetJobCommandOutput) => void),
    cb?: (err: any, data?: GetJobCommandOutput) => void
  ): Promise<GetJobCommandOutput> | void {
    const command = new GetJobCommand(args);
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
   * Retrieve the JSON for a specific job template.
   */
  public getJobTemplate(
    args: GetJobTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetJobTemplateCommandOutput>;
  public getJobTemplate(
    args: GetJobTemplateCommandInput,
    cb: (err: any, data?: GetJobTemplateCommandOutput) => void
  ): void;
  public getJobTemplate(
    args: GetJobTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetJobTemplateCommandOutput) => void
  ): void;
  public getJobTemplate(
    args: GetJobTemplateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetJobTemplateCommandOutput) => void),
    cb?: (err: any, data?: GetJobTemplateCommandOutput) => void
  ): Promise<GetJobTemplateCommandOutput> | void {
    const command = new GetJobTemplateCommand(args);
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
   * Retrieve the JSON for your policy.
   */
  public getPolicy(args: GetPolicyCommandInput, options?: __HttpHandlerOptions): Promise<GetPolicyCommandOutput>;
  public getPolicy(args: GetPolicyCommandInput, cb: (err: any, data?: GetPolicyCommandOutput) => void): void;
  public getPolicy(
    args: GetPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPolicyCommandOutput) => void
  ): void;
  public getPolicy(
    args: GetPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetPolicyCommandOutput) => void),
    cb?: (err: any, data?: GetPolicyCommandOutput) => void
  ): Promise<GetPolicyCommandOutput> | void {
    const command = new GetPolicyCommand(args);
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
   * Retrieve the JSON for a specific preset.
   */
  public getPreset(args: GetPresetCommandInput, options?: __HttpHandlerOptions): Promise<GetPresetCommandOutput>;
  public getPreset(args: GetPresetCommandInput, cb: (err: any, data?: GetPresetCommandOutput) => void): void;
  public getPreset(
    args: GetPresetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPresetCommandOutput) => void
  ): void;
  public getPreset(
    args: GetPresetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetPresetCommandOutput) => void),
    cb?: (err: any, data?: GetPresetCommandOutput) => void
  ): Promise<GetPresetCommandOutput> | void {
    const command = new GetPresetCommand(args);
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
   * Retrieve the JSON for a specific queue.
   */
  public getQueue(args: GetQueueCommandInput, options?: __HttpHandlerOptions): Promise<GetQueueCommandOutput>;
  public getQueue(args: GetQueueCommandInput, cb: (err: any, data?: GetQueueCommandOutput) => void): void;
  public getQueue(
    args: GetQueueCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetQueueCommandOutput) => void
  ): void;
  public getQueue(
    args: GetQueueCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetQueueCommandOutput) => void),
    cb?: (err: any, data?: GetQueueCommandOutput) => void
  ): Promise<GetQueueCommandOutput> | void {
    const command = new GetQueueCommand(args);
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
   * Retrieve a JSON array of up to twenty of your most recently created jobs. This array includes in-process, completed, and errored jobs. This will return the jobs themselves, not just a list of the jobs. To retrieve the twenty next most recent jobs, use the nextToken string returned with the array.
   */
  public listJobs(args: ListJobsCommandInput, options?: __HttpHandlerOptions): Promise<ListJobsCommandOutput>;
  public listJobs(args: ListJobsCommandInput, cb: (err: any, data?: ListJobsCommandOutput) => void): void;
  public listJobs(
    args: ListJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListJobsCommandOutput) => void
  ): void;
  public listJobs(
    args: ListJobsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListJobsCommandOutput) => void),
    cb?: (err: any, data?: ListJobsCommandOutput) => void
  ): Promise<ListJobsCommandOutput> | void {
    const command = new ListJobsCommand(args);
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
   * Retrieve a JSON array of up to twenty of your job templates. This will return the templates themselves, not just a list of them. To retrieve the next twenty templates, use the nextToken string returned with the array
   */
  public listJobTemplates(
    args: ListJobTemplatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListJobTemplatesCommandOutput>;
  public listJobTemplates(
    args: ListJobTemplatesCommandInput,
    cb: (err: any, data?: ListJobTemplatesCommandOutput) => void
  ): void;
  public listJobTemplates(
    args: ListJobTemplatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListJobTemplatesCommandOutput) => void
  ): void;
  public listJobTemplates(
    args: ListJobTemplatesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListJobTemplatesCommandOutput) => void),
    cb?: (err: any, data?: ListJobTemplatesCommandOutput) => void
  ): Promise<ListJobTemplatesCommandOutput> | void {
    const command = new ListJobTemplatesCommand(args);
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
   * Retrieve a JSON array of up to twenty of your presets. This will return the presets themselves, not just a list of them. To retrieve the next twenty presets, use the nextToken string returned with the array.
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
   * Retrieve a JSON array of up to twenty of your queues. This will return the queues themselves, not just a list of them. To retrieve the next twenty queues, use the nextToken string returned with the array.
   */
  public listQueues(args: ListQueuesCommandInput, options?: __HttpHandlerOptions): Promise<ListQueuesCommandOutput>;
  public listQueues(args: ListQueuesCommandInput, cb: (err: any, data?: ListQueuesCommandOutput) => void): void;
  public listQueues(
    args: ListQueuesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListQueuesCommandOutput) => void
  ): void;
  public listQueues(
    args: ListQueuesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListQueuesCommandOutput) => void),
    cb?: (err: any, data?: ListQueuesCommandOutput) => void
  ): Promise<ListQueuesCommandOutput> | void {
    const command = new ListQueuesCommand(args);
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
   * Retrieve the tags for a MediaConvert resource.
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
   * Create or change your policy. For more information about policies, see the user guide at http://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html
   */
  public putPolicy(args: PutPolicyCommandInput, options?: __HttpHandlerOptions): Promise<PutPolicyCommandOutput>;
  public putPolicy(args: PutPolicyCommandInput, cb: (err: any, data?: PutPolicyCommandOutput) => void): void;
  public putPolicy(
    args: PutPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutPolicyCommandOutput) => void
  ): void;
  public putPolicy(
    args: PutPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutPolicyCommandOutput) => void),
    cb?: (err: any, data?: PutPolicyCommandOutput) => void
  ): Promise<PutPolicyCommandOutput> | void {
    const command = new PutPolicyCommand(args);
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
   * Add tags to a MediaConvert queue, preset, or job template. For information about tagging, see the User Guide at https://docs.aws.amazon.com/mediaconvert/latest/ug/tagging-resources.html
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
   * Remove tags from a MediaConvert queue, preset, or job template. For information about tagging, see the User Guide at https://docs.aws.amazon.com/mediaconvert/latest/ug/tagging-resources.html
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
   * Modify one of your existing job templates.
   */
  public updateJobTemplate(
    args: UpdateJobTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateJobTemplateCommandOutput>;
  public updateJobTemplate(
    args: UpdateJobTemplateCommandInput,
    cb: (err: any, data?: UpdateJobTemplateCommandOutput) => void
  ): void;
  public updateJobTemplate(
    args: UpdateJobTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateJobTemplateCommandOutput) => void
  ): void;
  public updateJobTemplate(
    args: UpdateJobTemplateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateJobTemplateCommandOutput) => void),
    cb?: (err: any, data?: UpdateJobTemplateCommandOutput) => void
  ): Promise<UpdateJobTemplateCommandOutput> | void {
    const command = new UpdateJobTemplateCommand(args);
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
   * Modify one of your existing presets.
   */
  public updatePreset(
    args: UpdatePresetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePresetCommandOutput>;
  public updatePreset(args: UpdatePresetCommandInput, cb: (err: any, data?: UpdatePresetCommandOutput) => void): void;
  public updatePreset(
    args: UpdatePresetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePresetCommandOutput) => void
  ): void;
  public updatePreset(
    args: UpdatePresetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdatePresetCommandOutput) => void),
    cb?: (err: any, data?: UpdatePresetCommandOutput) => void
  ): Promise<UpdatePresetCommandOutput> | void {
    const command = new UpdatePresetCommand(args);
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
   * Modify one of your existing queues.
   */
  public updateQueue(args: UpdateQueueCommandInput, options?: __HttpHandlerOptions): Promise<UpdateQueueCommandOutput>;
  public updateQueue(args: UpdateQueueCommandInput, cb: (err: any, data?: UpdateQueueCommandOutput) => void): void;
  public updateQueue(
    args: UpdateQueueCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateQueueCommandOutput) => void
  ): void;
  public updateQueue(
    args: UpdateQueueCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateQueueCommandOutput) => void),
    cb?: (err: any, data?: UpdateQueueCommandOutput) => void
  ): Promise<UpdateQueueCommandOutput> | void {
    const command = new UpdateQueueCommand(args);
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
