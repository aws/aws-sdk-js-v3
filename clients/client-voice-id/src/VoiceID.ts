// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  AssociateFraudsterCommand,
  AssociateFraudsterCommandInput,
  AssociateFraudsterCommandOutput,
} from "./commands/AssociateFraudsterCommand";
import {
  CreateDomainCommand,
  CreateDomainCommandInput,
  CreateDomainCommandOutput,
} from "./commands/CreateDomainCommand";
import {
  CreateWatchlistCommand,
  CreateWatchlistCommandInput,
  CreateWatchlistCommandOutput,
} from "./commands/CreateWatchlistCommand";
import {
  DeleteDomainCommand,
  DeleteDomainCommandInput,
  DeleteDomainCommandOutput,
} from "./commands/DeleteDomainCommand";
import {
  DeleteFraudsterCommand,
  DeleteFraudsterCommandInput,
  DeleteFraudsterCommandOutput,
} from "./commands/DeleteFraudsterCommand";
import {
  DeleteSpeakerCommand,
  DeleteSpeakerCommandInput,
  DeleteSpeakerCommandOutput,
} from "./commands/DeleteSpeakerCommand";
import {
  DeleteWatchlistCommand,
  DeleteWatchlistCommandInput,
  DeleteWatchlistCommandOutput,
} from "./commands/DeleteWatchlistCommand";
import {
  DescribeDomainCommand,
  DescribeDomainCommandInput,
  DescribeDomainCommandOutput,
} from "./commands/DescribeDomainCommand";
import {
  DescribeFraudsterCommand,
  DescribeFraudsterCommandInput,
  DescribeFraudsterCommandOutput,
} from "./commands/DescribeFraudsterCommand";
import {
  DescribeFraudsterRegistrationJobCommand,
  DescribeFraudsterRegistrationJobCommandInput,
  DescribeFraudsterRegistrationJobCommandOutput,
} from "./commands/DescribeFraudsterRegistrationJobCommand";
import {
  DescribeSpeakerCommand,
  DescribeSpeakerCommandInput,
  DescribeSpeakerCommandOutput,
} from "./commands/DescribeSpeakerCommand";
import {
  DescribeSpeakerEnrollmentJobCommand,
  DescribeSpeakerEnrollmentJobCommandInput,
  DescribeSpeakerEnrollmentJobCommandOutput,
} from "./commands/DescribeSpeakerEnrollmentJobCommand";
import {
  DescribeWatchlistCommand,
  DescribeWatchlistCommandInput,
  DescribeWatchlistCommandOutput,
} from "./commands/DescribeWatchlistCommand";
import {
  DisassociateFraudsterCommand,
  DisassociateFraudsterCommandInput,
  DisassociateFraudsterCommandOutput,
} from "./commands/DisassociateFraudsterCommand";
import {
  EvaluateSessionCommand,
  EvaluateSessionCommandInput,
  EvaluateSessionCommandOutput,
} from "./commands/EvaluateSessionCommand";
import { ListDomainsCommand, ListDomainsCommandInput, ListDomainsCommandOutput } from "./commands/ListDomainsCommand";
import {
  ListFraudsterRegistrationJobsCommand,
  ListFraudsterRegistrationJobsCommandInput,
  ListFraudsterRegistrationJobsCommandOutput,
} from "./commands/ListFraudsterRegistrationJobsCommand";
import {
  ListFraudstersCommand,
  ListFraudstersCommandInput,
  ListFraudstersCommandOutput,
} from "./commands/ListFraudstersCommand";
import {
  ListSpeakerEnrollmentJobsCommand,
  ListSpeakerEnrollmentJobsCommandInput,
  ListSpeakerEnrollmentJobsCommandOutput,
} from "./commands/ListSpeakerEnrollmentJobsCommand";
import {
  ListSpeakersCommand,
  ListSpeakersCommandInput,
  ListSpeakersCommandOutput,
} from "./commands/ListSpeakersCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListWatchlistsCommand,
  ListWatchlistsCommandInput,
  ListWatchlistsCommandOutput,
} from "./commands/ListWatchlistsCommand";
import {
  OptOutSpeakerCommand,
  OptOutSpeakerCommandInput,
  OptOutSpeakerCommandOutput,
} from "./commands/OptOutSpeakerCommand";
import {
  StartFraudsterRegistrationJobCommand,
  StartFraudsterRegistrationJobCommandInput,
  StartFraudsterRegistrationJobCommandOutput,
} from "./commands/StartFraudsterRegistrationJobCommand";
import {
  StartSpeakerEnrollmentJobCommand,
  StartSpeakerEnrollmentJobCommandInput,
  StartSpeakerEnrollmentJobCommandOutput,
} from "./commands/StartSpeakerEnrollmentJobCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateDomainCommand,
  UpdateDomainCommandInput,
  UpdateDomainCommandOutput,
} from "./commands/UpdateDomainCommand";
import {
  UpdateWatchlistCommand,
  UpdateWatchlistCommandInput,
  UpdateWatchlistCommandOutput,
} from "./commands/UpdateWatchlistCommand";
import { VoiceIDClient, VoiceIDClientConfig } from "./VoiceIDClient";

const commands = {
  AssociateFraudsterCommand,
  CreateDomainCommand,
  CreateWatchlistCommand,
  DeleteDomainCommand,
  DeleteFraudsterCommand,
  DeleteSpeakerCommand,
  DeleteWatchlistCommand,
  DescribeDomainCommand,
  DescribeFraudsterCommand,
  DescribeFraudsterRegistrationJobCommand,
  DescribeSpeakerCommand,
  DescribeSpeakerEnrollmentJobCommand,
  DescribeWatchlistCommand,
  DisassociateFraudsterCommand,
  EvaluateSessionCommand,
  ListDomainsCommand,
  ListFraudsterRegistrationJobsCommand,
  ListFraudstersCommand,
  ListSpeakerEnrollmentJobsCommand,
  ListSpeakersCommand,
  ListTagsForResourceCommand,
  ListWatchlistsCommand,
  OptOutSpeakerCommand,
  StartFraudsterRegistrationJobCommand,
  StartSpeakerEnrollmentJobCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateDomainCommand,
  UpdateWatchlistCommand,
};

export interface VoiceID {
  /**
   * @see {@link AssociateFraudsterCommand}
   */
  associateFraudster(
    args: AssociateFraudsterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateFraudsterCommandOutput>;
  associateFraudster(
    args: AssociateFraudsterCommandInput,
    cb: (err: any, data?: AssociateFraudsterCommandOutput) => void
  ): void;
  associateFraudster(
    args: AssociateFraudsterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateFraudsterCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDomainCommand}
   */
  createDomain(args: CreateDomainCommandInput, options?: __HttpHandlerOptions): Promise<CreateDomainCommandOutput>;
  createDomain(args: CreateDomainCommandInput, cb: (err: any, data?: CreateDomainCommandOutput) => void): void;
  createDomain(
    args: CreateDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateWatchlistCommand}
   */
  createWatchlist(
    args: CreateWatchlistCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateWatchlistCommandOutput>;
  createWatchlist(args: CreateWatchlistCommandInput, cb: (err: any, data?: CreateWatchlistCommandOutput) => void): void;
  createWatchlist(
    args: CreateWatchlistCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateWatchlistCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDomainCommand}
   */
  deleteDomain(args: DeleteDomainCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDomainCommandOutput>;
  deleteDomain(args: DeleteDomainCommandInput, cb: (err: any, data?: DeleteDomainCommandOutput) => void): void;
  deleteDomain(
    args: DeleteDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteFraudsterCommand}
   */
  deleteFraudster(
    args: DeleteFraudsterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteFraudsterCommandOutput>;
  deleteFraudster(args: DeleteFraudsterCommandInput, cb: (err: any, data?: DeleteFraudsterCommandOutput) => void): void;
  deleteFraudster(
    args: DeleteFraudsterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFraudsterCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSpeakerCommand}
   */
  deleteSpeaker(args: DeleteSpeakerCommandInput, options?: __HttpHandlerOptions): Promise<DeleteSpeakerCommandOutput>;
  deleteSpeaker(args: DeleteSpeakerCommandInput, cb: (err: any, data?: DeleteSpeakerCommandOutput) => void): void;
  deleteSpeaker(
    args: DeleteSpeakerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSpeakerCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteWatchlistCommand}
   */
  deleteWatchlist(
    args: DeleteWatchlistCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteWatchlistCommandOutput>;
  deleteWatchlist(args: DeleteWatchlistCommandInput, cb: (err: any, data?: DeleteWatchlistCommandOutput) => void): void;
  deleteWatchlist(
    args: DeleteWatchlistCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteWatchlistCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDomainCommand}
   */
  describeDomain(
    args: DescribeDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDomainCommandOutput>;
  describeDomain(args: DescribeDomainCommandInput, cb: (err: any, data?: DescribeDomainCommandOutput) => void): void;
  describeDomain(
    args: DescribeDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeFraudsterCommand}
   */
  describeFraudster(
    args: DescribeFraudsterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFraudsterCommandOutput>;
  describeFraudster(
    args: DescribeFraudsterCommandInput,
    cb: (err: any, data?: DescribeFraudsterCommandOutput) => void
  ): void;
  describeFraudster(
    args: DescribeFraudsterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFraudsterCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeFraudsterRegistrationJobCommand}
   */
  describeFraudsterRegistrationJob(
    args: DescribeFraudsterRegistrationJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFraudsterRegistrationJobCommandOutput>;
  describeFraudsterRegistrationJob(
    args: DescribeFraudsterRegistrationJobCommandInput,
    cb: (err: any, data?: DescribeFraudsterRegistrationJobCommandOutput) => void
  ): void;
  describeFraudsterRegistrationJob(
    args: DescribeFraudsterRegistrationJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFraudsterRegistrationJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeSpeakerCommand}
   */
  describeSpeaker(
    args: DescribeSpeakerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSpeakerCommandOutput>;
  describeSpeaker(args: DescribeSpeakerCommandInput, cb: (err: any, data?: DescribeSpeakerCommandOutput) => void): void;
  describeSpeaker(
    args: DescribeSpeakerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSpeakerCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeSpeakerEnrollmentJobCommand}
   */
  describeSpeakerEnrollmentJob(
    args: DescribeSpeakerEnrollmentJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSpeakerEnrollmentJobCommandOutput>;
  describeSpeakerEnrollmentJob(
    args: DescribeSpeakerEnrollmentJobCommandInput,
    cb: (err: any, data?: DescribeSpeakerEnrollmentJobCommandOutput) => void
  ): void;
  describeSpeakerEnrollmentJob(
    args: DescribeSpeakerEnrollmentJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSpeakerEnrollmentJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeWatchlistCommand}
   */
  describeWatchlist(
    args: DescribeWatchlistCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeWatchlistCommandOutput>;
  describeWatchlist(
    args: DescribeWatchlistCommandInput,
    cb: (err: any, data?: DescribeWatchlistCommandOutput) => void
  ): void;
  describeWatchlist(
    args: DescribeWatchlistCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeWatchlistCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateFraudsterCommand}
   */
  disassociateFraudster(
    args: DisassociateFraudsterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateFraudsterCommandOutput>;
  disassociateFraudster(
    args: DisassociateFraudsterCommandInput,
    cb: (err: any, data?: DisassociateFraudsterCommandOutput) => void
  ): void;
  disassociateFraudster(
    args: DisassociateFraudsterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateFraudsterCommandOutput) => void
  ): void;

  /**
   * @see {@link EvaluateSessionCommand}
   */
  evaluateSession(
    args: EvaluateSessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EvaluateSessionCommandOutput>;
  evaluateSession(args: EvaluateSessionCommandInput, cb: (err: any, data?: EvaluateSessionCommandOutput) => void): void;
  evaluateSession(
    args: EvaluateSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EvaluateSessionCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDomainsCommand}
   */
  listDomains(args: ListDomainsCommandInput, options?: __HttpHandlerOptions): Promise<ListDomainsCommandOutput>;
  listDomains(args: ListDomainsCommandInput, cb: (err: any, data?: ListDomainsCommandOutput) => void): void;
  listDomains(
    args: ListDomainsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDomainsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFraudsterRegistrationJobsCommand}
   */
  listFraudsterRegistrationJobs(
    args: ListFraudsterRegistrationJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFraudsterRegistrationJobsCommandOutput>;
  listFraudsterRegistrationJobs(
    args: ListFraudsterRegistrationJobsCommandInput,
    cb: (err: any, data?: ListFraudsterRegistrationJobsCommandOutput) => void
  ): void;
  listFraudsterRegistrationJobs(
    args: ListFraudsterRegistrationJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFraudsterRegistrationJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFraudstersCommand}
   */
  listFraudsters(
    args: ListFraudstersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFraudstersCommandOutput>;
  listFraudsters(args: ListFraudstersCommandInput, cb: (err: any, data?: ListFraudstersCommandOutput) => void): void;
  listFraudsters(
    args: ListFraudstersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFraudstersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSpeakerEnrollmentJobsCommand}
   */
  listSpeakerEnrollmentJobs(
    args: ListSpeakerEnrollmentJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSpeakerEnrollmentJobsCommandOutput>;
  listSpeakerEnrollmentJobs(
    args: ListSpeakerEnrollmentJobsCommandInput,
    cb: (err: any, data?: ListSpeakerEnrollmentJobsCommandOutput) => void
  ): void;
  listSpeakerEnrollmentJobs(
    args: ListSpeakerEnrollmentJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSpeakerEnrollmentJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSpeakersCommand}
   */
  listSpeakers(args: ListSpeakersCommandInput, options?: __HttpHandlerOptions): Promise<ListSpeakersCommandOutput>;
  listSpeakers(args: ListSpeakersCommandInput, cb: (err: any, data?: ListSpeakersCommandOutput) => void): void;
  listSpeakers(
    args: ListSpeakersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSpeakersCommandOutput) => void
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
   * @see {@link ListWatchlistsCommand}
   */
  listWatchlists(
    args: ListWatchlistsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListWatchlistsCommandOutput>;
  listWatchlists(args: ListWatchlistsCommandInput, cb: (err: any, data?: ListWatchlistsCommandOutput) => void): void;
  listWatchlists(
    args: ListWatchlistsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWatchlistsCommandOutput) => void
  ): void;

  /**
   * @see {@link OptOutSpeakerCommand}
   */
  optOutSpeaker(args: OptOutSpeakerCommandInput, options?: __HttpHandlerOptions): Promise<OptOutSpeakerCommandOutput>;
  optOutSpeaker(args: OptOutSpeakerCommandInput, cb: (err: any, data?: OptOutSpeakerCommandOutput) => void): void;
  optOutSpeaker(
    args: OptOutSpeakerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: OptOutSpeakerCommandOutput) => void
  ): void;

  /**
   * @see {@link StartFraudsterRegistrationJobCommand}
   */
  startFraudsterRegistrationJob(
    args: StartFraudsterRegistrationJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartFraudsterRegistrationJobCommandOutput>;
  startFraudsterRegistrationJob(
    args: StartFraudsterRegistrationJobCommandInput,
    cb: (err: any, data?: StartFraudsterRegistrationJobCommandOutput) => void
  ): void;
  startFraudsterRegistrationJob(
    args: StartFraudsterRegistrationJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartFraudsterRegistrationJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StartSpeakerEnrollmentJobCommand}
   */
  startSpeakerEnrollmentJob(
    args: StartSpeakerEnrollmentJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartSpeakerEnrollmentJobCommandOutput>;
  startSpeakerEnrollmentJob(
    args: StartSpeakerEnrollmentJobCommandInput,
    cb: (err: any, data?: StartSpeakerEnrollmentJobCommandOutput) => void
  ): void;
  startSpeakerEnrollmentJob(
    args: StartSpeakerEnrollmentJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartSpeakerEnrollmentJobCommandOutput) => void
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
   * @see {@link UpdateDomainCommand}
   */
  updateDomain(args: UpdateDomainCommandInput, options?: __HttpHandlerOptions): Promise<UpdateDomainCommandOutput>;
  updateDomain(args: UpdateDomainCommandInput, cb: (err: any, data?: UpdateDomainCommandOutput) => void): void;
  updateDomain(
    args: UpdateDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateWatchlistCommand}
   */
  updateWatchlist(
    args: UpdateWatchlistCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateWatchlistCommandOutput>;
  updateWatchlist(args: UpdateWatchlistCommandInput, cb: (err: any, data?: UpdateWatchlistCommandOutput) => void): void;
  updateWatchlist(
    args: UpdateWatchlistCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateWatchlistCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>Amazon Connect Voice ID provides real-time caller authentication and fraud risk detection, which
 *             make voice interactions in contact centers more secure and efficient.</p>
 */
export class VoiceID extends VoiceIDClient implements VoiceID {}
createAggregatedClient(commands, VoiceID);
