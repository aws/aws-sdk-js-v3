// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

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
import { MediaConvertClient, MediaConvertClientConfig } from "./MediaConvertClient";

const commands = {
  AssociateCertificateCommand,
  CancelJobCommand,
  CreateJobCommand,
  CreateJobTemplateCommand,
  CreatePresetCommand,
  CreateQueueCommand,
  DeleteJobTemplateCommand,
  DeletePolicyCommand,
  DeletePresetCommand,
  DeleteQueueCommand,
  DescribeEndpointsCommand,
  DisassociateCertificateCommand,
  GetJobCommand,
  GetJobTemplateCommand,
  GetPolicyCommand,
  GetPresetCommand,
  GetQueueCommand,
  ListJobsCommand,
  ListJobTemplatesCommand,
  ListPresetsCommand,
  ListQueuesCommand,
  ListTagsForResourceCommand,
  PutPolicyCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateJobTemplateCommand,
  UpdatePresetCommand,
  UpdateQueueCommand,
};

export interface MediaConvert {
  /**
   * @see {@link AssociateCertificateCommand}
   */
  associateCertificate(
    args: AssociateCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateCertificateCommandOutput>;
  associateCertificate(
    args: AssociateCertificateCommandInput,
    cb: (err: any, data?: AssociateCertificateCommandOutput) => void
  ): void;
  associateCertificate(
    args: AssociateCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateCertificateCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelJobCommand}
   */
  cancelJob(args: CancelJobCommandInput, options?: __HttpHandlerOptions): Promise<CancelJobCommandOutput>;
  cancelJob(args: CancelJobCommandInput, cb: (err: any, data?: CancelJobCommandOutput) => void): void;
  cancelJob(
    args: CancelJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelJobCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateJobCommand}
   */
  createJob(args: CreateJobCommandInput, options?: __HttpHandlerOptions): Promise<CreateJobCommandOutput>;
  createJob(args: CreateJobCommandInput, cb: (err: any, data?: CreateJobCommandOutput) => void): void;
  createJob(
    args: CreateJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateJobCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateJobTemplateCommand}
   */
  createJobTemplate(
    args: CreateJobTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateJobTemplateCommandOutput>;
  createJobTemplate(
    args: CreateJobTemplateCommandInput,
    cb: (err: any, data?: CreateJobTemplateCommandOutput) => void
  ): void;
  createJobTemplate(
    args: CreateJobTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateJobTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePresetCommand}
   */
  createPreset(args: CreatePresetCommandInput, options?: __HttpHandlerOptions): Promise<CreatePresetCommandOutput>;
  createPreset(args: CreatePresetCommandInput, cb: (err: any, data?: CreatePresetCommandOutput) => void): void;
  createPreset(
    args: CreatePresetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePresetCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateQueueCommand}
   */
  createQueue(args: CreateQueueCommandInput, options?: __HttpHandlerOptions): Promise<CreateQueueCommandOutput>;
  createQueue(args: CreateQueueCommandInput, cb: (err: any, data?: CreateQueueCommandOutput) => void): void;
  createQueue(
    args: CreateQueueCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateQueueCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteJobTemplateCommand}
   */
  deleteJobTemplate(
    args: DeleteJobTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteJobTemplateCommandOutput>;
  deleteJobTemplate(
    args: DeleteJobTemplateCommandInput,
    cb: (err: any, data?: DeleteJobTemplateCommandOutput) => void
  ): void;
  deleteJobTemplate(
    args: DeleteJobTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteJobTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePolicyCommand}
   */
  deletePolicy(args: DeletePolicyCommandInput, options?: __HttpHandlerOptions): Promise<DeletePolicyCommandOutput>;
  deletePolicy(args: DeletePolicyCommandInput, cb: (err: any, data?: DeletePolicyCommandOutput) => void): void;
  deletePolicy(
    args: DeletePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePresetCommand}
   */
  deletePreset(args: DeletePresetCommandInput, options?: __HttpHandlerOptions): Promise<DeletePresetCommandOutput>;
  deletePreset(args: DeletePresetCommandInput, cb: (err: any, data?: DeletePresetCommandOutput) => void): void;
  deletePreset(
    args: DeletePresetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePresetCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteQueueCommand}
   */
  deleteQueue(args: DeleteQueueCommandInput, options?: __HttpHandlerOptions): Promise<DeleteQueueCommandOutput>;
  deleteQueue(args: DeleteQueueCommandInput, cb: (err: any, data?: DeleteQueueCommandOutput) => void): void;
  deleteQueue(
    args: DeleteQueueCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteQueueCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEndpointsCommand}
   */
  describeEndpoints(
    args: DescribeEndpointsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEndpointsCommandOutput>;
  describeEndpoints(
    args: DescribeEndpointsCommandInput,
    cb: (err: any, data?: DescribeEndpointsCommandOutput) => void
  ): void;
  describeEndpoints(
    args: DescribeEndpointsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEndpointsCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateCertificateCommand}
   */
  disassociateCertificate(
    args: DisassociateCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateCertificateCommandOutput>;
  disassociateCertificate(
    args: DisassociateCertificateCommandInput,
    cb: (err: any, data?: DisassociateCertificateCommandOutput) => void
  ): void;
  disassociateCertificate(
    args: DisassociateCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateCertificateCommandOutput) => void
  ): void;

  /**
   * @see {@link GetJobCommand}
   */
  getJob(args: GetJobCommandInput, options?: __HttpHandlerOptions): Promise<GetJobCommandOutput>;
  getJob(args: GetJobCommandInput, cb: (err: any, data?: GetJobCommandOutput) => void): void;
  getJob(
    args: GetJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetJobCommandOutput) => void
  ): void;

  /**
   * @see {@link GetJobTemplateCommand}
   */
  getJobTemplate(
    args: GetJobTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetJobTemplateCommandOutput>;
  getJobTemplate(args: GetJobTemplateCommandInput, cb: (err: any, data?: GetJobTemplateCommandOutput) => void): void;
  getJobTemplate(
    args: GetJobTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetJobTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPolicyCommand}
   */
  getPolicy(args: GetPolicyCommandInput, options?: __HttpHandlerOptions): Promise<GetPolicyCommandOutput>;
  getPolicy(args: GetPolicyCommandInput, cb: (err: any, data?: GetPolicyCommandOutput) => void): void;
  getPolicy(
    args: GetPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPresetCommand}
   */
  getPreset(args: GetPresetCommandInput, options?: __HttpHandlerOptions): Promise<GetPresetCommandOutput>;
  getPreset(args: GetPresetCommandInput, cb: (err: any, data?: GetPresetCommandOutput) => void): void;
  getPreset(
    args: GetPresetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPresetCommandOutput) => void
  ): void;

  /**
   * @see {@link GetQueueCommand}
   */
  getQueue(args: GetQueueCommandInput, options?: __HttpHandlerOptions): Promise<GetQueueCommandOutput>;
  getQueue(args: GetQueueCommandInput, cb: (err: any, data?: GetQueueCommandOutput) => void): void;
  getQueue(
    args: GetQueueCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetQueueCommandOutput) => void
  ): void;

  /**
   * @see {@link ListJobsCommand}
   */
  listJobs(args: ListJobsCommandInput, options?: __HttpHandlerOptions): Promise<ListJobsCommandOutput>;
  listJobs(args: ListJobsCommandInput, cb: (err: any, data?: ListJobsCommandOutput) => void): void;
  listJobs(
    args: ListJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListJobTemplatesCommand}
   */
  listJobTemplates(
    args: ListJobTemplatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListJobTemplatesCommandOutput>;
  listJobTemplates(
    args: ListJobTemplatesCommandInput,
    cb: (err: any, data?: ListJobTemplatesCommandOutput) => void
  ): void;
  listJobTemplates(
    args: ListJobTemplatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListJobTemplatesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPresetsCommand}
   */
  listPresets(args: ListPresetsCommandInput, options?: __HttpHandlerOptions): Promise<ListPresetsCommandOutput>;
  listPresets(args: ListPresetsCommandInput, cb: (err: any, data?: ListPresetsCommandOutput) => void): void;
  listPresets(
    args: ListPresetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPresetsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListQueuesCommand}
   */
  listQueues(args: ListQueuesCommandInput, options?: __HttpHandlerOptions): Promise<ListQueuesCommandOutput>;
  listQueues(args: ListQueuesCommandInput, cb: (err: any, data?: ListQueuesCommandOutput) => void): void;
  listQueues(
    args: ListQueuesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListQueuesCommandOutput) => void
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
   * @see {@link PutPolicyCommand}
   */
  putPolicy(args: PutPolicyCommandInput, options?: __HttpHandlerOptions): Promise<PutPolicyCommandOutput>;
  putPolicy(args: PutPolicyCommandInput, cb: (err: any, data?: PutPolicyCommandOutput) => void): void;
  putPolicy(
    args: PutPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutPolicyCommandOutput) => void
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
   * @see {@link UpdateJobTemplateCommand}
   */
  updateJobTemplate(
    args: UpdateJobTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateJobTemplateCommandOutput>;
  updateJobTemplate(
    args: UpdateJobTemplateCommandInput,
    cb: (err: any, data?: UpdateJobTemplateCommandOutput) => void
  ): void;
  updateJobTemplate(
    args: UpdateJobTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateJobTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdatePresetCommand}
   */
  updatePreset(args: UpdatePresetCommandInput, options?: __HttpHandlerOptions): Promise<UpdatePresetCommandOutput>;
  updatePreset(args: UpdatePresetCommandInput, cb: (err: any, data?: UpdatePresetCommandOutput) => void): void;
  updatePreset(
    args: UpdatePresetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePresetCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateQueueCommand}
   */
  updateQueue(args: UpdateQueueCommandInput, options?: __HttpHandlerOptions): Promise<UpdateQueueCommandOutput>;
  updateQueue(args: UpdateQueueCommandInput, cb: (err: any, data?: UpdateQueueCommandOutput) => void): void;
  updateQueue(
    args: UpdateQueueCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateQueueCommandOutput) => void
  ): void;
}

/**
 * @public
 * AWS Elemental MediaConvert
 */
export class MediaConvert extends MediaConvertClient implements MediaConvert {}
createAggregatedClient(commands, MediaConvert);
