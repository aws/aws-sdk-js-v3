// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

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
import { VoiceIDClient } from "./VoiceIDClient";

/**
 * @public
 * <p>Amazon Connect Voice ID provides real-time caller authentication and fraud risk detection, which
 *             make voice interactions in contact centers more secure and efficient.</p>
 */
export class VoiceID extends VoiceIDClient {
  /**
   * @public
   * <p>Associates the fraudsters with the watchlist specified in the same domain. </p>
   */
  public associateFraudster(
    args: AssociateFraudsterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateFraudsterCommandOutput>;
  public associateFraudster(
    args: AssociateFraudsterCommandInput,
    cb: (err: any, data?: AssociateFraudsterCommandOutput) => void
  ): void;
  public associateFraudster(
    args: AssociateFraudsterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateFraudsterCommandOutput) => void
  ): void;
  public associateFraudster(
    args: AssociateFraudsterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateFraudsterCommandOutput) => void),
    cb?: (err: any, data?: AssociateFraudsterCommandOutput) => void
  ): Promise<AssociateFraudsterCommandOutput> | void {
    const command = new AssociateFraudsterCommand(args);
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
   * @public
   * <p>Creates a domain that contains all Amazon Connect Voice ID data, such as speakers, fraudsters,
   *             customer audio, and voiceprints.  Every domain is created with a default watchlist that fraudsters can be a part of.</p>
   */
  public createDomain(
    args: CreateDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDomainCommandOutput>;
  public createDomain(args: CreateDomainCommandInput, cb: (err: any, data?: CreateDomainCommandOutput) => void): void;
  public createDomain(
    args: CreateDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDomainCommandOutput) => void
  ): void;
  public createDomain(
    args: CreateDomainCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDomainCommandOutput) => void),
    cb?: (err: any, data?: CreateDomainCommandOutput) => void
  ): Promise<CreateDomainCommandOutput> | void {
    const command = new CreateDomainCommand(args);
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
   * @public
   * <p>Creates a watchlist that fraudsters can be a part of.</p>
   */
  public createWatchlist(
    args: CreateWatchlistCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateWatchlistCommandOutput>;
  public createWatchlist(
    args: CreateWatchlistCommandInput,
    cb: (err: any, data?: CreateWatchlistCommandOutput) => void
  ): void;
  public createWatchlist(
    args: CreateWatchlistCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateWatchlistCommandOutput) => void
  ): void;
  public createWatchlist(
    args: CreateWatchlistCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateWatchlistCommandOutput) => void),
    cb?: (err: any, data?: CreateWatchlistCommandOutput) => void
  ): Promise<CreateWatchlistCommandOutput> | void {
    const command = new CreateWatchlistCommand(args);
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
   * @public
   * <p>Deletes the specified domain from Voice ID.</p>
   */
  public deleteDomain(
    args: DeleteDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDomainCommandOutput>;
  public deleteDomain(args: DeleteDomainCommandInput, cb: (err: any, data?: DeleteDomainCommandOutput) => void): void;
  public deleteDomain(
    args: DeleteDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDomainCommandOutput) => void
  ): void;
  public deleteDomain(
    args: DeleteDomainCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteDomainCommandOutput) => void),
    cb?: (err: any, data?: DeleteDomainCommandOutput) => void
  ): Promise<DeleteDomainCommandOutput> | void {
    const command = new DeleteDomainCommand(args);
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
   * @public
   * <p>Deletes the specified fraudster from Voice ID. This action disassociates the fraudster from any watchlists it is a part of.</p>
   */
  public deleteFraudster(
    args: DeleteFraudsterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteFraudsterCommandOutput>;
  public deleteFraudster(
    args: DeleteFraudsterCommandInput,
    cb: (err: any, data?: DeleteFraudsterCommandOutput) => void
  ): void;
  public deleteFraudster(
    args: DeleteFraudsterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFraudsterCommandOutput) => void
  ): void;
  public deleteFraudster(
    args: DeleteFraudsterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteFraudsterCommandOutput) => void),
    cb?: (err: any, data?: DeleteFraudsterCommandOutput) => void
  ): Promise<DeleteFraudsterCommandOutput> | void {
    const command = new DeleteFraudsterCommand(args);
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
   * @public
   * <p>Deletes the specified speaker from Voice ID.</p>
   */
  public deleteSpeaker(
    args: DeleteSpeakerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSpeakerCommandOutput>;
  public deleteSpeaker(
    args: DeleteSpeakerCommandInput,
    cb: (err: any, data?: DeleteSpeakerCommandOutput) => void
  ): void;
  public deleteSpeaker(
    args: DeleteSpeakerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSpeakerCommandOutput) => void
  ): void;
  public deleteSpeaker(
    args: DeleteSpeakerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteSpeakerCommandOutput) => void),
    cb?: (err: any, data?: DeleteSpeakerCommandOutput) => void
  ): Promise<DeleteSpeakerCommandOutput> | void {
    const command = new DeleteSpeakerCommand(args);
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
   * @public
   * <p>Deletes the specified watchlist from Voice ID. This API throws an exception when
   *             there are fraudsters in the watchlist that you are trying to delete. You must delete the
   *             fraudsters, and then delete the watchlist. Every domain has a default watchlist which cannot be deleted. </p>
   */
  public deleteWatchlist(
    args: DeleteWatchlistCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteWatchlistCommandOutput>;
  public deleteWatchlist(
    args: DeleteWatchlistCommandInput,
    cb: (err: any, data?: DeleteWatchlistCommandOutput) => void
  ): void;
  public deleteWatchlist(
    args: DeleteWatchlistCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteWatchlistCommandOutput) => void
  ): void;
  public deleteWatchlist(
    args: DeleteWatchlistCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteWatchlistCommandOutput) => void),
    cb?: (err: any, data?: DeleteWatchlistCommandOutput) => void
  ): Promise<DeleteWatchlistCommandOutput> | void {
    const command = new DeleteWatchlistCommand(args);
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
   * @public
   * <p>Describes the specified domain.</p>
   */
  public describeDomain(
    args: DescribeDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDomainCommandOutput>;
  public describeDomain(
    args: DescribeDomainCommandInput,
    cb: (err: any, data?: DescribeDomainCommandOutput) => void
  ): void;
  public describeDomain(
    args: DescribeDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDomainCommandOutput) => void
  ): void;
  public describeDomain(
    args: DescribeDomainCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeDomainCommandOutput) => void),
    cb?: (err: any, data?: DescribeDomainCommandOutput) => void
  ): Promise<DescribeDomainCommandOutput> | void {
    const command = new DescribeDomainCommand(args);
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
   * @public
   * <p>Describes the specified fraudster.</p>
   */
  public describeFraudster(
    args: DescribeFraudsterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFraudsterCommandOutput>;
  public describeFraudster(
    args: DescribeFraudsterCommandInput,
    cb: (err: any, data?: DescribeFraudsterCommandOutput) => void
  ): void;
  public describeFraudster(
    args: DescribeFraudsterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFraudsterCommandOutput) => void
  ): void;
  public describeFraudster(
    args: DescribeFraudsterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeFraudsterCommandOutput) => void),
    cb?: (err: any, data?: DescribeFraudsterCommandOutput) => void
  ): Promise<DescribeFraudsterCommandOutput> | void {
    const command = new DescribeFraudsterCommand(args);
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
   * @public
   * <p>Describes the specified fraudster registration job.</p>
   */
  public describeFraudsterRegistrationJob(
    args: DescribeFraudsterRegistrationJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFraudsterRegistrationJobCommandOutput>;
  public describeFraudsterRegistrationJob(
    args: DescribeFraudsterRegistrationJobCommandInput,
    cb: (err: any, data?: DescribeFraudsterRegistrationJobCommandOutput) => void
  ): void;
  public describeFraudsterRegistrationJob(
    args: DescribeFraudsterRegistrationJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFraudsterRegistrationJobCommandOutput) => void
  ): void;
  public describeFraudsterRegistrationJob(
    args: DescribeFraudsterRegistrationJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeFraudsterRegistrationJobCommandOutput) => void),
    cb?: (err: any, data?: DescribeFraudsterRegistrationJobCommandOutput) => void
  ): Promise<DescribeFraudsterRegistrationJobCommandOutput> | void {
    const command = new DescribeFraudsterRegistrationJobCommand(args);
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
   * @public
   * <p>Describes the specified speaker.</p>
   */
  public describeSpeaker(
    args: DescribeSpeakerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSpeakerCommandOutput>;
  public describeSpeaker(
    args: DescribeSpeakerCommandInput,
    cb: (err: any, data?: DescribeSpeakerCommandOutput) => void
  ): void;
  public describeSpeaker(
    args: DescribeSpeakerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSpeakerCommandOutput) => void
  ): void;
  public describeSpeaker(
    args: DescribeSpeakerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeSpeakerCommandOutput) => void),
    cb?: (err: any, data?: DescribeSpeakerCommandOutput) => void
  ): Promise<DescribeSpeakerCommandOutput> | void {
    const command = new DescribeSpeakerCommand(args);
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
   * @public
   * <p>Describes the specified speaker enrollment job.</p>
   */
  public describeSpeakerEnrollmentJob(
    args: DescribeSpeakerEnrollmentJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSpeakerEnrollmentJobCommandOutput>;
  public describeSpeakerEnrollmentJob(
    args: DescribeSpeakerEnrollmentJobCommandInput,
    cb: (err: any, data?: DescribeSpeakerEnrollmentJobCommandOutput) => void
  ): void;
  public describeSpeakerEnrollmentJob(
    args: DescribeSpeakerEnrollmentJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSpeakerEnrollmentJobCommandOutput) => void
  ): void;
  public describeSpeakerEnrollmentJob(
    args: DescribeSpeakerEnrollmentJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeSpeakerEnrollmentJobCommandOutput) => void),
    cb?: (err: any, data?: DescribeSpeakerEnrollmentJobCommandOutput) => void
  ): Promise<DescribeSpeakerEnrollmentJobCommandOutput> | void {
    const command = new DescribeSpeakerEnrollmentJobCommand(args);
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
   * @public
   * <p>Describes the specified watchlist.</p>
   */
  public describeWatchlist(
    args: DescribeWatchlistCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeWatchlistCommandOutput>;
  public describeWatchlist(
    args: DescribeWatchlistCommandInput,
    cb: (err: any, data?: DescribeWatchlistCommandOutput) => void
  ): void;
  public describeWatchlist(
    args: DescribeWatchlistCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeWatchlistCommandOutput) => void
  ): void;
  public describeWatchlist(
    args: DescribeWatchlistCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeWatchlistCommandOutput) => void),
    cb?: (err: any, data?: DescribeWatchlistCommandOutput) => void
  ): Promise<DescribeWatchlistCommandOutput> | void {
    const command = new DescribeWatchlistCommand(args);
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
   * @public
   * <p>Disassociates the fraudsters from the watchlist specified. Voice ID always expects a
   *             fraudster to be a part of at least one watchlist. If
   *             you try to disassociate a fraudster from its only watchlist, a <code>ValidationException</code> is thrown.
   *             </p>
   */
  public disassociateFraudster(
    args: DisassociateFraudsterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateFraudsterCommandOutput>;
  public disassociateFraudster(
    args: DisassociateFraudsterCommandInput,
    cb: (err: any, data?: DisassociateFraudsterCommandOutput) => void
  ): void;
  public disassociateFraudster(
    args: DisassociateFraudsterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateFraudsterCommandOutput) => void
  ): void;
  public disassociateFraudster(
    args: DisassociateFraudsterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisassociateFraudsterCommandOutput) => void),
    cb?: (err: any, data?: DisassociateFraudsterCommandOutput) => void
  ): Promise<DisassociateFraudsterCommandOutput> | void {
    const command = new DisassociateFraudsterCommand(args);
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
   * @public
   * <p>Evaluates a specified session based on audio data accumulated during a streaming
   *             Amazon Connect Voice ID call.</p>
   */
  public evaluateSession(
    args: EvaluateSessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EvaluateSessionCommandOutput>;
  public evaluateSession(
    args: EvaluateSessionCommandInput,
    cb: (err: any, data?: EvaluateSessionCommandOutput) => void
  ): void;
  public evaluateSession(
    args: EvaluateSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EvaluateSessionCommandOutput) => void
  ): void;
  public evaluateSession(
    args: EvaluateSessionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: EvaluateSessionCommandOutput) => void),
    cb?: (err: any, data?: EvaluateSessionCommandOutput) => void
  ): Promise<EvaluateSessionCommandOutput> | void {
    const command = new EvaluateSessionCommand(args);
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
   * @public
   * <p>Lists all the domains in the Amazon Web Services account. </p>
   */
  public listDomains(args: ListDomainsCommandInput, options?: __HttpHandlerOptions): Promise<ListDomainsCommandOutput>;
  public listDomains(args: ListDomainsCommandInput, cb: (err: any, data?: ListDomainsCommandOutput) => void): void;
  public listDomains(
    args: ListDomainsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDomainsCommandOutput) => void
  ): void;
  public listDomains(
    args: ListDomainsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDomainsCommandOutput) => void),
    cb?: (err: any, data?: ListDomainsCommandOutput) => void
  ): Promise<ListDomainsCommandOutput> | void {
    const command = new ListDomainsCommand(args);
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
   * @public
   * <p>Lists all the fraudster registration jobs in the domain with the given
   *                 <code>JobStatus</code>. If <code>JobStatus</code> is not provided, this lists all
   *             fraudster registration jobs in the given domain. </p>
   */
  public listFraudsterRegistrationJobs(
    args: ListFraudsterRegistrationJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFraudsterRegistrationJobsCommandOutput>;
  public listFraudsterRegistrationJobs(
    args: ListFraudsterRegistrationJobsCommandInput,
    cb: (err: any, data?: ListFraudsterRegistrationJobsCommandOutput) => void
  ): void;
  public listFraudsterRegistrationJobs(
    args: ListFraudsterRegistrationJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFraudsterRegistrationJobsCommandOutput) => void
  ): void;
  public listFraudsterRegistrationJobs(
    args: ListFraudsterRegistrationJobsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListFraudsterRegistrationJobsCommandOutput) => void),
    cb?: (err: any, data?: ListFraudsterRegistrationJobsCommandOutput) => void
  ): Promise<ListFraudsterRegistrationJobsCommandOutput> | void {
    const command = new ListFraudsterRegistrationJobsCommand(args);
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
   * @public
   * <p>Lists all fraudsters in a specified watchlist or domain.</p>
   */
  public listFraudsters(
    args: ListFraudstersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFraudstersCommandOutput>;
  public listFraudsters(
    args: ListFraudstersCommandInput,
    cb: (err: any, data?: ListFraudstersCommandOutput) => void
  ): void;
  public listFraudsters(
    args: ListFraudstersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFraudstersCommandOutput) => void
  ): void;
  public listFraudsters(
    args: ListFraudstersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListFraudstersCommandOutput) => void),
    cb?: (err: any, data?: ListFraudstersCommandOutput) => void
  ): Promise<ListFraudstersCommandOutput> | void {
    const command = new ListFraudstersCommand(args);
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
   * @public
   * <p>Lists all the speaker enrollment jobs in the domain with the specified
   *                 <code>JobStatus</code>. If <code>JobStatus</code> is not provided, this lists all
   *             jobs with all possible speaker enrollment job statuses.</p>
   */
  public listSpeakerEnrollmentJobs(
    args: ListSpeakerEnrollmentJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSpeakerEnrollmentJobsCommandOutput>;
  public listSpeakerEnrollmentJobs(
    args: ListSpeakerEnrollmentJobsCommandInput,
    cb: (err: any, data?: ListSpeakerEnrollmentJobsCommandOutput) => void
  ): void;
  public listSpeakerEnrollmentJobs(
    args: ListSpeakerEnrollmentJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSpeakerEnrollmentJobsCommandOutput) => void
  ): void;
  public listSpeakerEnrollmentJobs(
    args: ListSpeakerEnrollmentJobsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListSpeakerEnrollmentJobsCommandOutput) => void),
    cb?: (err: any, data?: ListSpeakerEnrollmentJobsCommandOutput) => void
  ): Promise<ListSpeakerEnrollmentJobsCommandOutput> | void {
    const command = new ListSpeakerEnrollmentJobsCommand(args);
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
   * @public
   * <p>Lists all speakers in a specified domain.</p>
   */
  public listSpeakers(
    args: ListSpeakersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSpeakersCommandOutput>;
  public listSpeakers(args: ListSpeakersCommandInput, cb: (err: any, data?: ListSpeakersCommandOutput) => void): void;
  public listSpeakers(
    args: ListSpeakersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSpeakersCommandOutput) => void
  ): void;
  public listSpeakers(
    args: ListSpeakersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListSpeakersCommandOutput) => void),
    cb?: (err: any, data?: ListSpeakersCommandOutput) => void
  ): Promise<ListSpeakersCommandOutput> | void {
    const command = new ListSpeakersCommand(args);
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
   * @public
   * <p>Lists all tags associated with a specified Voice ID resource.</p>
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
   * @public
   * <p>Lists all watchlists in a specified domain.</p>
   */
  public listWatchlists(
    args: ListWatchlistsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListWatchlistsCommandOutput>;
  public listWatchlists(
    args: ListWatchlistsCommandInput,
    cb: (err: any, data?: ListWatchlistsCommandOutput) => void
  ): void;
  public listWatchlists(
    args: ListWatchlistsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWatchlistsCommandOutput) => void
  ): void;
  public listWatchlists(
    args: ListWatchlistsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListWatchlistsCommandOutput) => void),
    cb?: (err: any, data?: ListWatchlistsCommandOutput) => void
  ): Promise<ListWatchlistsCommandOutput> | void {
    const command = new ListWatchlistsCommand(args);
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
   * @public
   * <p>Opts out a speaker from Voice ID. A speaker can be opted out regardless of whether or
   *             not they already exist in Voice ID. If they don't yet exist, a new speaker is created
   *             in an opted out state. If they already exist, their existing status is overridden and
   *             they are opted out. Enrollment and evaluation authentication requests are rejected for
   *             opted out speakers, and opted out speakers have no voice embeddings stored in
   *             Voice ID.</p>
   */
  public optOutSpeaker(
    args: OptOutSpeakerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<OptOutSpeakerCommandOutput>;
  public optOutSpeaker(
    args: OptOutSpeakerCommandInput,
    cb: (err: any, data?: OptOutSpeakerCommandOutput) => void
  ): void;
  public optOutSpeaker(
    args: OptOutSpeakerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: OptOutSpeakerCommandOutput) => void
  ): void;
  public optOutSpeaker(
    args: OptOutSpeakerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: OptOutSpeakerCommandOutput) => void),
    cb?: (err: any, data?: OptOutSpeakerCommandOutput) => void
  ): Promise<OptOutSpeakerCommandOutput> | void {
    const command = new OptOutSpeakerCommand(args);
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
   * @public
   * <p>Starts a new batch fraudster registration job using provided details.</p>
   */
  public startFraudsterRegistrationJob(
    args: StartFraudsterRegistrationJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartFraudsterRegistrationJobCommandOutput>;
  public startFraudsterRegistrationJob(
    args: StartFraudsterRegistrationJobCommandInput,
    cb: (err: any, data?: StartFraudsterRegistrationJobCommandOutput) => void
  ): void;
  public startFraudsterRegistrationJob(
    args: StartFraudsterRegistrationJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartFraudsterRegistrationJobCommandOutput) => void
  ): void;
  public startFraudsterRegistrationJob(
    args: StartFraudsterRegistrationJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartFraudsterRegistrationJobCommandOutput) => void),
    cb?: (err: any, data?: StartFraudsterRegistrationJobCommandOutput) => void
  ): Promise<StartFraudsterRegistrationJobCommandOutput> | void {
    const command = new StartFraudsterRegistrationJobCommand(args);
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
   * @public
   * <p>Starts a new batch speaker enrollment job using specified details.</p>
   */
  public startSpeakerEnrollmentJob(
    args: StartSpeakerEnrollmentJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartSpeakerEnrollmentJobCommandOutput>;
  public startSpeakerEnrollmentJob(
    args: StartSpeakerEnrollmentJobCommandInput,
    cb: (err: any, data?: StartSpeakerEnrollmentJobCommandOutput) => void
  ): void;
  public startSpeakerEnrollmentJob(
    args: StartSpeakerEnrollmentJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartSpeakerEnrollmentJobCommandOutput) => void
  ): void;
  public startSpeakerEnrollmentJob(
    args: StartSpeakerEnrollmentJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartSpeakerEnrollmentJobCommandOutput) => void),
    cb?: (err: any, data?: StartSpeakerEnrollmentJobCommandOutput) => void
  ): Promise<StartSpeakerEnrollmentJobCommandOutput> | void {
    const command = new StartSpeakerEnrollmentJobCommand(args);
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
   * @public
   * <p>Tags a Voice ID resource with the provided list of tags.</p>
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
   * @public
   * <p>Removes specified tags from a specified Amazon Connect Voice ID resource.</p>
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
   * @public
   * <p>Updates the specified domain. This API has clobber behavior, and clears and replaces
   *             all attributes. If an optional field, such as 'Description' is not provided, it is
   *             removed from the domain.</p>
   */
  public updateDomain(
    args: UpdateDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDomainCommandOutput>;
  public updateDomain(args: UpdateDomainCommandInput, cb: (err: any, data?: UpdateDomainCommandOutput) => void): void;
  public updateDomain(
    args: UpdateDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDomainCommandOutput) => void
  ): void;
  public updateDomain(
    args: UpdateDomainCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateDomainCommandOutput) => void),
    cb?: (err: any, data?: UpdateDomainCommandOutput) => void
  ): Promise<UpdateDomainCommandOutput> | void {
    const command = new UpdateDomainCommand(args);
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
   * @public
   * <p>Updates the specified watchlist. Every domain has a default watchlist which cannot be updated.
   *         </p>
   */
  public updateWatchlist(
    args: UpdateWatchlistCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateWatchlistCommandOutput>;
  public updateWatchlist(
    args: UpdateWatchlistCommandInput,
    cb: (err: any, data?: UpdateWatchlistCommandOutput) => void
  ): void;
  public updateWatchlist(
    args: UpdateWatchlistCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateWatchlistCommandOutput) => void
  ): void;
  public updateWatchlist(
    args: UpdateWatchlistCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateWatchlistCommandOutput) => void),
    cb?: (err: any, data?: UpdateWatchlistCommandOutput) => void
  ): Promise<UpdateWatchlistCommandOutput> | void {
    const command = new UpdateWatchlistCommand(args);
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
