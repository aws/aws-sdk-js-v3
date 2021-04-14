import { WellArchitectedClient } from "./WellArchitectedClient";
import {
  AssociateLensesCommand,
  AssociateLensesCommandInput,
  AssociateLensesCommandOutput,
} from "./commands/AssociateLensesCommand";
import {
  CreateMilestoneCommand,
  CreateMilestoneCommandInput,
  CreateMilestoneCommandOutput,
} from "./commands/CreateMilestoneCommand";
import {
  CreateWorkloadCommand,
  CreateWorkloadCommandInput,
  CreateWorkloadCommandOutput,
} from "./commands/CreateWorkloadCommand";
import {
  CreateWorkloadShareCommand,
  CreateWorkloadShareCommandInput,
  CreateWorkloadShareCommandOutput,
} from "./commands/CreateWorkloadShareCommand";
import {
  DeleteWorkloadCommand,
  DeleteWorkloadCommandInput,
  DeleteWorkloadCommandOutput,
} from "./commands/DeleteWorkloadCommand";
import {
  DeleteWorkloadShareCommand,
  DeleteWorkloadShareCommandInput,
  DeleteWorkloadShareCommandOutput,
} from "./commands/DeleteWorkloadShareCommand";
import {
  DisassociateLensesCommand,
  DisassociateLensesCommandInput,
  DisassociateLensesCommandOutput,
} from "./commands/DisassociateLensesCommand";
import { GetAnswerCommand, GetAnswerCommandInput, GetAnswerCommandOutput } from "./commands/GetAnswerCommand";
import {
  GetLensReviewCommand,
  GetLensReviewCommandInput,
  GetLensReviewCommandOutput,
} from "./commands/GetLensReviewCommand";
import {
  GetLensReviewReportCommand,
  GetLensReviewReportCommandInput,
  GetLensReviewReportCommandOutput,
} from "./commands/GetLensReviewReportCommand";
import {
  GetLensVersionDifferenceCommand,
  GetLensVersionDifferenceCommandInput,
  GetLensVersionDifferenceCommandOutput,
} from "./commands/GetLensVersionDifferenceCommand";
import {
  GetMilestoneCommand,
  GetMilestoneCommandInput,
  GetMilestoneCommandOutput,
} from "./commands/GetMilestoneCommand";
import { GetWorkloadCommand, GetWorkloadCommandInput, GetWorkloadCommandOutput } from "./commands/GetWorkloadCommand";
import { ListAnswersCommand, ListAnswersCommandInput, ListAnswersCommandOutput } from "./commands/ListAnswersCommand";
import {
  ListLensReviewImprovementsCommand,
  ListLensReviewImprovementsCommandInput,
  ListLensReviewImprovementsCommandOutput,
} from "./commands/ListLensReviewImprovementsCommand";
import {
  ListLensReviewsCommand,
  ListLensReviewsCommandInput,
  ListLensReviewsCommandOutput,
} from "./commands/ListLensReviewsCommand";
import { ListLensesCommand, ListLensesCommandInput, ListLensesCommandOutput } from "./commands/ListLensesCommand";
import {
  ListMilestonesCommand,
  ListMilestonesCommandInput,
  ListMilestonesCommandOutput,
} from "./commands/ListMilestonesCommand";
import {
  ListNotificationsCommand,
  ListNotificationsCommandInput,
  ListNotificationsCommandOutput,
} from "./commands/ListNotificationsCommand";
import {
  ListShareInvitationsCommand,
  ListShareInvitationsCommandInput,
  ListShareInvitationsCommandOutput,
} from "./commands/ListShareInvitationsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListWorkloadSharesCommand,
  ListWorkloadSharesCommandInput,
  ListWorkloadSharesCommandOutput,
} from "./commands/ListWorkloadSharesCommand";
import {
  ListWorkloadsCommand,
  ListWorkloadsCommandInput,
  ListWorkloadsCommandOutput,
} from "./commands/ListWorkloadsCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateAnswerCommand,
  UpdateAnswerCommandInput,
  UpdateAnswerCommandOutput,
} from "./commands/UpdateAnswerCommand";
import {
  UpdateLensReviewCommand,
  UpdateLensReviewCommandInput,
  UpdateLensReviewCommandOutput,
} from "./commands/UpdateLensReviewCommand";
import {
  UpdateShareInvitationCommand,
  UpdateShareInvitationCommandInput,
  UpdateShareInvitationCommandOutput,
} from "./commands/UpdateShareInvitationCommand";
import {
  UpdateWorkloadCommand,
  UpdateWorkloadCommandInput,
  UpdateWorkloadCommandOutput,
} from "./commands/UpdateWorkloadCommand";
import {
  UpdateWorkloadShareCommand,
  UpdateWorkloadShareCommandInput,
  UpdateWorkloadShareCommandOutput,
} from "./commands/UpdateWorkloadShareCommand";
import {
  UpgradeLensReviewCommand,
  UpgradeLensReviewCommandInput,
  UpgradeLensReviewCommandOutput,
} from "./commands/UpgradeLensReviewCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <fullname>AWS Well-Architected Tool</fullname>
 *
 *          <p>This is the <i>AWS Well-Architected Tool API Reference</i>. The AWS Well-Architected Tool API provides programmatic access to the
 *             <a href="http://aws.amazon.com/well-architected-tool">AWS Well-Architected Tool</a> in the
 *             <a href="https://console.aws.amazon.com/wellarchitected">AWS Management Console</a>. For information
 *             about the AWS Well-Architected Tool, see the
 *             <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/intro.html">AWS Well-Architected Tool User Guide</a>.</p>
 */
export class WellArchitected extends WellArchitectedClient {
  /**
   * <p>Associate a lens to a workload.</p>
   */
  public associateLenses(
    args: AssociateLensesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateLensesCommandOutput>;
  public associateLenses(
    args: AssociateLensesCommandInput,
    cb: (err: any, data?: AssociateLensesCommandOutput) => void
  ): void;
  public associateLenses(
    args: AssociateLensesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateLensesCommandOutput) => void
  ): void;
  public associateLenses(
    args: AssociateLensesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateLensesCommandOutput) => void),
    cb?: (err: any, data?: AssociateLensesCommandOutput) => void
  ): Promise<AssociateLensesCommandOutput> | void {
    const command = new AssociateLensesCommand(args);
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
   * <p>Create a milestone for an existing workload.</p>
   */
  public createMilestone(
    args: CreateMilestoneCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateMilestoneCommandOutput>;
  public createMilestone(
    args: CreateMilestoneCommandInput,
    cb: (err: any, data?: CreateMilestoneCommandOutput) => void
  ): void;
  public createMilestone(
    args: CreateMilestoneCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMilestoneCommandOutput) => void
  ): void;
  public createMilestone(
    args: CreateMilestoneCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateMilestoneCommandOutput) => void),
    cb?: (err: any, data?: CreateMilestoneCommandOutput) => void
  ): Promise<CreateMilestoneCommandOutput> | void {
    const command = new CreateMilestoneCommand(args);
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
   * <p>Create a new workload.</p>
   *         <p>The owner of a workload can share the workload with other AWS accounts and IAM users
   *             in the same AWS Region. Only the owner of a workload can delete it.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/define-workload.html">Defining a Workload</a> in the
   *                 <i>AWS Well-Architected Tool User Guide</i>.</p>
   */
  public createWorkload(
    args: CreateWorkloadCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateWorkloadCommandOutput>;
  public createWorkload(
    args: CreateWorkloadCommandInput,
    cb: (err: any, data?: CreateWorkloadCommandOutput) => void
  ): void;
  public createWorkload(
    args: CreateWorkloadCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateWorkloadCommandOutput) => void
  ): void;
  public createWorkload(
    args: CreateWorkloadCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateWorkloadCommandOutput) => void),
    cb?: (err: any, data?: CreateWorkloadCommandOutput) => void
  ): Promise<CreateWorkloadCommandOutput> | void {
    const command = new CreateWorkloadCommand(args);
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
   * <p>Create a workload share.</p>
   *         <p>The owner of a workload can share it with other AWS accounts and IAM users in the same
   *             AWS Region. Shared access to a workload is not removed until the workload invitation is
   *             deleted.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/workloads-sharing.html">Sharing a Workload</a> in the
   *                 <i>AWS Well-Architected Tool User Guide</i>.</p>
   */
  public createWorkloadShare(
    args: CreateWorkloadShareCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateWorkloadShareCommandOutput>;
  public createWorkloadShare(
    args: CreateWorkloadShareCommandInput,
    cb: (err: any, data?: CreateWorkloadShareCommandOutput) => void
  ): void;
  public createWorkloadShare(
    args: CreateWorkloadShareCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateWorkloadShareCommandOutput) => void
  ): void;
  public createWorkloadShare(
    args: CreateWorkloadShareCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateWorkloadShareCommandOutput) => void),
    cb?: (err: any, data?: CreateWorkloadShareCommandOutput) => void
  ): Promise<CreateWorkloadShareCommandOutput> | void {
    const command = new CreateWorkloadShareCommand(args);
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
   * <p>Delete an existing workload.</p>
   */
  public deleteWorkload(
    args: DeleteWorkloadCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteWorkloadCommandOutput>;
  public deleteWorkload(
    args: DeleteWorkloadCommandInput,
    cb: (err: any, data?: DeleteWorkloadCommandOutput) => void
  ): void;
  public deleteWorkload(
    args: DeleteWorkloadCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteWorkloadCommandOutput) => void
  ): void;
  public deleteWorkload(
    args: DeleteWorkloadCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteWorkloadCommandOutput) => void),
    cb?: (err: any, data?: DeleteWorkloadCommandOutput) => void
  ): Promise<DeleteWorkloadCommandOutput> | void {
    const command = new DeleteWorkloadCommand(args);
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
   * <p>Delete a workload share.</p>
   */
  public deleteWorkloadShare(
    args: DeleteWorkloadShareCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteWorkloadShareCommandOutput>;
  public deleteWorkloadShare(
    args: DeleteWorkloadShareCommandInput,
    cb: (err: any, data?: DeleteWorkloadShareCommandOutput) => void
  ): void;
  public deleteWorkloadShare(
    args: DeleteWorkloadShareCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteWorkloadShareCommandOutput) => void
  ): void;
  public deleteWorkloadShare(
    args: DeleteWorkloadShareCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteWorkloadShareCommandOutput) => void),
    cb?: (err: any, data?: DeleteWorkloadShareCommandOutput) => void
  ): Promise<DeleteWorkloadShareCommandOutput> | void {
    const command = new DeleteWorkloadShareCommand(args);
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
   * <p>Disassociate a lens from a workload.</p>
   *         <note>
   *             <p>The AWS Well-Architected Framework lens (<code>wellarchitected</code>) cannot be
   *                 removed from a workload.</p>
   *         </note>
   */
  public disassociateLenses(
    args: DisassociateLensesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateLensesCommandOutput>;
  public disassociateLenses(
    args: DisassociateLensesCommandInput,
    cb: (err: any, data?: DisassociateLensesCommandOutput) => void
  ): void;
  public disassociateLenses(
    args: DisassociateLensesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateLensesCommandOutput) => void
  ): void;
  public disassociateLenses(
    args: DisassociateLensesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisassociateLensesCommandOutput) => void),
    cb?: (err: any, data?: DisassociateLensesCommandOutput) => void
  ): Promise<DisassociateLensesCommandOutput> | void {
    const command = new DisassociateLensesCommand(args);
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
   * <p>Get lens review.</p>
   */
  public getAnswer(args: GetAnswerCommandInput, options?: __HttpHandlerOptions): Promise<GetAnswerCommandOutput>;
  public getAnswer(args: GetAnswerCommandInput, cb: (err: any, data?: GetAnswerCommandOutput) => void): void;
  public getAnswer(
    args: GetAnswerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAnswerCommandOutput) => void
  ): void;
  public getAnswer(
    args: GetAnswerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetAnswerCommandOutput) => void),
    cb?: (err: any, data?: GetAnswerCommandOutput) => void
  ): Promise<GetAnswerCommandOutput> | void {
    const command = new GetAnswerCommand(args);
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
   * <p>Get lens review.</p>
   */
  public getLensReview(
    args: GetLensReviewCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLensReviewCommandOutput>;
  public getLensReview(
    args: GetLensReviewCommandInput,
    cb: (err: any, data?: GetLensReviewCommandOutput) => void
  ): void;
  public getLensReview(
    args: GetLensReviewCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLensReviewCommandOutput) => void
  ): void;
  public getLensReview(
    args: GetLensReviewCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetLensReviewCommandOutput) => void),
    cb?: (err: any, data?: GetLensReviewCommandOutput) => void
  ): Promise<GetLensReviewCommandOutput> | void {
    const command = new GetLensReviewCommand(args);
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
   * <p>Get lens review report.</p>
   */
  public getLensReviewReport(
    args: GetLensReviewReportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLensReviewReportCommandOutput>;
  public getLensReviewReport(
    args: GetLensReviewReportCommandInput,
    cb: (err: any, data?: GetLensReviewReportCommandOutput) => void
  ): void;
  public getLensReviewReport(
    args: GetLensReviewReportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLensReviewReportCommandOutput) => void
  ): void;
  public getLensReviewReport(
    args: GetLensReviewReportCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetLensReviewReportCommandOutput) => void),
    cb?: (err: any, data?: GetLensReviewReportCommandOutput) => void
  ): Promise<GetLensReviewReportCommandOutput> | void {
    const command = new GetLensReviewReportCommand(args);
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
   * <p>Get lens version differences.</p>
   */
  public getLensVersionDifference(
    args: GetLensVersionDifferenceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLensVersionDifferenceCommandOutput>;
  public getLensVersionDifference(
    args: GetLensVersionDifferenceCommandInput,
    cb: (err: any, data?: GetLensVersionDifferenceCommandOutput) => void
  ): void;
  public getLensVersionDifference(
    args: GetLensVersionDifferenceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLensVersionDifferenceCommandOutput) => void
  ): void;
  public getLensVersionDifference(
    args: GetLensVersionDifferenceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetLensVersionDifferenceCommandOutput) => void),
    cb?: (err: any, data?: GetLensVersionDifferenceCommandOutput) => void
  ): Promise<GetLensVersionDifferenceCommandOutput> | void {
    const command = new GetLensVersionDifferenceCommand(args);
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
   * <p>Get a milestone for an existing workload.</p>
   */
  public getMilestone(
    args: GetMilestoneCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMilestoneCommandOutput>;
  public getMilestone(args: GetMilestoneCommandInput, cb: (err: any, data?: GetMilestoneCommandOutput) => void): void;
  public getMilestone(
    args: GetMilestoneCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMilestoneCommandOutput) => void
  ): void;
  public getMilestone(
    args: GetMilestoneCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetMilestoneCommandOutput) => void),
    cb?: (err: any, data?: GetMilestoneCommandOutput) => void
  ): Promise<GetMilestoneCommandOutput> | void {
    const command = new GetMilestoneCommand(args);
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
   * <p>Get an existing workload.</p>
   */
  public getWorkload(args: GetWorkloadCommandInput, options?: __HttpHandlerOptions): Promise<GetWorkloadCommandOutput>;
  public getWorkload(args: GetWorkloadCommandInput, cb: (err: any, data?: GetWorkloadCommandOutput) => void): void;
  public getWorkload(
    args: GetWorkloadCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetWorkloadCommandOutput) => void
  ): void;
  public getWorkload(
    args: GetWorkloadCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetWorkloadCommandOutput) => void),
    cb?: (err: any, data?: GetWorkloadCommandOutput) => void
  ): Promise<GetWorkloadCommandOutput> | void {
    const command = new GetWorkloadCommand(args);
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
   * <p>List of answers.</p>
   */
  public listAnswers(args: ListAnswersCommandInput, options?: __HttpHandlerOptions): Promise<ListAnswersCommandOutput>;
  public listAnswers(args: ListAnswersCommandInput, cb: (err: any, data?: ListAnswersCommandOutput) => void): void;
  public listAnswers(
    args: ListAnswersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAnswersCommandOutput) => void
  ): void;
  public listAnswers(
    args: ListAnswersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAnswersCommandOutput) => void),
    cb?: (err: any, data?: ListAnswersCommandOutput) => void
  ): Promise<ListAnswersCommandOutput> | void {
    const command = new ListAnswersCommand(args);
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
   * <p>List the available lenses.</p>
   */
  public listLenses(args: ListLensesCommandInput, options?: __HttpHandlerOptions): Promise<ListLensesCommandOutput>;
  public listLenses(args: ListLensesCommandInput, cb: (err: any, data?: ListLensesCommandOutput) => void): void;
  public listLenses(
    args: ListLensesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLensesCommandOutput) => void
  ): void;
  public listLenses(
    args: ListLensesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListLensesCommandOutput) => void),
    cb?: (err: any, data?: ListLensesCommandOutput) => void
  ): Promise<ListLensesCommandOutput> | void {
    const command = new ListLensesCommand(args);
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
   * <p>List lens review improvements.</p>
   */
  public listLensReviewImprovements(
    args: ListLensReviewImprovementsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListLensReviewImprovementsCommandOutput>;
  public listLensReviewImprovements(
    args: ListLensReviewImprovementsCommandInput,
    cb: (err: any, data?: ListLensReviewImprovementsCommandOutput) => void
  ): void;
  public listLensReviewImprovements(
    args: ListLensReviewImprovementsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLensReviewImprovementsCommandOutput) => void
  ): void;
  public listLensReviewImprovements(
    args: ListLensReviewImprovementsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListLensReviewImprovementsCommandOutput) => void),
    cb?: (err: any, data?: ListLensReviewImprovementsCommandOutput) => void
  ): Promise<ListLensReviewImprovementsCommandOutput> | void {
    const command = new ListLensReviewImprovementsCommand(args);
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
   * <p>List lens reviews.</p>
   */
  public listLensReviews(
    args: ListLensReviewsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListLensReviewsCommandOutput>;
  public listLensReviews(
    args: ListLensReviewsCommandInput,
    cb: (err: any, data?: ListLensReviewsCommandOutput) => void
  ): void;
  public listLensReviews(
    args: ListLensReviewsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLensReviewsCommandOutput) => void
  ): void;
  public listLensReviews(
    args: ListLensReviewsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListLensReviewsCommandOutput) => void),
    cb?: (err: any, data?: ListLensReviewsCommandOutput) => void
  ): Promise<ListLensReviewsCommandOutput> | void {
    const command = new ListLensReviewsCommand(args);
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
   * <p>List all milestones for an existing workload.</p>
   */
  public listMilestones(
    args: ListMilestonesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMilestonesCommandOutput>;
  public listMilestones(
    args: ListMilestonesCommandInput,
    cb: (err: any, data?: ListMilestonesCommandOutput) => void
  ): void;
  public listMilestones(
    args: ListMilestonesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMilestonesCommandOutput) => void
  ): void;
  public listMilestones(
    args: ListMilestonesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListMilestonesCommandOutput) => void),
    cb?: (err: any, data?: ListMilestonesCommandOutput) => void
  ): Promise<ListMilestonesCommandOutput> | void {
    const command = new ListMilestonesCommand(args);
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
   * <p>List lens notifications.</p>
   */
  public listNotifications(
    args: ListNotificationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListNotificationsCommandOutput>;
  public listNotifications(
    args: ListNotificationsCommandInput,
    cb: (err: any, data?: ListNotificationsCommandOutput) => void
  ): void;
  public listNotifications(
    args: ListNotificationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListNotificationsCommandOutput) => void
  ): void;
  public listNotifications(
    args: ListNotificationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListNotificationsCommandOutput) => void),
    cb?: (err: any, data?: ListNotificationsCommandOutput) => void
  ): Promise<ListNotificationsCommandOutput> | void {
    const command = new ListNotificationsCommand(args);
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
   * <p>List  the workload invitations.</p>
   */
  public listShareInvitations(
    args: ListShareInvitationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListShareInvitationsCommandOutput>;
  public listShareInvitations(
    args: ListShareInvitationsCommandInput,
    cb: (err: any, data?: ListShareInvitationsCommandOutput) => void
  ): void;
  public listShareInvitations(
    args: ListShareInvitationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListShareInvitationsCommandOutput) => void
  ): void;
  public listShareInvitations(
    args: ListShareInvitationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListShareInvitationsCommandOutput) => void),
    cb?: (err: any, data?: ListShareInvitationsCommandOutput) => void
  ): Promise<ListShareInvitationsCommandOutput> | void {
    const command = new ListShareInvitationsCommand(args);
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
   * <p>List the tags for a resource.</p>
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
   * <p>List workloads. Paginated.</p>
   */
  public listWorkloads(
    args: ListWorkloadsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListWorkloadsCommandOutput>;
  public listWorkloads(
    args: ListWorkloadsCommandInput,
    cb: (err: any, data?: ListWorkloadsCommandOutput) => void
  ): void;
  public listWorkloads(
    args: ListWorkloadsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWorkloadsCommandOutput) => void
  ): void;
  public listWorkloads(
    args: ListWorkloadsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListWorkloadsCommandOutput) => void),
    cb?: (err: any, data?: ListWorkloadsCommandOutput) => void
  ): Promise<ListWorkloadsCommandOutput> | void {
    const command = new ListWorkloadsCommand(args);
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
   * <p>List the workload shares associated with the workload.</p>
   */
  public listWorkloadShares(
    args: ListWorkloadSharesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListWorkloadSharesCommandOutput>;
  public listWorkloadShares(
    args: ListWorkloadSharesCommandInput,
    cb: (err: any, data?: ListWorkloadSharesCommandOutput) => void
  ): void;
  public listWorkloadShares(
    args: ListWorkloadSharesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWorkloadSharesCommandOutput) => void
  ): void;
  public listWorkloadShares(
    args: ListWorkloadSharesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListWorkloadSharesCommandOutput) => void),
    cb?: (err: any, data?: ListWorkloadSharesCommandOutput) => void
  ): Promise<ListWorkloadSharesCommandOutput> | void {
    const command = new ListWorkloadSharesCommand(args);
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
   * <p>Adds one or more tags to the specified resource.</p>
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
   * <p>Deletes specified tags from a resource.</p>
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
   * <p>Update the answer to a specific question in a workload review.</p>
   */
  public updateAnswer(
    args: UpdateAnswerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAnswerCommandOutput>;
  public updateAnswer(args: UpdateAnswerCommandInput, cb: (err: any, data?: UpdateAnswerCommandOutput) => void): void;
  public updateAnswer(
    args: UpdateAnswerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAnswerCommandOutput) => void
  ): void;
  public updateAnswer(
    args: UpdateAnswerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateAnswerCommandOutput) => void),
    cb?: (err: any, data?: UpdateAnswerCommandOutput) => void
  ): Promise<UpdateAnswerCommandOutput> | void {
    const command = new UpdateAnswerCommand(args);
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
   * <p>Update lens review.</p>
   */
  public updateLensReview(
    args: UpdateLensReviewCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateLensReviewCommandOutput>;
  public updateLensReview(
    args: UpdateLensReviewCommandInput,
    cb: (err: any, data?: UpdateLensReviewCommandOutput) => void
  ): void;
  public updateLensReview(
    args: UpdateLensReviewCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateLensReviewCommandOutput) => void
  ): void;
  public updateLensReview(
    args: UpdateLensReviewCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateLensReviewCommandOutput) => void),
    cb?: (err: any, data?: UpdateLensReviewCommandOutput) => void
  ): Promise<UpdateLensReviewCommandOutput> | void {
    const command = new UpdateLensReviewCommand(args);
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
   * <p>Update a workload invitation.</p>
   */
  public updateShareInvitation(
    args: UpdateShareInvitationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateShareInvitationCommandOutput>;
  public updateShareInvitation(
    args: UpdateShareInvitationCommandInput,
    cb: (err: any, data?: UpdateShareInvitationCommandOutput) => void
  ): void;
  public updateShareInvitation(
    args: UpdateShareInvitationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateShareInvitationCommandOutput) => void
  ): void;
  public updateShareInvitation(
    args: UpdateShareInvitationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateShareInvitationCommandOutput) => void),
    cb?: (err: any, data?: UpdateShareInvitationCommandOutput) => void
  ): Promise<UpdateShareInvitationCommandOutput> | void {
    const command = new UpdateShareInvitationCommand(args);
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
   * <p>Update an existing workload.</p>
   */
  public updateWorkload(
    args: UpdateWorkloadCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateWorkloadCommandOutput>;
  public updateWorkload(
    args: UpdateWorkloadCommandInput,
    cb: (err: any, data?: UpdateWorkloadCommandOutput) => void
  ): void;
  public updateWorkload(
    args: UpdateWorkloadCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateWorkloadCommandOutput) => void
  ): void;
  public updateWorkload(
    args: UpdateWorkloadCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateWorkloadCommandOutput) => void),
    cb?: (err: any, data?: UpdateWorkloadCommandOutput) => void
  ): Promise<UpdateWorkloadCommandOutput> | void {
    const command = new UpdateWorkloadCommand(args);
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
   * <p>Update a workload share.</p>
   */
  public updateWorkloadShare(
    args: UpdateWorkloadShareCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateWorkloadShareCommandOutput>;
  public updateWorkloadShare(
    args: UpdateWorkloadShareCommandInput,
    cb: (err: any, data?: UpdateWorkloadShareCommandOutput) => void
  ): void;
  public updateWorkloadShare(
    args: UpdateWorkloadShareCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateWorkloadShareCommandOutput) => void
  ): void;
  public updateWorkloadShare(
    args: UpdateWorkloadShareCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateWorkloadShareCommandOutput) => void),
    cb?: (err: any, data?: UpdateWorkloadShareCommandOutput) => void
  ): Promise<UpdateWorkloadShareCommandOutput> | void {
    const command = new UpdateWorkloadShareCommand(args);
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
   * <p>Upgrade lens review.</p>
   */
  public upgradeLensReview(
    args: UpgradeLensReviewCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpgradeLensReviewCommandOutput>;
  public upgradeLensReview(
    args: UpgradeLensReviewCommandInput,
    cb: (err: any, data?: UpgradeLensReviewCommandOutput) => void
  ): void;
  public upgradeLensReview(
    args: UpgradeLensReviewCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpgradeLensReviewCommandOutput) => void
  ): void;
  public upgradeLensReview(
    args: UpgradeLensReviewCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpgradeLensReviewCommandOutput) => void),
    cb?: (err: any, data?: UpgradeLensReviewCommandOutput) => void
  ): Promise<UpgradeLensReviewCommandOutput> | void {
    const command = new UpgradeLensReviewCommand(args);
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
