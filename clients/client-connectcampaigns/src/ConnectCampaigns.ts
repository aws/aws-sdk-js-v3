// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  CreateCampaignCommand,
  CreateCampaignCommandInput,
  CreateCampaignCommandOutput,
} from "./commands/CreateCampaignCommand";
import {
  DeleteCampaignCommand,
  DeleteCampaignCommandInput,
  DeleteCampaignCommandOutput,
} from "./commands/DeleteCampaignCommand";
import {
  DeleteConnectInstanceConfigCommand,
  DeleteConnectInstanceConfigCommandInput,
  DeleteConnectInstanceConfigCommandOutput,
} from "./commands/DeleteConnectInstanceConfigCommand";
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
  PutDialRequestBatchCommand,
  PutDialRequestBatchCommandInput,
  PutDialRequestBatchCommandOutput,
} from "./commands/PutDialRequestBatchCommand";
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
  UpdateCampaignDialerConfigCommand,
  UpdateCampaignDialerConfigCommandInput,
  UpdateCampaignDialerConfigCommandOutput,
} from "./commands/UpdateCampaignDialerConfigCommand";
import {
  UpdateCampaignNameCommand,
  UpdateCampaignNameCommandInput,
  UpdateCampaignNameCommandOutput,
} from "./commands/UpdateCampaignNameCommand";
import {
  UpdateCampaignOutboundCallConfigCommand,
  UpdateCampaignOutboundCallConfigCommandInput,
  UpdateCampaignOutboundCallConfigCommandOutput,
} from "./commands/UpdateCampaignOutboundCallConfigCommand";
import { ConnectCampaignsClient } from "./ConnectCampaignsClient";

/**
 * Provide APIs to create and manage Amazon Connect Campaigns.
 */
export class ConnectCampaigns extends ConnectCampaignsClient {
  /**
   * Creates a campaign for the specified Amazon Connect account. This API is idempotent.
   */
  public createCampaign(
    args: CreateCampaignCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCampaignCommandOutput>;
  public createCampaign(
    args: CreateCampaignCommandInput,
    cb: (err: any, data?: CreateCampaignCommandOutput) => void
  ): void;
  public createCampaign(
    args: CreateCampaignCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCampaignCommandOutput) => void
  ): void;
  public createCampaign(
    args: CreateCampaignCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateCampaignCommandOutput) => void),
    cb?: (err: any, data?: CreateCampaignCommandOutput) => void
  ): Promise<CreateCampaignCommandOutput> | void {
    const command = new CreateCampaignCommand(args);
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
   * Deletes a campaign from the specified Amazon Connect account.
   */
  public deleteCampaign(
    args: DeleteCampaignCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCampaignCommandOutput>;
  public deleteCampaign(
    args: DeleteCampaignCommandInput,
    cb: (err: any, data?: DeleteCampaignCommandOutput) => void
  ): void;
  public deleteCampaign(
    args: DeleteCampaignCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCampaignCommandOutput) => void
  ): void;
  public deleteCampaign(
    args: DeleteCampaignCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteCampaignCommandOutput) => void),
    cb?: (err: any, data?: DeleteCampaignCommandOutput) => void
  ): Promise<DeleteCampaignCommandOutput> | void {
    const command = new DeleteCampaignCommand(args);
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
   * Deletes a connect instance config from the specified AWS account.
   */
  public deleteConnectInstanceConfig(
    args: DeleteConnectInstanceConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteConnectInstanceConfigCommandOutput>;
  public deleteConnectInstanceConfig(
    args: DeleteConnectInstanceConfigCommandInput,
    cb: (err: any, data?: DeleteConnectInstanceConfigCommandOutput) => void
  ): void;
  public deleteConnectInstanceConfig(
    args: DeleteConnectInstanceConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteConnectInstanceConfigCommandOutput) => void
  ): void;
  public deleteConnectInstanceConfig(
    args: DeleteConnectInstanceConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteConnectInstanceConfigCommandOutput) => void),
    cb?: (err: any, data?: DeleteConnectInstanceConfigCommandOutput) => void
  ): Promise<DeleteConnectInstanceConfigCommandOutput> | void {
    const command = new DeleteConnectInstanceConfigCommand(args);
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
   * Delete the Connect Campaigns onboarding job for the specified Amazon Connect instance.
   */
  public deleteInstanceOnboardingJob(
    args: DeleteInstanceOnboardingJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteInstanceOnboardingJobCommandOutput>;
  public deleteInstanceOnboardingJob(
    args: DeleteInstanceOnboardingJobCommandInput,
    cb: (err: any, data?: DeleteInstanceOnboardingJobCommandOutput) => void
  ): void;
  public deleteInstanceOnboardingJob(
    args: DeleteInstanceOnboardingJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteInstanceOnboardingJobCommandOutput) => void
  ): void;
  public deleteInstanceOnboardingJob(
    args: DeleteInstanceOnboardingJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteInstanceOnboardingJobCommandOutput) => void),
    cb?: (err: any, data?: DeleteInstanceOnboardingJobCommandOutput) => void
  ): Promise<DeleteInstanceOnboardingJobCommandOutput> | void {
    const command = new DeleteInstanceOnboardingJobCommand(args);
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
   * Describes the specific campaign.
   */
  public describeCampaign(
    args: DescribeCampaignCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCampaignCommandOutput>;
  public describeCampaign(
    args: DescribeCampaignCommandInput,
    cb: (err: any, data?: DescribeCampaignCommandOutput) => void
  ): void;
  public describeCampaign(
    args: DescribeCampaignCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCampaignCommandOutput) => void
  ): void;
  public describeCampaign(
    args: DescribeCampaignCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeCampaignCommandOutput) => void),
    cb?: (err: any, data?: DescribeCampaignCommandOutput) => void
  ): Promise<DescribeCampaignCommandOutput> | void {
    const command = new DescribeCampaignCommand(args);
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
   * Get state of a campaign for the specified Amazon Connect account.
   */
  public getCampaignState(
    args: GetCampaignStateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCampaignStateCommandOutput>;
  public getCampaignState(
    args: GetCampaignStateCommandInput,
    cb: (err: any, data?: GetCampaignStateCommandOutput) => void
  ): void;
  public getCampaignState(
    args: GetCampaignStateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCampaignStateCommandOutput) => void
  ): void;
  public getCampaignState(
    args: GetCampaignStateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetCampaignStateCommandOutput) => void),
    cb?: (err: any, data?: GetCampaignStateCommandOutput) => void
  ): Promise<GetCampaignStateCommandOutput> | void {
    const command = new GetCampaignStateCommand(args);
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
   * Get state of campaigns for the specified Amazon Connect account.
   */
  public getCampaignStateBatch(
    args: GetCampaignStateBatchCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCampaignStateBatchCommandOutput>;
  public getCampaignStateBatch(
    args: GetCampaignStateBatchCommandInput,
    cb: (err: any, data?: GetCampaignStateBatchCommandOutput) => void
  ): void;
  public getCampaignStateBatch(
    args: GetCampaignStateBatchCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCampaignStateBatchCommandOutput) => void
  ): void;
  public getCampaignStateBatch(
    args: GetCampaignStateBatchCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetCampaignStateBatchCommandOutput) => void),
    cb?: (err: any, data?: GetCampaignStateBatchCommandOutput) => void
  ): Promise<GetCampaignStateBatchCommandOutput> | void {
    const command = new GetCampaignStateBatchCommand(args);
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
   * Get the specific Connect instance config.
   */
  public getConnectInstanceConfig(
    args: GetConnectInstanceConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetConnectInstanceConfigCommandOutput>;
  public getConnectInstanceConfig(
    args: GetConnectInstanceConfigCommandInput,
    cb: (err: any, data?: GetConnectInstanceConfigCommandOutput) => void
  ): void;
  public getConnectInstanceConfig(
    args: GetConnectInstanceConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetConnectInstanceConfigCommandOutput) => void
  ): void;
  public getConnectInstanceConfig(
    args: GetConnectInstanceConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetConnectInstanceConfigCommandOutput) => void),
    cb?: (err: any, data?: GetConnectInstanceConfigCommandOutput) => void
  ): Promise<GetConnectInstanceConfigCommandOutput> | void {
    const command = new GetConnectInstanceConfigCommand(args);
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
   * Get the specific instance onboarding job status.
   */
  public getInstanceOnboardingJobStatus(
    args: GetInstanceOnboardingJobStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetInstanceOnboardingJobStatusCommandOutput>;
  public getInstanceOnboardingJobStatus(
    args: GetInstanceOnboardingJobStatusCommandInput,
    cb: (err: any, data?: GetInstanceOnboardingJobStatusCommandOutput) => void
  ): void;
  public getInstanceOnboardingJobStatus(
    args: GetInstanceOnboardingJobStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetInstanceOnboardingJobStatusCommandOutput) => void
  ): void;
  public getInstanceOnboardingJobStatus(
    args: GetInstanceOnboardingJobStatusCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetInstanceOnboardingJobStatusCommandOutput) => void),
    cb?: (err: any, data?: GetInstanceOnboardingJobStatusCommandOutput) => void
  ): Promise<GetInstanceOnboardingJobStatusCommandOutput> | void {
    const command = new GetInstanceOnboardingJobStatusCommand(args);
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
   * Provides summary information about the campaigns under the specified Amazon Connect account.
   */
  public listCampaigns(
    args: ListCampaignsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCampaignsCommandOutput>;
  public listCampaigns(
    args: ListCampaignsCommandInput,
    cb: (err: any, data?: ListCampaignsCommandOutput) => void
  ): void;
  public listCampaigns(
    args: ListCampaignsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCampaignsCommandOutput) => void
  ): void;
  public listCampaigns(
    args: ListCampaignsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListCampaignsCommandOutput) => void),
    cb?: (err: any, data?: ListCampaignsCommandOutput) => void
  ): Promise<ListCampaignsCommandOutput> | void {
    const command = new ListCampaignsCommand(args);
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
   * List tags for a resource.
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
   * Pauses a campaign for the specified Amazon Connect account.
   */
  public pauseCampaign(
    args: PauseCampaignCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PauseCampaignCommandOutput>;
  public pauseCampaign(
    args: PauseCampaignCommandInput,
    cb: (err: any, data?: PauseCampaignCommandOutput) => void
  ): void;
  public pauseCampaign(
    args: PauseCampaignCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PauseCampaignCommandOutput) => void
  ): void;
  public pauseCampaign(
    args: PauseCampaignCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PauseCampaignCommandOutput) => void),
    cb?: (err: any, data?: PauseCampaignCommandOutput) => void
  ): Promise<PauseCampaignCommandOutput> | void {
    const command = new PauseCampaignCommand(args);
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
   * Creates dials requests for the specified campaign Amazon Connect account. This API is idempotent.
   */
  public putDialRequestBatch(
    args: PutDialRequestBatchCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutDialRequestBatchCommandOutput>;
  public putDialRequestBatch(
    args: PutDialRequestBatchCommandInput,
    cb: (err: any, data?: PutDialRequestBatchCommandOutput) => void
  ): void;
  public putDialRequestBatch(
    args: PutDialRequestBatchCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutDialRequestBatchCommandOutput) => void
  ): void;
  public putDialRequestBatch(
    args: PutDialRequestBatchCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutDialRequestBatchCommandOutput) => void),
    cb?: (err: any, data?: PutDialRequestBatchCommandOutput) => void
  ): Promise<PutDialRequestBatchCommandOutput> | void {
    const command = new PutDialRequestBatchCommand(args);
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
   * Stops a campaign for the specified Amazon Connect account.
   */
  public resumeCampaign(
    args: ResumeCampaignCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ResumeCampaignCommandOutput>;
  public resumeCampaign(
    args: ResumeCampaignCommandInput,
    cb: (err: any, data?: ResumeCampaignCommandOutput) => void
  ): void;
  public resumeCampaign(
    args: ResumeCampaignCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResumeCampaignCommandOutput) => void
  ): void;
  public resumeCampaign(
    args: ResumeCampaignCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ResumeCampaignCommandOutput) => void),
    cb?: (err: any, data?: ResumeCampaignCommandOutput) => void
  ): Promise<ResumeCampaignCommandOutput> | void {
    const command = new ResumeCampaignCommand(args);
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
   * Starts a campaign for the specified Amazon Connect account.
   */
  public startCampaign(
    args: StartCampaignCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartCampaignCommandOutput>;
  public startCampaign(
    args: StartCampaignCommandInput,
    cb: (err: any, data?: StartCampaignCommandOutput) => void
  ): void;
  public startCampaign(
    args: StartCampaignCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartCampaignCommandOutput) => void
  ): void;
  public startCampaign(
    args: StartCampaignCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartCampaignCommandOutput) => void),
    cb?: (err: any, data?: StartCampaignCommandOutput) => void
  ): Promise<StartCampaignCommandOutput> | void {
    const command = new StartCampaignCommand(args);
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
   * Onboard the specific Amazon Connect instance to Connect Campaigns.
   */
  public startInstanceOnboardingJob(
    args: StartInstanceOnboardingJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartInstanceOnboardingJobCommandOutput>;
  public startInstanceOnboardingJob(
    args: StartInstanceOnboardingJobCommandInput,
    cb: (err: any, data?: StartInstanceOnboardingJobCommandOutput) => void
  ): void;
  public startInstanceOnboardingJob(
    args: StartInstanceOnboardingJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartInstanceOnboardingJobCommandOutput) => void
  ): void;
  public startInstanceOnboardingJob(
    args: StartInstanceOnboardingJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartInstanceOnboardingJobCommandOutput) => void),
    cb?: (err: any, data?: StartInstanceOnboardingJobCommandOutput) => void
  ): Promise<StartInstanceOnboardingJobCommandOutput> | void {
    const command = new StartInstanceOnboardingJobCommand(args);
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
   * Stops a campaign for the specified Amazon Connect account.
   */
  public stopCampaign(
    args: StopCampaignCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopCampaignCommandOutput>;
  public stopCampaign(args: StopCampaignCommandInput, cb: (err: any, data?: StopCampaignCommandOutput) => void): void;
  public stopCampaign(
    args: StopCampaignCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopCampaignCommandOutput) => void
  ): void;
  public stopCampaign(
    args: StopCampaignCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StopCampaignCommandOutput) => void),
    cb?: (err: any, data?: StopCampaignCommandOutput) => void
  ): Promise<StopCampaignCommandOutput> | void {
    const command = new StopCampaignCommand(args);
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
   * Tag a resource.
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
   * Untag a resource.
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
   * Updates the dialer config of a campaign. This API is idempotent.
   */
  public updateCampaignDialerConfig(
    args: UpdateCampaignDialerConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateCampaignDialerConfigCommandOutput>;
  public updateCampaignDialerConfig(
    args: UpdateCampaignDialerConfigCommandInput,
    cb: (err: any, data?: UpdateCampaignDialerConfigCommandOutput) => void
  ): void;
  public updateCampaignDialerConfig(
    args: UpdateCampaignDialerConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateCampaignDialerConfigCommandOutput) => void
  ): void;
  public updateCampaignDialerConfig(
    args: UpdateCampaignDialerConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateCampaignDialerConfigCommandOutput) => void),
    cb?: (err: any, data?: UpdateCampaignDialerConfigCommandOutput) => void
  ): Promise<UpdateCampaignDialerConfigCommandOutput> | void {
    const command = new UpdateCampaignDialerConfigCommand(args);
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
   * Updates the name of a campaign. This API is idempotent.
   */
  public updateCampaignName(
    args: UpdateCampaignNameCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateCampaignNameCommandOutput>;
  public updateCampaignName(
    args: UpdateCampaignNameCommandInput,
    cb: (err: any, data?: UpdateCampaignNameCommandOutput) => void
  ): void;
  public updateCampaignName(
    args: UpdateCampaignNameCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateCampaignNameCommandOutput) => void
  ): void;
  public updateCampaignName(
    args: UpdateCampaignNameCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateCampaignNameCommandOutput) => void),
    cb?: (err: any, data?: UpdateCampaignNameCommandOutput) => void
  ): Promise<UpdateCampaignNameCommandOutput> | void {
    const command = new UpdateCampaignNameCommand(args);
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
   * Updates the outbound call config of a campaign. This API is idempotent.
   */
  public updateCampaignOutboundCallConfig(
    args: UpdateCampaignOutboundCallConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateCampaignOutboundCallConfigCommandOutput>;
  public updateCampaignOutboundCallConfig(
    args: UpdateCampaignOutboundCallConfigCommandInput,
    cb: (err: any, data?: UpdateCampaignOutboundCallConfigCommandOutput) => void
  ): void;
  public updateCampaignOutboundCallConfig(
    args: UpdateCampaignOutboundCallConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateCampaignOutboundCallConfigCommandOutput) => void
  ): void;
  public updateCampaignOutboundCallConfig(
    args: UpdateCampaignOutboundCallConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateCampaignOutboundCallConfigCommandOutput) => void),
    cb?: (err: any, data?: UpdateCampaignOutboundCallConfigCommandOutput) => void
  ): Promise<UpdateCampaignOutboundCallConfigCommandOutput> | void {
    const command = new UpdateCampaignOutboundCallConfigCommand(args);
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
