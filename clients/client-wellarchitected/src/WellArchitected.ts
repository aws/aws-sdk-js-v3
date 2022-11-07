// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  AssociateLensesCommand,
  AssociateLensesCommandInput,
  AssociateLensesCommandOutput,
} from "./commands/AssociateLensesCommand";
import {
  CreateLensShareCommand,
  CreateLensShareCommandInput,
  CreateLensShareCommandOutput,
} from "./commands/CreateLensShareCommand";
import {
  CreateLensVersionCommand,
  CreateLensVersionCommandInput,
  CreateLensVersionCommandOutput,
} from "./commands/CreateLensVersionCommand";
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
import { DeleteLensCommand, DeleteLensCommandInput, DeleteLensCommandOutput } from "./commands/DeleteLensCommand";
import {
  DeleteLensShareCommand,
  DeleteLensShareCommandInput,
  DeleteLensShareCommandOutput,
} from "./commands/DeleteLensShareCommand";
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
import { ExportLensCommand, ExportLensCommandInput, ExportLensCommandOutput } from "./commands/ExportLensCommand";
import { GetAnswerCommand, GetAnswerCommandInput, GetAnswerCommandOutput } from "./commands/GetAnswerCommand";
import { GetLensCommand, GetLensCommandInput, GetLensCommandOutput } from "./commands/GetLensCommand";
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
import { ImportLensCommand, ImportLensCommandInput, ImportLensCommandOutput } from "./commands/ImportLensCommand";
import { ListAnswersCommand, ListAnswersCommandInput, ListAnswersCommandOutput } from "./commands/ListAnswersCommand";
import {
  ListCheckDetailsCommand,
  ListCheckDetailsCommandInput,
  ListCheckDetailsCommandOutput,
} from "./commands/ListCheckDetailsCommand";
import {
  ListCheckSummariesCommand,
  ListCheckSummariesCommandInput,
  ListCheckSummariesCommandOutput,
} from "./commands/ListCheckSummariesCommand";
import { ListLensesCommand, ListLensesCommandInput, ListLensesCommandOutput } from "./commands/ListLensesCommand";
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
import {
  ListLensSharesCommand,
  ListLensSharesCommandInput,
  ListLensSharesCommandOutput,
} from "./commands/ListLensSharesCommand";
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
  ListWorkloadsCommand,
  ListWorkloadsCommandInput,
  ListWorkloadsCommandOutput,
} from "./commands/ListWorkloadsCommand";
import {
  ListWorkloadSharesCommand,
  ListWorkloadSharesCommandInput,
  ListWorkloadSharesCommandOutput,
} from "./commands/ListWorkloadSharesCommand";
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
  UpdateGlobalSettingsCommand,
  UpdateGlobalSettingsCommandInput,
  UpdateGlobalSettingsCommandOutput,
} from "./commands/UpdateGlobalSettingsCommand";
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
import { WellArchitectedClient } from "./WellArchitectedClient";

/**
 * <fullname>Well-Architected Tool</fullname>
 *
 *          <p>This is the <i>Well-Architected Tool API Reference</i>. The WA Tool API provides programmatic access to the
 *             <a href="http://aws.amazon.com/well-architected-tool">Well-Architected Tool</a> in the
 *            <a href="https://console.aws.amazon.com/wellarchitected">Amazon Web Services Management Console</a>. For information
 *             about the Well-Architected Tool, see the
 *            <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/intro.html">Well-Architected Tool User Guide</a>.</p>
 */
export class WellArchitected extends WellArchitectedClient {
  /**
   * <p>Associate a lens to a workload.</p>
   *         <p>Up to 10 lenses can be associated with a workload in a single API operation. A
   *         maximum of 20 lenses can be associated with a workload.</p>
   *         <note>
   *             <p>
   *                <b>Disclaimer</b>
   *             </p>
   *             <p>By accessing and/or applying custom lenses created by another Amazon Web Services user or account,
   *             you acknowledge that custom lenses created by other users and shared with you are
   *             Third Party Content as defined in the Amazon Web Services Customer Agreement.    </p>
   *          </note>
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
   * <p>Create a lens share.</p>
   *         <p>The owner of a lens can share it with other Amazon Web Services accounts, IAM users, an organization,
   *             and organizational units (OUs) in the same Amazon Web Services Region.
   *             Shared access to a lens is not removed until the lens invitation is deleted.</p>
   *         <note>
   *             <p>
   *                <b>Disclaimer</b>
   *             </p>
   *             <p>By sharing your custom lenses with other Amazon Web Services accounts,
   *                 you acknowledge that Amazon Web Services will make your custom lenses available to those
   *                 other accounts. Those other accounts may continue to access and use your
   *                 shared custom lenses even if you delete the custom lenses
   *                 from your own Amazon Web Services account or terminate
   *                 your Amazon Web Services account.</p>
   *          </note>
   */
  public createLensShare(
    args: CreateLensShareCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLensShareCommandOutput>;
  public createLensShare(
    args: CreateLensShareCommandInput,
    cb: (err: any, data?: CreateLensShareCommandOutput) => void
  ): void;
  public createLensShare(
    args: CreateLensShareCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLensShareCommandOutput) => void
  ): void;
  public createLensShare(
    args: CreateLensShareCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateLensShareCommandOutput) => void),
    cb?: (err: any, data?: CreateLensShareCommandOutput) => void
  ): Promise<CreateLensShareCommandOutput> | void {
    const command = new CreateLensShareCommand(args);
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
   * <p>Create a new lens version.</p>
   *         <p>A lens can have up to 100 versions.</p>
   *         <p>After a lens has been imported, create a new lens version to publish it.  The owner of a lens can share the lens with other
   *             Amazon Web Services accounts and IAM users in the same Amazon Web Services Region. Only the owner of a lens can delete it.
   *         </p>
   */
  public createLensVersion(
    args: CreateLensVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLensVersionCommandOutput>;
  public createLensVersion(
    args: CreateLensVersionCommandInput,
    cb: (err: any, data?: CreateLensVersionCommandOutput) => void
  ): void;
  public createLensVersion(
    args: CreateLensVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLensVersionCommandOutput) => void
  ): void;
  public createLensVersion(
    args: CreateLensVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateLensVersionCommandOutput) => void),
    cb?: (err: any, data?: CreateLensVersionCommandOutput) => void
  ): Promise<CreateLensVersionCommandOutput> | void {
    const command = new CreateLensVersionCommand(args);
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
   *         <p>The owner of a workload can share the workload with other Amazon Web Services accounts, IAM users,
   *             an organization, and organizational units (OUs)
   *             in the same Amazon Web Services Region. Only the owner of a workload can delete it.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/define-workload.html">Defining a Workload</a> in the
   *                 <i>Well-Architected Tool User Guide</i>.</p>
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
   *         <p>The owner of a workload can share it with other Amazon Web Services accounts and IAM users in the same
   *             Amazon Web Services Region. Shared access to a workload is not removed until the workload invitation is
   *             deleted.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/workloads-sharing.html">Sharing a Workload</a> in the
   *                 <i>Well-Architected Tool User Guide</i>.</p>
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
   * <p>Delete an existing lens.</p>
   *         <p>Only the owner of a lens can delete it.  After the lens is deleted,  Amazon Web Services accounts and IAM users
   *               that you shared the lens with can continue to use it, but they will no longer be able to apply it to new workloads.
   *         </p>
   *         <note>
   *             <p>
   *                <b>Disclaimer</b>
   *             </p>
   *             <p>By sharing your custom lenses with other Amazon Web Services accounts,
   *                 you acknowledge that Amazon Web Services will make your custom lenses available to those
   *                 other accounts. Those other accounts may continue to access and use your
   *                 shared custom lenses even if you delete the custom lenses
   *                 from your own Amazon Web Services account or terminate
   *                 your Amazon Web Services account.</p>
   *          </note>
   */
  public deleteLens(args: DeleteLensCommandInput, options?: __HttpHandlerOptions): Promise<DeleteLensCommandOutput>;
  public deleteLens(args: DeleteLensCommandInput, cb: (err: any, data?: DeleteLensCommandOutput) => void): void;
  public deleteLens(
    args: DeleteLensCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLensCommandOutput) => void
  ): void;
  public deleteLens(
    args: DeleteLensCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteLensCommandOutput) => void),
    cb?: (err: any, data?: DeleteLensCommandOutput) => void
  ): Promise<DeleteLensCommandOutput> | void {
    const command = new DeleteLensCommand(args);
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
   * <p>Delete a lens share.</p>
   *         <p>After the lens share is deleted,  Amazon Web Services accounts, IAM users, organizations,
   *             and organizational units (OUs)
   *             that you shared the lens with can continue to use it, but they will no longer be able to apply it to new workloads.</p>
   *         <note>
   *             <p>
   *                <b>Disclaimer</b>
   *             </p>
   *             <p>By sharing your custom lenses with other Amazon Web Services accounts,
   *                 you acknowledge that Amazon Web Services will make your custom lenses available to those
   *                 other accounts. Those other accounts may continue to access and use your
   *                 shared custom lenses even if you delete the custom lenses
   *                 from your own Amazon Web Services account or terminate
   *                 your Amazon Web Services account.</p>
   *          </note>
   */
  public deleteLensShare(
    args: DeleteLensShareCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteLensShareCommandOutput>;
  public deleteLensShare(
    args: DeleteLensShareCommandInput,
    cb: (err: any, data?: DeleteLensShareCommandOutput) => void
  ): void;
  public deleteLensShare(
    args: DeleteLensShareCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLensShareCommandOutput) => void
  ): void;
  public deleteLensShare(
    args: DeleteLensShareCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteLensShareCommandOutput) => void),
    cb?: (err: any, data?: DeleteLensShareCommandOutput) => void
  ): Promise<DeleteLensShareCommandOutput> | void {
    const command = new DeleteLensShareCommand(args);
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
   *         <p>Up to 10 lenses can be disassociated from a workload in a single API operation.</p>
   *         <note>
   *             <p>The Amazon Web Services Well-Architected Framework lens (<code>wellarchitected</code>) cannot be
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
   * <p>Export an existing lens.</p>
   *         <p>Lenses are defined in JSON. For more information, see <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/lenses-format-specification.html">JSON format specification</a>
   *             in the <i>Well-Architected Tool User Guide</i>. Only the owner of a lens can export it.
   *         </p>
   *         <note>
   *             <p>
   *                <b>Disclaimer</b>
   *             </p>
   *             <p>Do not include or gather personal identifiable information (PII) of end users or
   *                 other identifiable individuals in or via your custom lenses. If your custom
   *                 lens or those shared with you and used in your account do include or collect
   *                 PII you are responsible for: ensuring that the included PII is processed in accordance
   *                 with applicable law, providing adequate privacy notices, and obtaining necessary
   *                 consents for processing such data.</p>
   *          </note>
   */
  public exportLens(args: ExportLensCommandInput, options?: __HttpHandlerOptions): Promise<ExportLensCommandOutput>;
  public exportLens(args: ExportLensCommandInput, cb: (err: any, data?: ExportLensCommandOutput) => void): void;
  public exportLens(
    args: ExportLensCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ExportLensCommandOutput) => void
  ): void;
  public exportLens(
    args: ExportLensCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ExportLensCommandOutput) => void),
    cb?: (err: any, data?: ExportLensCommandOutput) => void
  ): Promise<ExportLensCommandOutput> | void {
    const command = new ExportLensCommand(args);
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
   * <p>Get the answer to a specific question in a workload review.</p>
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
   * <p>Get an existing lens.</p>
   */
  public getLens(args: GetLensCommandInput, options?: __HttpHandlerOptions): Promise<GetLensCommandOutput>;
  public getLens(args: GetLensCommandInput, cb: (err: any, data?: GetLensCommandOutput) => void): void;
  public getLens(
    args: GetLensCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLensCommandOutput) => void
  ): void;
  public getLens(
    args: GetLensCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetLensCommandOutput) => void),
    cb?: (err: any, data?: GetLensCommandOutput) => void
  ): Promise<GetLensCommandOutput> | void {
    const command = new GetLensCommand(args);
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
   * <p>Import a new lens.</p>
   *         <p>The lens cannot be applied to workloads or shared with other Amazon Web Services accounts
   *             until it's published with <a>CreateLensVersion</a>
   *          </p>
   *         <p>Lenses are defined in JSON. For more information, see <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/lenses-format-specification.html">JSON format specification</a>
   *             in the <i>Well-Architected Tool User Guide</i>.</p>
   *         <p>A custom lens cannot exceed 500 KB in size.</p>
   *
   *         <note>
   *             <p>
   *                <b>Disclaimer</b>
   *             </p>
   *             <p>Do not include or gather personal identifiable information (PII) of end users or
   *                 other identifiable individuals in or via your custom lenses. If your custom
   *                 lens or those shared with you and used in your account do include or collect
   *                 PII you are responsible for: ensuring that the included PII is processed in accordance
   *                 with applicable law, providing adequate privacy notices, and obtaining necessary
   *                 consents for processing such data.</p>
   *          </note>
   */
  public importLens(args: ImportLensCommandInput, options?: __HttpHandlerOptions): Promise<ImportLensCommandOutput>;
  public importLens(args: ImportLensCommandInput, cb: (err: any, data?: ImportLensCommandOutput) => void): void;
  public importLens(
    args: ImportLensCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportLensCommandOutput) => void
  ): void;
  public importLens(
    args: ImportLensCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ImportLensCommandOutput) => void),
    cb?: (err: any, data?: ImportLensCommandOutput) => void
  ): Promise<ImportLensCommandOutput> | void {
    const command = new ImportLensCommand(args);
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
   * <p>List of Trusted Advisor check details by account related to the workload.</p>
   */
  public listCheckDetails(
    args: ListCheckDetailsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCheckDetailsCommandOutput>;
  public listCheckDetails(
    args: ListCheckDetailsCommandInput,
    cb: (err: any, data?: ListCheckDetailsCommandOutput) => void
  ): void;
  public listCheckDetails(
    args: ListCheckDetailsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCheckDetailsCommandOutput) => void
  ): void;
  public listCheckDetails(
    args: ListCheckDetailsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListCheckDetailsCommandOutput) => void),
    cb?: (err: any, data?: ListCheckDetailsCommandOutput) => void
  ): Promise<ListCheckDetailsCommandOutput> | void {
    const command = new ListCheckDetailsCommand(args);
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
   * <p>List of Trusted Advisor checks summarized for all accounts related to the workload.</p>
   */
  public listCheckSummaries(
    args: ListCheckSummariesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCheckSummariesCommandOutput>;
  public listCheckSummaries(
    args: ListCheckSummariesCommandInput,
    cb: (err: any, data?: ListCheckSummariesCommandOutput) => void
  ): void;
  public listCheckSummaries(
    args: ListCheckSummariesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCheckSummariesCommandOutput) => void
  ): void;
  public listCheckSummaries(
    args: ListCheckSummariesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListCheckSummariesCommandOutput) => void),
    cb?: (err: any, data?: ListCheckSummariesCommandOutput) => void
  ): Promise<ListCheckSummariesCommandOutput> | void {
    const command = new ListCheckSummariesCommand(args);
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
   * <p>List the lens shares associated with the lens.</p>
   */
  public listLensShares(
    args: ListLensSharesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListLensSharesCommandOutput>;
  public listLensShares(
    args: ListLensSharesCommandInput,
    cb: (err: any, data?: ListLensSharesCommandOutput) => void
  ): void;
  public listLensShares(
    args: ListLensSharesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLensSharesCommandOutput) => void
  ): void;
  public listLensShares(
    args: ListLensSharesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListLensSharesCommandOutput) => void),
    cb?: (err: any, data?: ListLensSharesCommandOutput) => void
  ): Promise<ListLensSharesCommandOutput> | void {
    const command = new ListLensSharesCommand(args);
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
   *         <note>
   *             <p>The WorkloadArn parameter can be either a workload ARN or a custom lens ARN.</p>
   *          </note>
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
   *         <note>
   *             <p>The WorkloadArn parameter can be either a workload ARN or a custom lens ARN.</p>
   *          </note>
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
   *         <note>
   *             <p>The WorkloadArn parameter can be either a workload ARN or a custom lens ARN.</p>
   *          </note>
   *
   *         <p>To specify multiple tags, use separate <b>tagKeys</b> parameters, for example:</p>
   *         <p>
   *             <code>DELETE /tags/WorkloadArn?tagKeys=key1&tagKeys=key2</code>
   *          </p>
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
   * <p>Updates whether the Amazon Web Services account is opted into organization sharing features.</p>
   */
  public updateGlobalSettings(
    args: UpdateGlobalSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateGlobalSettingsCommandOutput>;
  public updateGlobalSettings(
    args: UpdateGlobalSettingsCommandInput,
    cb: (err: any, data?: UpdateGlobalSettingsCommandOutput) => void
  ): void;
  public updateGlobalSettings(
    args: UpdateGlobalSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateGlobalSettingsCommandOutput) => void
  ): void;
  public updateGlobalSettings(
    args: UpdateGlobalSettingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateGlobalSettingsCommandOutput) => void),
    cb?: (err: any, data?: UpdateGlobalSettingsCommandOutput) => void
  ): Promise<UpdateGlobalSettingsCommandOutput> | void {
    const command = new UpdateGlobalSettingsCommand(args);
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
   * <p>Update a workload or custom lens share invitation.</p>
   *         <note>
   *             <p>This API operation can be called independently of any resource. Previous documentation implied that a workload ARN must be specified.</p>
   *          </note>
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
