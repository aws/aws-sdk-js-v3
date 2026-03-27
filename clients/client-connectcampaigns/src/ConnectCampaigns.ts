// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

import {
  type CreateCampaignCommandInput,
  type CreateCampaignCommandOutput,
  CreateCampaignCommand,
} from "./commands/CreateCampaignCommand";
import {
  type DeleteCampaignCommandInput,
  type DeleteCampaignCommandOutput,
  DeleteCampaignCommand,
} from "./commands/DeleteCampaignCommand";
import {
  type DeleteConnectInstanceConfigCommandInput,
  type DeleteConnectInstanceConfigCommandOutput,
  DeleteConnectInstanceConfigCommand,
} from "./commands/DeleteConnectInstanceConfigCommand";
import {
  type DeleteInstanceOnboardingJobCommandInput,
  type DeleteInstanceOnboardingJobCommandOutput,
  DeleteInstanceOnboardingJobCommand,
} from "./commands/DeleteInstanceOnboardingJobCommand";
import {
  type DescribeCampaignCommandInput,
  type DescribeCampaignCommandOutput,
  DescribeCampaignCommand,
} from "./commands/DescribeCampaignCommand";
import {
  type GetCampaignStateBatchCommandInput,
  type GetCampaignStateBatchCommandOutput,
  GetCampaignStateBatchCommand,
} from "./commands/GetCampaignStateBatchCommand";
import {
  type GetCampaignStateCommandInput,
  type GetCampaignStateCommandOutput,
  GetCampaignStateCommand,
} from "./commands/GetCampaignStateCommand";
import {
  type GetConnectInstanceConfigCommandInput,
  type GetConnectInstanceConfigCommandOutput,
  GetConnectInstanceConfigCommand,
} from "./commands/GetConnectInstanceConfigCommand";
import {
  type GetInstanceOnboardingJobStatusCommandInput,
  type GetInstanceOnboardingJobStatusCommandOutput,
  GetInstanceOnboardingJobStatusCommand,
} from "./commands/GetInstanceOnboardingJobStatusCommand";
import {
  type ListCampaignsCommandInput,
  type ListCampaignsCommandOutput,
  ListCampaignsCommand,
} from "./commands/ListCampaignsCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type PauseCampaignCommandInput,
  type PauseCampaignCommandOutput,
  PauseCampaignCommand,
} from "./commands/PauseCampaignCommand";
import {
  type PutDialRequestBatchCommandInput,
  type PutDialRequestBatchCommandOutput,
  PutDialRequestBatchCommand,
} from "./commands/PutDialRequestBatchCommand";
import {
  type ResumeCampaignCommandInput,
  type ResumeCampaignCommandOutput,
  ResumeCampaignCommand,
} from "./commands/ResumeCampaignCommand";
import {
  type StartCampaignCommandInput,
  type StartCampaignCommandOutput,
  StartCampaignCommand,
} from "./commands/StartCampaignCommand";
import {
  type StartInstanceOnboardingJobCommandInput,
  type StartInstanceOnboardingJobCommandOutput,
  StartInstanceOnboardingJobCommand,
} from "./commands/StartInstanceOnboardingJobCommand";
import {
  type StopCampaignCommandInput,
  type StopCampaignCommandOutput,
  StopCampaignCommand,
} from "./commands/StopCampaignCommand";
import {
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  TagResourceCommand,
} from "./commands/TagResourceCommand";
import {
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UntagResourceCommand,
} from "./commands/UntagResourceCommand";
import {
  type UpdateCampaignDialerConfigCommandInput,
  type UpdateCampaignDialerConfigCommandOutput,
  UpdateCampaignDialerConfigCommand,
} from "./commands/UpdateCampaignDialerConfigCommand";
import {
  type UpdateCampaignNameCommandInput,
  type UpdateCampaignNameCommandOutput,
  UpdateCampaignNameCommand,
} from "./commands/UpdateCampaignNameCommand";
import {
  type UpdateCampaignOutboundCallConfigCommandInput,
  type UpdateCampaignOutboundCallConfigCommandOutput,
  UpdateCampaignOutboundCallConfigCommand,
} from "./commands/UpdateCampaignOutboundCallConfigCommand";
import { ConnectCampaignsClient } from "./ConnectCampaignsClient";
import { paginateListCampaigns } from "./pagination/ListCampaignsPaginator";

const commands = {
  CreateCampaignCommand,
  DeleteCampaignCommand,
  DeleteConnectInstanceConfigCommand,
  DeleteInstanceOnboardingJobCommand,
  DescribeCampaignCommand,
  GetCampaignStateCommand,
  GetCampaignStateBatchCommand,
  GetConnectInstanceConfigCommand,
  GetInstanceOnboardingJobStatusCommand,
  ListCampaignsCommand,
  ListTagsForResourceCommand,
  PauseCampaignCommand,
  PutDialRequestBatchCommand,
  ResumeCampaignCommand,
  StartCampaignCommand,
  StartInstanceOnboardingJobCommand,
  StopCampaignCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateCampaignDialerConfigCommand,
  UpdateCampaignNameCommand,
  UpdateCampaignOutboundCallConfigCommand,
};
const paginators = {
  paginateListCampaigns,
};

export interface ConnectCampaigns {
  /**
   * @see {@link CreateCampaignCommand}
   */
  createCampaign(
    args: CreateCampaignCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCampaignCommandOutput>;
  createCampaign(
    args: CreateCampaignCommandInput,
    cb: (err: any, data?: CreateCampaignCommandOutput) => void
  ): void;
  createCampaign(
    args: CreateCampaignCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCampaignCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCampaignCommand}
   */
  deleteCampaign(
    args: DeleteCampaignCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCampaignCommandOutput>;
  deleteCampaign(
    args: DeleteCampaignCommandInput,
    cb: (err: any, data?: DeleteCampaignCommandOutput) => void
  ): void;
  deleteCampaign(
    args: DeleteCampaignCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCampaignCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteConnectInstanceConfigCommand}
   */
  deleteConnectInstanceConfig(
    args: DeleteConnectInstanceConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteConnectInstanceConfigCommandOutput>;
  deleteConnectInstanceConfig(
    args: DeleteConnectInstanceConfigCommandInput,
    cb: (err: any, data?: DeleteConnectInstanceConfigCommandOutput) => void
  ): void;
  deleteConnectInstanceConfig(
    args: DeleteConnectInstanceConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteConnectInstanceConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteInstanceOnboardingJobCommand}
   */
  deleteInstanceOnboardingJob(
    args: DeleteInstanceOnboardingJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteInstanceOnboardingJobCommandOutput>;
  deleteInstanceOnboardingJob(
    args: DeleteInstanceOnboardingJobCommandInput,
    cb: (err: any, data?: DeleteInstanceOnboardingJobCommandOutput) => void
  ): void;
  deleteInstanceOnboardingJob(
    args: DeleteInstanceOnboardingJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteInstanceOnboardingJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeCampaignCommand}
   */
  describeCampaign(
    args: DescribeCampaignCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCampaignCommandOutput>;
  describeCampaign(
    args: DescribeCampaignCommandInput,
    cb: (err: any, data?: DescribeCampaignCommandOutput) => void
  ): void;
  describeCampaign(
    args: DescribeCampaignCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCampaignCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCampaignStateCommand}
   */
  getCampaignState(
    args: GetCampaignStateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCampaignStateCommandOutput>;
  getCampaignState(
    args: GetCampaignStateCommandInput,
    cb: (err: any, data?: GetCampaignStateCommandOutput) => void
  ): void;
  getCampaignState(
    args: GetCampaignStateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCampaignStateCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCampaignStateBatchCommand}
   */
  getCampaignStateBatch(
    args: GetCampaignStateBatchCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCampaignStateBatchCommandOutput>;
  getCampaignStateBatch(
    args: GetCampaignStateBatchCommandInput,
    cb: (err: any, data?: GetCampaignStateBatchCommandOutput) => void
  ): void;
  getCampaignStateBatch(
    args: GetCampaignStateBatchCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCampaignStateBatchCommandOutput) => void
  ): void;

  /**
   * @see {@link GetConnectInstanceConfigCommand}
   */
  getConnectInstanceConfig(
    args: GetConnectInstanceConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetConnectInstanceConfigCommandOutput>;
  getConnectInstanceConfig(
    args: GetConnectInstanceConfigCommandInput,
    cb: (err: any, data?: GetConnectInstanceConfigCommandOutput) => void
  ): void;
  getConnectInstanceConfig(
    args: GetConnectInstanceConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetConnectInstanceConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link GetInstanceOnboardingJobStatusCommand}
   */
  getInstanceOnboardingJobStatus(
    args: GetInstanceOnboardingJobStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetInstanceOnboardingJobStatusCommandOutput>;
  getInstanceOnboardingJobStatus(
    args: GetInstanceOnboardingJobStatusCommandInput,
    cb: (err: any, data?: GetInstanceOnboardingJobStatusCommandOutput) => void
  ): void;
  getInstanceOnboardingJobStatus(
    args: GetInstanceOnboardingJobStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetInstanceOnboardingJobStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCampaignsCommand}
   */
  listCampaigns(): Promise<ListCampaignsCommandOutput>;
  listCampaigns(
    args: ListCampaignsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCampaignsCommandOutput>;
  listCampaigns(
    args: ListCampaignsCommandInput,
    cb: (err: any, data?: ListCampaignsCommandOutput) => void
  ): void;
  listCampaigns(
    args: ListCampaignsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCampaignsCommandOutput) => void
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
   * @see {@link PauseCampaignCommand}
   */
  pauseCampaign(
    args: PauseCampaignCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PauseCampaignCommandOutput>;
  pauseCampaign(
    args: PauseCampaignCommandInput,
    cb: (err: any, data?: PauseCampaignCommandOutput) => void
  ): void;
  pauseCampaign(
    args: PauseCampaignCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PauseCampaignCommandOutput) => void
  ): void;

  /**
   * @see {@link PutDialRequestBatchCommand}
   */
  putDialRequestBatch(
    args: PutDialRequestBatchCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutDialRequestBatchCommandOutput>;
  putDialRequestBatch(
    args: PutDialRequestBatchCommandInput,
    cb: (err: any, data?: PutDialRequestBatchCommandOutput) => void
  ): void;
  putDialRequestBatch(
    args: PutDialRequestBatchCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutDialRequestBatchCommandOutput) => void
  ): void;

  /**
   * @see {@link ResumeCampaignCommand}
   */
  resumeCampaign(
    args: ResumeCampaignCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ResumeCampaignCommandOutput>;
  resumeCampaign(
    args: ResumeCampaignCommandInput,
    cb: (err: any, data?: ResumeCampaignCommandOutput) => void
  ): void;
  resumeCampaign(
    args: ResumeCampaignCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResumeCampaignCommandOutput) => void
  ): void;

  /**
   * @see {@link StartCampaignCommand}
   */
  startCampaign(
    args: StartCampaignCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartCampaignCommandOutput>;
  startCampaign(
    args: StartCampaignCommandInput,
    cb: (err: any, data?: StartCampaignCommandOutput) => void
  ): void;
  startCampaign(
    args: StartCampaignCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartCampaignCommandOutput) => void
  ): void;

  /**
   * @see {@link StartInstanceOnboardingJobCommand}
   */
  startInstanceOnboardingJob(
    args: StartInstanceOnboardingJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartInstanceOnboardingJobCommandOutput>;
  startInstanceOnboardingJob(
    args: StartInstanceOnboardingJobCommandInput,
    cb: (err: any, data?: StartInstanceOnboardingJobCommandOutput) => void
  ): void;
  startInstanceOnboardingJob(
    args: StartInstanceOnboardingJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartInstanceOnboardingJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StopCampaignCommand}
   */
  stopCampaign(
    args: StopCampaignCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopCampaignCommandOutput>;
  stopCampaign(
    args: StopCampaignCommandInput,
    cb: (err: any, data?: StopCampaignCommandOutput) => void
  ): void;
  stopCampaign(
    args: StopCampaignCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopCampaignCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateCampaignDialerConfigCommand}
   */
  updateCampaignDialerConfig(
    args: UpdateCampaignDialerConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateCampaignDialerConfigCommandOutput>;
  updateCampaignDialerConfig(
    args: UpdateCampaignDialerConfigCommandInput,
    cb: (err: any, data?: UpdateCampaignDialerConfigCommandOutput) => void
  ): void;
  updateCampaignDialerConfig(
    args: UpdateCampaignDialerConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateCampaignDialerConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateCampaignNameCommand}
   */
  updateCampaignName(
    args: UpdateCampaignNameCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateCampaignNameCommandOutput>;
  updateCampaignName(
    args: UpdateCampaignNameCommandInput,
    cb: (err: any, data?: UpdateCampaignNameCommandOutput) => void
  ): void;
  updateCampaignName(
    args: UpdateCampaignNameCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateCampaignNameCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateCampaignOutboundCallConfigCommand}
   */
  updateCampaignOutboundCallConfig(
    args: UpdateCampaignOutboundCallConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateCampaignOutboundCallConfigCommandOutput>;
  updateCampaignOutboundCallConfig(
    args: UpdateCampaignOutboundCallConfigCommandInput,
    cb: (err: any, data?: UpdateCampaignOutboundCallConfigCommandOutput) => void
  ): void;
  updateCampaignOutboundCallConfig(
    args: UpdateCampaignOutboundCallConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateCampaignOutboundCallConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCampaignsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListCampaignsCommandOutput}.
   */
  paginateListCampaigns(
    args?: ListCampaignsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListCampaignsCommandOutput>;
}

/**
 * Provide APIs to create and manage Amazon Connect Campaigns.
 * @public
 */
export class ConnectCampaigns extends ConnectCampaignsClient implements ConnectCampaigns {}
createAggregatedClient(commands, ConnectCampaigns, { paginators });
