// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  CreateCampaignCommand,
  CreateCampaignCommandInput,
  CreateCampaignCommandOutput,
} from "./commands/CreateCampaignCommand";
import {
  DeleteCampaignChannelSubtypeConfigCommand,
  DeleteCampaignChannelSubtypeConfigCommandInput,
  DeleteCampaignChannelSubtypeConfigCommandOutput,
} from "./commands/DeleteCampaignChannelSubtypeConfigCommand";
import {
  DeleteCampaignCommand,
  DeleteCampaignCommandInput,
  DeleteCampaignCommandOutput,
} from "./commands/DeleteCampaignCommand";
import {
  DeleteCampaignCommunicationLimitsCommand,
  DeleteCampaignCommunicationLimitsCommandInput,
  DeleteCampaignCommunicationLimitsCommandOutput,
} from "./commands/DeleteCampaignCommunicationLimitsCommand";
import {
  DeleteCampaignCommunicationTimeCommand,
  DeleteCampaignCommunicationTimeCommandInput,
  DeleteCampaignCommunicationTimeCommandOutput,
} from "./commands/DeleteCampaignCommunicationTimeCommand";
import {
  DeleteConnectInstanceConfigCommand,
  DeleteConnectInstanceConfigCommandInput,
  DeleteConnectInstanceConfigCommandOutput,
} from "./commands/DeleteConnectInstanceConfigCommand";
import {
  DeleteConnectInstanceIntegrationCommand,
  DeleteConnectInstanceIntegrationCommandInput,
  DeleteConnectInstanceIntegrationCommandOutput,
} from "./commands/DeleteConnectInstanceIntegrationCommand";
import {
  DeleteInstanceOnboardingJobCommand,
  DeleteInstanceOnboardingJobCommandInput,
  DeleteInstanceOnboardingJobCommandOutput,
} from "./commands/DeleteInstanceOnboardingJobCommand";
import {
  DescribeCampaignCommand,
  DescribeCampaignCommandInput,
  DescribeCampaignCommandOutput,
} from "./commands/DescribeCampaignCommand";
import {
  GetCampaignStateBatchCommand,
  GetCampaignStateBatchCommandInput,
  GetCampaignStateBatchCommandOutput,
} from "./commands/GetCampaignStateBatchCommand";
import {
  GetCampaignStateCommand,
  GetCampaignStateCommandInput,
  GetCampaignStateCommandOutput,
} from "./commands/GetCampaignStateCommand";
import {
  GetConnectInstanceConfigCommand,
  GetConnectInstanceConfigCommandInput,
  GetConnectInstanceConfigCommandOutput,
} from "./commands/GetConnectInstanceConfigCommand";
import {
  GetInstanceOnboardingJobStatusCommand,
  GetInstanceOnboardingJobStatusCommandInput,
  GetInstanceOnboardingJobStatusCommandOutput,
} from "./commands/GetInstanceOnboardingJobStatusCommand";
import {
  ListCampaignsCommand,
  ListCampaignsCommandInput,
  ListCampaignsCommandOutput,
} from "./commands/ListCampaignsCommand";
import {
  ListConnectInstanceIntegrationsCommand,
  ListConnectInstanceIntegrationsCommandInput,
  ListConnectInstanceIntegrationsCommandOutput,
} from "./commands/ListConnectInstanceIntegrationsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  PauseCampaignCommand,
  PauseCampaignCommandInput,
  PauseCampaignCommandOutput,
} from "./commands/PauseCampaignCommand";
import {
  PutConnectInstanceIntegrationCommand,
  PutConnectInstanceIntegrationCommandInput,
  PutConnectInstanceIntegrationCommandOutput,
} from "./commands/PutConnectInstanceIntegrationCommand";
import {
  PutOutboundRequestBatchCommand,
  PutOutboundRequestBatchCommandInput,
  PutOutboundRequestBatchCommandOutput,
} from "./commands/PutOutboundRequestBatchCommand";
import {
  ResumeCampaignCommand,
  ResumeCampaignCommandInput,
  ResumeCampaignCommandOutput,
} from "./commands/ResumeCampaignCommand";
import {
  StartCampaignCommand,
  StartCampaignCommandInput,
  StartCampaignCommandOutput,
} from "./commands/StartCampaignCommand";
import {
  StartInstanceOnboardingJobCommand,
  StartInstanceOnboardingJobCommandInput,
  StartInstanceOnboardingJobCommandOutput,
} from "./commands/StartInstanceOnboardingJobCommand";
import {
  StopCampaignCommand,
  StopCampaignCommandInput,
  StopCampaignCommandOutput,
} from "./commands/StopCampaignCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateCampaignChannelSubtypeConfigCommand,
  UpdateCampaignChannelSubtypeConfigCommandInput,
  UpdateCampaignChannelSubtypeConfigCommandOutput,
} from "./commands/UpdateCampaignChannelSubtypeConfigCommand";
import {
  UpdateCampaignCommunicationLimitsCommand,
  UpdateCampaignCommunicationLimitsCommandInput,
  UpdateCampaignCommunicationLimitsCommandOutput,
} from "./commands/UpdateCampaignCommunicationLimitsCommand";
import {
  UpdateCampaignCommunicationTimeCommand,
  UpdateCampaignCommunicationTimeCommandInput,
  UpdateCampaignCommunicationTimeCommandOutput,
} from "./commands/UpdateCampaignCommunicationTimeCommand";
import {
  UpdateCampaignFlowAssociationCommand,
  UpdateCampaignFlowAssociationCommandInput,
  UpdateCampaignFlowAssociationCommandOutput,
} from "./commands/UpdateCampaignFlowAssociationCommand";
import {
  UpdateCampaignNameCommand,
  UpdateCampaignNameCommandInput,
  UpdateCampaignNameCommandOutput,
} from "./commands/UpdateCampaignNameCommand";
import {
  UpdateCampaignScheduleCommand,
  UpdateCampaignScheduleCommandInput,
  UpdateCampaignScheduleCommandOutput,
} from "./commands/UpdateCampaignScheduleCommand";
import {
  UpdateCampaignSourceCommand,
  UpdateCampaignSourceCommandInput,
  UpdateCampaignSourceCommandOutput,
} from "./commands/UpdateCampaignSourceCommand";
import { ConnectCampaignsV2Client, ConnectCampaignsV2ClientConfig } from "./ConnectCampaignsV2Client";

const commands = {
  CreateCampaignCommand,
  DeleteCampaignCommand,
  DeleteCampaignChannelSubtypeConfigCommand,
  DeleteCampaignCommunicationLimitsCommand,
  DeleteCampaignCommunicationTimeCommand,
  DeleteConnectInstanceConfigCommand,
  DeleteConnectInstanceIntegrationCommand,
  DeleteInstanceOnboardingJobCommand,
  DescribeCampaignCommand,
  GetCampaignStateCommand,
  GetCampaignStateBatchCommand,
  GetConnectInstanceConfigCommand,
  GetInstanceOnboardingJobStatusCommand,
  ListCampaignsCommand,
  ListConnectInstanceIntegrationsCommand,
  ListTagsForResourceCommand,
  PauseCampaignCommand,
  PutConnectInstanceIntegrationCommand,
  PutOutboundRequestBatchCommand,
  ResumeCampaignCommand,
  StartCampaignCommand,
  StartInstanceOnboardingJobCommand,
  StopCampaignCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateCampaignChannelSubtypeConfigCommand,
  UpdateCampaignCommunicationLimitsCommand,
  UpdateCampaignCommunicationTimeCommand,
  UpdateCampaignFlowAssociationCommand,
  UpdateCampaignNameCommand,
  UpdateCampaignScheduleCommand,
  UpdateCampaignSourceCommand,
};

export interface ConnectCampaignsV2 {
  /**
   * @see {@link CreateCampaignCommand}
   */
  createCampaign(
    args: CreateCampaignCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCampaignCommandOutput>;
  createCampaign(args: CreateCampaignCommandInput, cb: (err: any, data?: CreateCampaignCommandOutput) => void): void;
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
  deleteCampaign(args: DeleteCampaignCommandInput, cb: (err: any, data?: DeleteCampaignCommandOutput) => void): void;
  deleteCampaign(
    args: DeleteCampaignCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCampaignCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCampaignChannelSubtypeConfigCommand}
   */
  deleteCampaignChannelSubtypeConfig(
    args: DeleteCampaignChannelSubtypeConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCampaignChannelSubtypeConfigCommandOutput>;
  deleteCampaignChannelSubtypeConfig(
    args: DeleteCampaignChannelSubtypeConfigCommandInput,
    cb: (err: any, data?: DeleteCampaignChannelSubtypeConfigCommandOutput) => void
  ): void;
  deleteCampaignChannelSubtypeConfig(
    args: DeleteCampaignChannelSubtypeConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCampaignChannelSubtypeConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCampaignCommunicationLimitsCommand}
   */
  deleteCampaignCommunicationLimits(
    args: DeleteCampaignCommunicationLimitsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCampaignCommunicationLimitsCommandOutput>;
  deleteCampaignCommunicationLimits(
    args: DeleteCampaignCommunicationLimitsCommandInput,
    cb: (err: any, data?: DeleteCampaignCommunicationLimitsCommandOutput) => void
  ): void;
  deleteCampaignCommunicationLimits(
    args: DeleteCampaignCommunicationLimitsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCampaignCommunicationLimitsCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCampaignCommunicationTimeCommand}
   */
  deleteCampaignCommunicationTime(
    args: DeleteCampaignCommunicationTimeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCampaignCommunicationTimeCommandOutput>;
  deleteCampaignCommunicationTime(
    args: DeleteCampaignCommunicationTimeCommandInput,
    cb: (err: any, data?: DeleteCampaignCommunicationTimeCommandOutput) => void
  ): void;
  deleteCampaignCommunicationTime(
    args: DeleteCampaignCommunicationTimeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCampaignCommunicationTimeCommandOutput) => void
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
   * @see {@link DeleteConnectInstanceIntegrationCommand}
   */
  deleteConnectInstanceIntegration(
    args: DeleteConnectInstanceIntegrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteConnectInstanceIntegrationCommandOutput>;
  deleteConnectInstanceIntegration(
    args: DeleteConnectInstanceIntegrationCommandInput,
    cb: (err: any, data?: DeleteConnectInstanceIntegrationCommandOutput) => void
  ): void;
  deleteConnectInstanceIntegration(
    args: DeleteConnectInstanceIntegrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteConnectInstanceIntegrationCommandOutput) => void
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
  listCampaigns(args: ListCampaignsCommandInput, options?: __HttpHandlerOptions): Promise<ListCampaignsCommandOutput>;
  listCampaigns(args: ListCampaignsCommandInput, cb: (err: any, data?: ListCampaignsCommandOutput) => void): void;
  listCampaigns(
    args: ListCampaignsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCampaignsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListConnectInstanceIntegrationsCommand}
   */
  listConnectInstanceIntegrations(
    args: ListConnectInstanceIntegrationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListConnectInstanceIntegrationsCommandOutput>;
  listConnectInstanceIntegrations(
    args: ListConnectInstanceIntegrationsCommandInput,
    cb: (err: any, data?: ListConnectInstanceIntegrationsCommandOutput) => void
  ): void;
  listConnectInstanceIntegrations(
    args: ListConnectInstanceIntegrationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListConnectInstanceIntegrationsCommandOutput) => void
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
  pauseCampaign(args: PauseCampaignCommandInput, options?: __HttpHandlerOptions): Promise<PauseCampaignCommandOutput>;
  pauseCampaign(args: PauseCampaignCommandInput, cb: (err: any, data?: PauseCampaignCommandOutput) => void): void;
  pauseCampaign(
    args: PauseCampaignCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PauseCampaignCommandOutput) => void
  ): void;

  /**
   * @see {@link PutConnectInstanceIntegrationCommand}
   */
  putConnectInstanceIntegration(
    args: PutConnectInstanceIntegrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutConnectInstanceIntegrationCommandOutput>;
  putConnectInstanceIntegration(
    args: PutConnectInstanceIntegrationCommandInput,
    cb: (err: any, data?: PutConnectInstanceIntegrationCommandOutput) => void
  ): void;
  putConnectInstanceIntegration(
    args: PutConnectInstanceIntegrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutConnectInstanceIntegrationCommandOutput) => void
  ): void;

  /**
   * @see {@link PutOutboundRequestBatchCommand}
   */
  putOutboundRequestBatch(
    args: PutOutboundRequestBatchCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutOutboundRequestBatchCommandOutput>;
  putOutboundRequestBatch(
    args: PutOutboundRequestBatchCommandInput,
    cb: (err: any, data?: PutOutboundRequestBatchCommandOutput) => void
  ): void;
  putOutboundRequestBatch(
    args: PutOutboundRequestBatchCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutOutboundRequestBatchCommandOutput) => void
  ): void;

  /**
   * @see {@link ResumeCampaignCommand}
   */
  resumeCampaign(
    args: ResumeCampaignCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ResumeCampaignCommandOutput>;
  resumeCampaign(args: ResumeCampaignCommandInput, cb: (err: any, data?: ResumeCampaignCommandOutput) => void): void;
  resumeCampaign(
    args: ResumeCampaignCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResumeCampaignCommandOutput) => void
  ): void;

  /**
   * @see {@link StartCampaignCommand}
   */
  startCampaign(args: StartCampaignCommandInput, options?: __HttpHandlerOptions): Promise<StartCampaignCommandOutput>;
  startCampaign(args: StartCampaignCommandInput, cb: (err: any, data?: StartCampaignCommandOutput) => void): void;
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
  stopCampaign(args: StopCampaignCommandInput, options?: __HttpHandlerOptions): Promise<StopCampaignCommandOutput>;
  stopCampaign(args: StopCampaignCommandInput, cb: (err: any, data?: StopCampaignCommandOutput) => void): void;
  stopCampaign(
    args: StopCampaignCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopCampaignCommandOutput) => void
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
   * @see {@link UpdateCampaignChannelSubtypeConfigCommand}
   */
  updateCampaignChannelSubtypeConfig(
    args: UpdateCampaignChannelSubtypeConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateCampaignChannelSubtypeConfigCommandOutput>;
  updateCampaignChannelSubtypeConfig(
    args: UpdateCampaignChannelSubtypeConfigCommandInput,
    cb: (err: any, data?: UpdateCampaignChannelSubtypeConfigCommandOutput) => void
  ): void;
  updateCampaignChannelSubtypeConfig(
    args: UpdateCampaignChannelSubtypeConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateCampaignChannelSubtypeConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateCampaignCommunicationLimitsCommand}
   */
  updateCampaignCommunicationLimits(
    args: UpdateCampaignCommunicationLimitsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateCampaignCommunicationLimitsCommandOutput>;
  updateCampaignCommunicationLimits(
    args: UpdateCampaignCommunicationLimitsCommandInput,
    cb: (err: any, data?: UpdateCampaignCommunicationLimitsCommandOutput) => void
  ): void;
  updateCampaignCommunicationLimits(
    args: UpdateCampaignCommunicationLimitsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateCampaignCommunicationLimitsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateCampaignCommunicationTimeCommand}
   */
  updateCampaignCommunicationTime(
    args: UpdateCampaignCommunicationTimeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateCampaignCommunicationTimeCommandOutput>;
  updateCampaignCommunicationTime(
    args: UpdateCampaignCommunicationTimeCommandInput,
    cb: (err: any, data?: UpdateCampaignCommunicationTimeCommandOutput) => void
  ): void;
  updateCampaignCommunicationTime(
    args: UpdateCampaignCommunicationTimeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateCampaignCommunicationTimeCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateCampaignFlowAssociationCommand}
   */
  updateCampaignFlowAssociation(
    args: UpdateCampaignFlowAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateCampaignFlowAssociationCommandOutput>;
  updateCampaignFlowAssociation(
    args: UpdateCampaignFlowAssociationCommandInput,
    cb: (err: any, data?: UpdateCampaignFlowAssociationCommandOutput) => void
  ): void;
  updateCampaignFlowAssociation(
    args: UpdateCampaignFlowAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateCampaignFlowAssociationCommandOutput) => void
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
   * @see {@link UpdateCampaignScheduleCommand}
   */
  updateCampaignSchedule(
    args: UpdateCampaignScheduleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateCampaignScheduleCommandOutput>;
  updateCampaignSchedule(
    args: UpdateCampaignScheduleCommandInput,
    cb: (err: any, data?: UpdateCampaignScheduleCommandOutput) => void
  ): void;
  updateCampaignSchedule(
    args: UpdateCampaignScheduleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateCampaignScheduleCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateCampaignSourceCommand}
   */
  updateCampaignSource(
    args: UpdateCampaignSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateCampaignSourceCommandOutput>;
  updateCampaignSource(
    args: UpdateCampaignSourceCommandInput,
    cb: (err: any, data?: UpdateCampaignSourceCommandOutput) => void
  ): void;
  updateCampaignSource(
    args: UpdateCampaignSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateCampaignSourceCommandOutput) => void
  ): void;
}

/**
 * Provide APIs to create and manage Amazon Connect Campaigns.
 * @public
 */
export class ConnectCampaignsV2 extends ConnectCampaignsV2Client implements ConnectCampaignsV2 {}
createAggregatedClient(commands, ConnectCampaignsV2);
