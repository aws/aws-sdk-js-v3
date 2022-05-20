// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  AcceptQualificationRequestCommand,
  AcceptQualificationRequestCommandInput,
  AcceptQualificationRequestCommandOutput,
} from "./commands/AcceptQualificationRequestCommand";
import {
  ApproveAssignmentCommand,
  ApproveAssignmentCommandInput,
  ApproveAssignmentCommandOutput,
} from "./commands/ApproveAssignmentCommand";
import {
  AssociateQualificationWithWorkerCommand,
  AssociateQualificationWithWorkerCommandInput,
  AssociateQualificationWithWorkerCommandOutput,
} from "./commands/AssociateQualificationWithWorkerCommand";
import {
  CreateAdditionalAssignmentsForHITCommand,
  CreateAdditionalAssignmentsForHITCommandInput,
  CreateAdditionalAssignmentsForHITCommandOutput,
} from "./commands/CreateAdditionalAssignmentsForHITCommand";
import { CreateHITCommand, CreateHITCommandInput, CreateHITCommandOutput } from "./commands/CreateHITCommand";
import {
  CreateHITTypeCommand,
  CreateHITTypeCommandInput,
  CreateHITTypeCommandOutput,
} from "./commands/CreateHITTypeCommand";
import {
  CreateHITWithHITTypeCommand,
  CreateHITWithHITTypeCommandInput,
  CreateHITWithHITTypeCommandOutput,
} from "./commands/CreateHITWithHITTypeCommand";
import {
  CreateQualificationTypeCommand,
  CreateQualificationTypeCommandInput,
  CreateQualificationTypeCommandOutput,
} from "./commands/CreateQualificationTypeCommand";
import {
  CreateWorkerBlockCommand,
  CreateWorkerBlockCommandInput,
  CreateWorkerBlockCommandOutput,
} from "./commands/CreateWorkerBlockCommand";
import { DeleteHITCommand, DeleteHITCommandInput, DeleteHITCommandOutput } from "./commands/DeleteHITCommand";
import {
  DeleteQualificationTypeCommand,
  DeleteQualificationTypeCommandInput,
  DeleteQualificationTypeCommandOutput,
} from "./commands/DeleteQualificationTypeCommand";
import {
  DeleteWorkerBlockCommand,
  DeleteWorkerBlockCommandInput,
  DeleteWorkerBlockCommandOutput,
} from "./commands/DeleteWorkerBlockCommand";
import {
  DisassociateQualificationFromWorkerCommand,
  DisassociateQualificationFromWorkerCommandInput,
  DisassociateQualificationFromWorkerCommandOutput,
} from "./commands/DisassociateQualificationFromWorkerCommand";
import {
  GetAccountBalanceCommand,
  GetAccountBalanceCommandInput,
  GetAccountBalanceCommandOutput,
} from "./commands/GetAccountBalanceCommand";
import {
  GetAssignmentCommand,
  GetAssignmentCommandInput,
  GetAssignmentCommandOutput,
} from "./commands/GetAssignmentCommand";
import {
  GetFileUploadURLCommand,
  GetFileUploadURLCommandInput,
  GetFileUploadURLCommandOutput,
} from "./commands/GetFileUploadURLCommand";
import { GetHITCommand, GetHITCommandInput, GetHITCommandOutput } from "./commands/GetHITCommand";
import {
  GetQualificationScoreCommand,
  GetQualificationScoreCommandInput,
  GetQualificationScoreCommandOutput,
} from "./commands/GetQualificationScoreCommand";
import {
  GetQualificationTypeCommand,
  GetQualificationTypeCommandInput,
  GetQualificationTypeCommandOutput,
} from "./commands/GetQualificationTypeCommand";
import {
  ListAssignmentsForHITCommand,
  ListAssignmentsForHITCommandInput,
  ListAssignmentsForHITCommandOutput,
} from "./commands/ListAssignmentsForHITCommand";
import {
  ListBonusPaymentsCommand,
  ListBonusPaymentsCommandInput,
  ListBonusPaymentsCommandOutput,
} from "./commands/ListBonusPaymentsCommand";
import { ListHITsCommand, ListHITsCommandInput, ListHITsCommandOutput } from "./commands/ListHITsCommand";
import {
  ListHITsForQualificationTypeCommand,
  ListHITsForQualificationTypeCommandInput,
  ListHITsForQualificationTypeCommandOutput,
} from "./commands/ListHITsForQualificationTypeCommand";
import {
  ListQualificationRequestsCommand,
  ListQualificationRequestsCommandInput,
  ListQualificationRequestsCommandOutput,
} from "./commands/ListQualificationRequestsCommand";
import {
  ListQualificationTypesCommand,
  ListQualificationTypesCommandInput,
  ListQualificationTypesCommandOutput,
} from "./commands/ListQualificationTypesCommand";
import {
  ListReviewableHITsCommand,
  ListReviewableHITsCommandInput,
  ListReviewableHITsCommandOutput,
} from "./commands/ListReviewableHITsCommand";
import {
  ListReviewPolicyResultsForHITCommand,
  ListReviewPolicyResultsForHITCommandInput,
  ListReviewPolicyResultsForHITCommandOutput,
} from "./commands/ListReviewPolicyResultsForHITCommand";
import {
  ListWorkerBlocksCommand,
  ListWorkerBlocksCommandInput,
  ListWorkerBlocksCommandOutput,
} from "./commands/ListWorkerBlocksCommand";
import {
  ListWorkersWithQualificationTypeCommand,
  ListWorkersWithQualificationTypeCommandInput,
  ListWorkersWithQualificationTypeCommandOutput,
} from "./commands/ListWorkersWithQualificationTypeCommand";
import {
  NotifyWorkersCommand,
  NotifyWorkersCommandInput,
  NotifyWorkersCommandOutput,
} from "./commands/NotifyWorkersCommand";
import {
  RejectAssignmentCommand,
  RejectAssignmentCommandInput,
  RejectAssignmentCommandOutput,
} from "./commands/RejectAssignmentCommand";
import {
  RejectQualificationRequestCommand,
  RejectQualificationRequestCommandInput,
  RejectQualificationRequestCommandOutput,
} from "./commands/RejectQualificationRequestCommand";
import { SendBonusCommand, SendBonusCommandInput, SendBonusCommandOutput } from "./commands/SendBonusCommand";
import {
  SendTestEventNotificationCommand,
  SendTestEventNotificationCommandInput,
  SendTestEventNotificationCommandOutput,
} from "./commands/SendTestEventNotificationCommand";
import {
  UpdateExpirationForHITCommand,
  UpdateExpirationForHITCommandInput,
  UpdateExpirationForHITCommandOutput,
} from "./commands/UpdateExpirationForHITCommand";
import {
  UpdateHITReviewStatusCommand,
  UpdateHITReviewStatusCommandInput,
  UpdateHITReviewStatusCommandOutput,
} from "./commands/UpdateHITReviewStatusCommand";
import {
  UpdateHITTypeOfHITCommand,
  UpdateHITTypeOfHITCommandInput,
  UpdateHITTypeOfHITCommandOutput,
} from "./commands/UpdateHITTypeOfHITCommand";
import {
  UpdateNotificationSettingsCommand,
  UpdateNotificationSettingsCommandInput,
  UpdateNotificationSettingsCommandOutput,
} from "./commands/UpdateNotificationSettingsCommand";
import {
  UpdateQualificationTypeCommand,
  UpdateQualificationTypeCommandInput,
  UpdateQualificationTypeCommandOutput,
} from "./commands/UpdateQualificationTypeCommand";
import { MTurkClient } from "./MTurkClient";

/**
 * <fullname>Amazon Mechanical Turk API Reference</fullname>
 */
export class MTurk extends MTurkClient {
  /**
   * <p>
   *             The <code>AcceptQualificationRequest</code> operation approves a Worker's request for a Qualification.
   *         </p>
   *         <p>
   *             Only the owner of the Qualification type can grant a Qualification request for that	type.
   *         </p>
   *         <p>
   *             A successful request for the <code>AcceptQualificationRequest</code> operation
   *             returns with no errors and an empty body.
   *         </p>
   */
  public acceptQualificationRequest(
    args: AcceptQualificationRequestCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AcceptQualificationRequestCommandOutput>;
  public acceptQualificationRequest(
    args: AcceptQualificationRequestCommandInput,
    cb: (err: any, data?: AcceptQualificationRequestCommandOutput) => void
  ): void;
  public acceptQualificationRequest(
    args: AcceptQualificationRequestCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AcceptQualificationRequestCommandOutput) => void
  ): void;
  public acceptQualificationRequest(
    args: AcceptQualificationRequestCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AcceptQualificationRequestCommandOutput) => void),
    cb?: (err: any, data?: AcceptQualificationRequestCommandOutput) => void
  ): Promise<AcceptQualificationRequestCommandOutput> | void {
    const command = new AcceptQualificationRequestCommand(args);
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
   * <p>
   *             The <code>ApproveAssignment</code> operation approves the results of a completed assignment.
   *         </p>
   *         <p>
   *             Approving an assignment initiates two payments from the Requester's Amazon.com account
   *         </p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     The Worker who submitted the results is paid the reward specified in the HIT.
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     Amazon Mechanical Turk fees are debited.
   *                 </p>
   *             </li>
   *          </ul>
   *         <p>
   *             If the Requester's account does not have adequate funds for these payments,
   *             the call to ApproveAssignment returns an exception, and the approval is not processed.
   *             You can include an optional feedback message with the approval,
   *             which the Worker can see in the Status section of the web site.
   *         </p>
   *         <p>
   *             You can also call this operation for assignments that were previous rejected
   *             and approve them by explicitly overriding the previous rejection.
   *             This only works on rejected assignments that were submitted within the previous 30 days
   *             and only if the assignment's related HIT has not been deleted.
   *         </p>
   */
  public approveAssignment(
    args: ApproveAssignmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ApproveAssignmentCommandOutput>;
  public approveAssignment(
    args: ApproveAssignmentCommandInput,
    cb: (err: any, data?: ApproveAssignmentCommandOutput) => void
  ): void;
  public approveAssignment(
    args: ApproveAssignmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ApproveAssignmentCommandOutput) => void
  ): void;
  public approveAssignment(
    args: ApproveAssignmentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ApproveAssignmentCommandOutput) => void),
    cb?: (err: any, data?: ApproveAssignmentCommandOutput) => void
  ): Promise<ApproveAssignmentCommandOutput> | void {
    const command = new ApproveAssignmentCommand(args);
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
   * <p>
   *             The <code>AssociateQualificationWithWorker</code> operation gives a Worker a
   *             Qualification. <code>AssociateQualificationWithWorker</code> does not require that the Worker
   *             submit a Qualification request. It gives the Qualification directly to the Worker.
   *         </p>
   *
   *         <p>
   *             You can only assign a Qualification of a Qualification type that you created (using
   *             the <code>CreateQualificationType</code> operation).
   *         </p>
   *
   *         <note>
   *             <p>
   *                 Note: <code>AssociateQualificationWithWorker</code> does not affect any pending Qualification
   *                 requests for the Qualification by the Worker. If you assign a Qualification to a
   *                 Worker, then later grant a Qualification request made by the Worker, the granting of
   *                 the request may modify the Qualification score. To resolve a pending Qualification
   *                 request without affecting the Qualification the Worker already has, reject the
   *                 request with the <code>RejectQualificationRequest</code> operation.
   *             </p>
   *         </note>
   */
  public associateQualificationWithWorker(
    args: AssociateQualificationWithWorkerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateQualificationWithWorkerCommandOutput>;
  public associateQualificationWithWorker(
    args: AssociateQualificationWithWorkerCommandInput,
    cb: (err: any, data?: AssociateQualificationWithWorkerCommandOutput) => void
  ): void;
  public associateQualificationWithWorker(
    args: AssociateQualificationWithWorkerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateQualificationWithWorkerCommandOutput) => void
  ): void;
  public associateQualificationWithWorker(
    args: AssociateQualificationWithWorkerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateQualificationWithWorkerCommandOutput) => void),
    cb?: (err: any, data?: AssociateQualificationWithWorkerCommandOutput) => void
  ): Promise<AssociateQualificationWithWorkerCommandOutput> | void {
    const command = new AssociateQualificationWithWorkerCommand(args);
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
   * <p>
   *             The
   *             <code>CreateAdditionalAssignmentsForHIT</code>
   *             operation increases the maximum number of assignments of an existing HIT.
   *         </p>
   *         <p>
   *             To extend the maximum number of assignments, specify the number of additional assignments.</p>
   *         <note>
   *             <ul>
   *                <li>
   *                     <p>HITs created with fewer than 10 assignments cannot be extended to have 10 or more assignments. Attempting to add assignments in a way that brings the total number of assignments for a HIT from fewer than 10 assignments to 10 or more
   *                         assignments will result in an
   *                         <code>AWS.MechanicalTurk.InvalidMaximumAssignmentsIncrease</code>
   *                         exception.</p>
   *                 </li>
   *                <li>
   *                     <p>HITs that were created before July 22, 2015 cannot be extended. Attempting to extend HITs that were created before July 22, 2015 will result in an
   *                         <code>AWS.MechanicalTurk.HITTooOldForExtension</code>
   *                         exception.
   *                     </p>
   *                 </li>
   *             </ul>
   *         </note>
   */
  public createAdditionalAssignmentsForHIT(
    args: CreateAdditionalAssignmentsForHITCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAdditionalAssignmentsForHITCommandOutput>;
  public createAdditionalAssignmentsForHIT(
    args: CreateAdditionalAssignmentsForHITCommandInput,
    cb: (err: any, data?: CreateAdditionalAssignmentsForHITCommandOutput) => void
  ): void;
  public createAdditionalAssignmentsForHIT(
    args: CreateAdditionalAssignmentsForHITCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAdditionalAssignmentsForHITCommandOutput) => void
  ): void;
  public createAdditionalAssignmentsForHIT(
    args: CreateAdditionalAssignmentsForHITCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateAdditionalAssignmentsForHITCommandOutput) => void),
    cb?: (err: any, data?: CreateAdditionalAssignmentsForHITCommandOutput) => void
  ): Promise<CreateAdditionalAssignmentsForHITCommandOutput> | void {
    const command = new CreateAdditionalAssignmentsForHITCommand(args);
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
   * <p>The <code>CreateHIT</code> operation creates a new Human Intelligence Task (HIT).
   *             The new HIT is made available for Workers to find and accept on the Amazon Mechanical
   *             Turk website. </p>
   *         <p>
   *             This operation allows you to specify a new HIT by passing in values for the properties of the HIT, such as its title, reward amount and number of assignments. When you pass these values to <code>CreateHIT</code>, a new HIT is created for you, with a new <code>HITTypeID</code>. The HITTypeID can be used to create additional HITs in the future without needing to specify common parameters such as the title, description and reward amount each time.</p>
   *         <p> An alternative way to create HITs is to first generate a HITTypeID using the <code>CreateHITType</code> operation and then call the <code>CreateHITWithHITType</code> operation. This is the recommended best practice for Requesters who are creating large numbers of HITs.
   *         </p>
   *
   *         <p>CreateHIT also supports several ways to provide question data: by providing a value
   *             for the <code>Question</code> parameter that fully specifies the contents of the HIT, or by providing
   *             a <code>HitLayoutId</code> and associated <code>HitLayoutParameters</code>.
   *         </p>
   *
   *         <note>
   *             <p> If a HIT is created with 10 or more maximum assignments, there is an additional fee. For more information, see
   *             <a href="https://requester.mturk.com/pricing">Amazon Mechanical Turk Pricing</a>.</p>
   *         </note>
   */
  public createHIT(args: CreateHITCommandInput, options?: __HttpHandlerOptions): Promise<CreateHITCommandOutput>;
  public createHIT(args: CreateHITCommandInput, cb: (err: any, data?: CreateHITCommandOutput) => void): void;
  public createHIT(
    args: CreateHITCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateHITCommandOutput) => void
  ): void;
  public createHIT(
    args: CreateHITCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateHITCommandOutput) => void),
    cb?: (err: any, data?: CreateHITCommandOutput) => void
  ): Promise<CreateHITCommandOutput> | void {
    const command = new CreateHITCommand(args);
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
   * <p>
   *             The <code>CreateHITType</code> operation creates a new HIT type. This operation
   *             allows you to define a standard set of HIT properties to use when creating HITs.
   *             If you register a HIT type with values that match an existing HIT type, the HIT type
   *             ID of the existing type will be returned.
   *         </p>
   */
  public createHITType(
    args: CreateHITTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateHITTypeCommandOutput>;
  public createHITType(
    args: CreateHITTypeCommandInput,
    cb: (err: any, data?: CreateHITTypeCommandOutput) => void
  ): void;
  public createHITType(
    args: CreateHITTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateHITTypeCommandOutput) => void
  ): void;
  public createHITType(
    args: CreateHITTypeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateHITTypeCommandOutput) => void),
    cb?: (err: any, data?: CreateHITTypeCommandOutput) => void
  ): Promise<CreateHITTypeCommandOutput> | void {
    const command = new CreateHITTypeCommand(args);
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
   * <p>
   *             The <code>CreateHITWithHITType</code> operation creates a new Human Intelligence Task (HIT)
   *             using an existing HITTypeID generated by the <code>CreateHITType</code> operation.
   *         </p>
   *         <p>
   *             This is an alternative way to create HITs from the <code>CreateHIT</code> operation.
   *             This is the recommended best practice for Requesters who are creating large numbers of HITs.
   *         </p>
   *         <p>CreateHITWithHITType also supports several ways to provide question data:
   *             by providing a value for the <code>Question</code> parameter that fully specifies the contents of the HIT,
   *             or by providing a <code>HitLayoutId</code> and associated <code>HitLayoutParameters</code>.
   *         </p>
   *         <note>
   *             <p>
   *                 If a HIT is created with 10 or more maximum assignments, there is an additional fee.
   *                 For more information, see <a href="https://requester.mturk.com/pricing">Amazon Mechanical Turk Pricing</a>.
   *             </p>
   *         </note>
   */
  public createHITWithHITType(
    args: CreateHITWithHITTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateHITWithHITTypeCommandOutput>;
  public createHITWithHITType(
    args: CreateHITWithHITTypeCommandInput,
    cb: (err: any, data?: CreateHITWithHITTypeCommandOutput) => void
  ): void;
  public createHITWithHITType(
    args: CreateHITWithHITTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateHITWithHITTypeCommandOutput) => void
  ): void;
  public createHITWithHITType(
    args: CreateHITWithHITTypeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateHITWithHITTypeCommandOutput) => void),
    cb?: (err: any, data?: CreateHITWithHITTypeCommandOutput) => void
  ): Promise<CreateHITWithHITTypeCommandOutput> | void {
    const command = new CreateHITWithHITTypeCommand(args);
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
   * <p>
   *             The
   *             <code>CreateQualificationType</code>
   *             operation creates a new Qualification type, which is represented by a
   *             <code>QualificationType</code>
   *             data structure.
   *         </p>
   */
  public createQualificationType(
    args: CreateQualificationTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateQualificationTypeCommandOutput>;
  public createQualificationType(
    args: CreateQualificationTypeCommandInput,
    cb: (err: any, data?: CreateQualificationTypeCommandOutput) => void
  ): void;
  public createQualificationType(
    args: CreateQualificationTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateQualificationTypeCommandOutput) => void
  ): void;
  public createQualificationType(
    args: CreateQualificationTypeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateQualificationTypeCommandOutput) => void),
    cb?: (err: any, data?: CreateQualificationTypeCommandOutput) => void
  ): Promise<CreateQualificationTypeCommandOutput> | void {
    const command = new CreateQualificationTypeCommand(args);
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
   * <p>The <code>CreateWorkerBlock</code> operation allows you to prevent a Worker from working on your HITs. For example, you can block a Worker who is producing poor quality work. You can block up to 100,000 Workers.</p>
   */
  public createWorkerBlock(
    args: CreateWorkerBlockCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateWorkerBlockCommandOutput>;
  public createWorkerBlock(
    args: CreateWorkerBlockCommandInput,
    cb: (err: any, data?: CreateWorkerBlockCommandOutput) => void
  ): void;
  public createWorkerBlock(
    args: CreateWorkerBlockCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateWorkerBlockCommandOutput) => void
  ): void;
  public createWorkerBlock(
    args: CreateWorkerBlockCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateWorkerBlockCommandOutput) => void),
    cb?: (err: any, data?: CreateWorkerBlockCommandOutput) => void
  ): Promise<CreateWorkerBlockCommandOutput> | void {
    const command = new CreateWorkerBlockCommand(args);
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
   * <p>
   *             The <code>DeleteHIT</code> operation is used to delete HIT that is no longer needed.
   *             Only the Requester who created the HIT can delete it.
   *         </p>
   *         <p>
   *             You can only dispose of HITs that are in the <code>Reviewable</code> state,
   *             with all of their submitted assignments already either approved or rejected.
   *             If you call the DeleteHIT operation on a HIT that is not in the <code>Reviewable</code> state
   *             (for example, that has not expired, or still has active assignments),
   *             or on a HIT that is Reviewable but without all of its submitted assignments
   *             already approved or rejected, the service will return an error.
   *         </p>
   *         <note>
   *             <ul>
   *                <li>
   *                     <p>
   *                         HITs are automatically disposed of after 120 days.
   *                     </p>
   *                 </li>
   *                <li>
   *                     <p>
   *                         After you dispose of a HIT, you can no longer approve the HIT's rejected assignments.
   *                     </p>
   *                 </li>
   *                <li>
   *                     <p>
   *                         Disposed HITs are not returned in results for the ListHITs operation.
   *                     </p>
   *                 </li>
   *                <li>
   *                     <p>
   *                         Disposing HITs can improve the performance of operations such as ListReviewableHITs and ListHITs.
   *                     </p>
   *                 </li>
   *             </ul>
   *         </note>
   */
  public deleteHIT(args: DeleteHITCommandInput, options?: __HttpHandlerOptions): Promise<DeleteHITCommandOutput>;
  public deleteHIT(args: DeleteHITCommandInput, cb: (err: any, data?: DeleteHITCommandOutput) => void): void;
  public deleteHIT(
    args: DeleteHITCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteHITCommandOutput) => void
  ): void;
  public deleteHIT(
    args: DeleteHITCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteHITCommandOutput) => void),
    cb?: (err: any, data?: DeleteHITCommandOutput) => void
  ): Promise<DeleteHITCommandOutput> | void {
    const command = new DeleteHITCommand(args);
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
   * <p>
   *             The
   *             <code>DeleteQualificationType</code>
   *             deletes a Qualification type and deletes any HIT types that are
   *             associated with the Qualification type.
   *         </p>
   *         <p>This operation does not revoke Qualifications already assigned
   *             to Workers because the Qualifications might be needed for active HITs.
   *             If there are any pending requests for the Qualification type, Amazon
   *             Mechanical Turk rejects those requests. After you delete a
   *             Qualification type, you can no longer use it to create HITs or HIT
   *             types.</p>
   *         <note>
   *             <p>DeleteQualificationType must wait for all the HITs that use
   *                 the deleted Qualification type to be deleted before completing. It
   *                 may take up to 48 hours before DeleteQualificationType completes and
   *                 the unique name of the Qualification type is available for reuse with
   *                 CreateQualificationType.</p>
   *         </note>
   */
  public deleteQualificationType(
    args: DeleteQualificationTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteQualificationTypeCommandOutput>;
  public deleteQualificationType(
    args: DeleteQualificationTypeCommandInput,
    cb: (err: any, data?: DeleteQualificationTypeCommandOutput) => void
  ): void;
  public deleteQualificationType(
    args: DeleteQualificationTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteQualificationTypeCommandOutput) => void
  ): void;
  public deleteQualificationType(
    args: DeleteQualificationTypeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteQualificationTypeCommandOutput) => void),
    cb?: (err: any, data?: DeleteQualificationTypeCommandOutput) => void
  ): Promise<DeleteQualificationTypeCommandOutput> | void {
    const command = new DeleteQualificationTypeCommand(args);
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
   * <p>The <code>DeleteWorkerBlock</code> operation allows you to reinstate a blocked Worker to work on your HITs. This operation reverses the effects of the CreateWorkerBlock operation. You need the Worker ID to use this operation. If the Worker ID is missing or invalid, this operation fails and returns the message “WorkerId is invalid.” If the specified Worker is not blocked, this operation returns successfully.</p>
   */
  public deleteWorkerBlock(
    args: DeleteWorkerBlockCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteWorkerBlockCommandOutput>;
  public deleteWorkerBlock(
    args: DeleteWorkerBlockCommandInput,
    cb: (err: any, data?: DeleteWorkerBlockCommandOutput) => void
  ): void;
  public deleteWorkerBlock(
    args: DeleteWorkerBlockCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteWorkerBlockCommandOutput) => void
  ): void;
  public deleteWorkerBlock(
    args: DeleteWorkerBlockCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteWorkerBlockCommandOutput) => void),
    cb?: (err: any, data?: DeleteWorkerBlockCommandOutput) => void
  ): Promise<DeleteWorkerBlockCommandOutput> | void {
    const command = new DeleteWorkerBlockCommand(args);
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
   * <p>
   *             The 	<code>DisassociateQualificationFromWorker</code>
   *             revokes a previously granted Qualification from a user.
   *         </p>
   *         <p>
   *             You can provide a text message explaining why the Qualification was
   *             revoked. The user who had the Qualification can see this message.
   *         </p>
   */
  public disassociateQualificationFromWorker(
    args: DisassociateQualificationFromWorkerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateQualificationFromWorkerCommandOutput>;
  public disassociateQualificationFromWorker(
    args: DisassociateQualificationFromWorkerCommandInput,
    cb: (err: any, data?: DisassociateQualificationFromWorkerCommandOutput) => void
  ): void;
  public disassociateQualificationFromWorker(
    args: DisassociateQualificationFromWorkerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateQualificationFromWorkerCommandOutput) => void
  ): void;
  public disassociateQualificationFromWorker(
    args: DisassociateQualificationFromWorkerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisassociateQualificationFromWorkerCommandOutput) => void),
    cb?: (err: any, data?: DisassociateQualificationFromWorkerCommandOutput) => void
  ): Promise<DisassociateQualificationFromWorkerCommandOutput> | void {
    const command = new DisassociateQualificationFromWorkerCommand(args);
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
   * <p>The <code>GetAccountBalance</code> operation retrieves the Prepaid HITs balance in your Amazon Mechanical Turk account if you are a Prepaid Requester.
   *             Alternatively, this operation will retrieve the remaining available AWS Billing usage if you have enabled AWS Billing.
   *             Note: If you have enabled AWS Billing and still have a remaining Prepaid HITs balance, this balance can be viewed on the My Account page in the Requester console.</p>
   */
  public getAccountBalance(
    args: GetAccountBalanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAccountBalanceCommandOutput>;
  public getAccountBalance(
    args: GetAccountBalanceCommandInput,
    cb: (err: any, data?: GetAccountBalanceCommandOutput) => void
  ): void;
  public getAccountBalance(
    args: GetAccountBalanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAccountBalanceCommandOutput) => void
  ): void;
  public getAccountBalance(
    args: GetAccountBalanceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetAccountBalanceCommandOutput) => void),
    cb?: (err: any, data?: GetAccountBalanceCommandOutput) => void
  ): Promise<GetAccountBalanceCommandOutput> | void {
    const command = new GetAccountBalanceCommand(args);
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
   * <p>
   *             The <code>GetAssignment</code> operation retrieves the details of the specified Assignment.
   *         </p>
   */
  public getAssignment(
    args: GetAssignmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAssignmentCommandOutput>;
  public getAssignment(
    args: GetAssignmentCommandInput,
    cb: (err: any, data?: GetAssignmentCommandOutput) => void
  ): void;
  public getAssignment(
    args: GetAssignmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAssignmentCommandOutput) => void
  ): void;
  public getAssignment(
    args: GetAssignmentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetAssignmentCommandOutput) => void),
    cb?: (err: any, data?: GetAssignmentCommandOutput) => void
  ): Promise<GetAssignmentCommandOutput> | void {
    const command = new GetAssignmentCommand(args);
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
   * <p>
   *             The
   *             <code>GetFileUploadURL</code>
   *             operation generates and returns a temporary URL. You use the
   *             temporary URL to retrieve a file uploaded by a Worker as an answer to
   *             a FileUploadAnswer question for a HIT. The temporary URL is generated
   *             the instant the GetFileUploadURL operation is called, and is valid
   *             for 60 seconds. You can get a temporary file upload URL any time
   *             until the HIT is disposed. After the HIT is disposed, any uploaded
   *             files are deleted, and cannot be retrieved.
   *
   *             Pending Deprecation on December 12, 2017. The Answer Specification
   *             structure will no longer  support the <code>FileUploadAnswer</code>
   *             element to be used for the QuestionForm data structure.
   *             Instead, we recommend that Requesters who want to create HITs asking
   *             Workers to upload files to use Amazon S3.
   *
   *         </p>
   */
  public getFileUploadURL(
    args: GetFileUploadURLCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetFileUploadURLCommandOutput>;
  public getFileUploadURL(
    args: GetFileUploadURLCommandInput,
    cb: (err: any, data?: GetFileUploadURLCommandOutput) => void
  ): void;
  public getFileUploadURL(
    args: GetFileUploadURLCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFileUploadURLCommandOutput) => void
  ): void;
  public getFileUploadURL(
    args: GetFileUploadURLCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetFileUploadURLCommandOutput) => void),
    cb?: (err: any, data?: GetFileUploadURLCommandOutput) => void
  ): Promise<GetFileUploadURLCommandOutput> | void {
    const command = new GetFileUploadURLCommand(args);
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
   * <p>
   *             The <code>GetHIT</code> operation retrieves the details of the specified HIT.
   *         </p>
   */
  public getHIT(args: GetHITCommandInput, options?: __HttpHandlerOptions): Promise<GetHITCommandOutput>;
  public getHIT(args: GetHITCommandInput, cb: (err: any, data?: GetHITCommandOutput) => void): void;
  public getHIT(
    args: GetHITCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetHITCommandOutput) => void
  ): void;
  public getHIT(
    args: GetHITCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetHITCommandOutput) => void),
    cb?: (err: any, data?: GetHITCommandOutput) => void
  ): Promise<GetHITCommandOutput> | void {
    const command = new GetHITCommand(args);
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
   * <p>
   *             The
   *             <code>GetQualificationScore</code>
   *             operation returns the value of a Worker's Qualification for a given
   *             Qualification type.
   *         </p>
   *         <p>
   *             To get a Worker's Qualification, you must know the Worker's ID. The
   *             Worker's ID is included in the assignment data returned by the
   *             <code>ListAssignmentsForHIT</code>
   *             operation.
   *         </p>
   *         <p>Only the owner of a Qualification type can query the value of
   *             a Worker's Qualification of that type.</p>
   */
  public getQualificationScore(
    args: GetQualificationScoreCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetQualificationScoreCommandOutput>;
  public getQualificationScore(
    args: GetQualificationScoreCommandInput,
    cb: (err: any, data?: GetQualificationScoreCommandOutput) => void
  ): void;
  public getQualificationScore(
    args: GetQualificationScoreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetQualificationScoreCommandOutput) => void
  ): void;
  public getQualificationScore(
    args: GetQualificationScoreCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetQualificationScoreCommandOutput) => void),
    cb?: (err: any, data?: GetQualificationScoreCommandOutput) => void
  ): Promise<GetQualificationScoreCommandOutput> | void {
    const command = new GetQualificationScoreCommand(args);
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
   * <p>
   *             The <code>GetQualificationType</code>operation retrieves information about a Qualification type using its ID.
   *         </p>
   */
  public getQualificationType(
    args: GetQualificationTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetQualificationTypeCommandOutput>;
  public getQualificationType(
    args: GetQualificationTypeCommandInput,
    cb: (err: any, data?: GetQualificationTypeCommandOutput) => void
  ): void;
  public getQualificationType(
    args: GetQualificationTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetQualificationTypeCommandOutput) => void
  ): void;
  public getQualificationType(
    args: GetQualificationTypeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetQualificationTypeCommandOutput) => void),
    cb?: (err: any, data?: GetQualificationTypeCommandOutput) => void
  ): Promise<GetQualificationTypeCommandOutput> | void {
    const command = new GetQualificationTypeCommand(args);
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
   * <p>
   *             The
   *             <code>ListAssignmentsForHIT</code>
   *             operation retrieves completed assignments for a HIT. You can use this
   *             operation to retrieve the results for a HIT.
   *         </p>
   *         <p> You can get assignments for a HIT at any time, even if the
   *             HIT is not yet Reviewable. If a HIT requested multiple assignments,
   *             and has received some results but has not yet become Reviewable, you
   *             can still retrieve the partial results with this operation.
   *         </p>
   *         <p> Use the AssignmentStatus parameter to control which set of
   *             assignments for a HIT are returned. The ListAssignmentsForHIT
   *             operation
   *             can return submitted assignments awaiting approval, or it can return
   *             assignments that have already been approved or rejected. You can set
   *             AssignmentStatus=Approved,Rejected to get assignments that have
   *             already been approved and rejected together in one result set.
   *         </p>
   *         <p> Only the Requester who created the HIT can retrieve the
   *             assignments for that HIT.
   *         </p>
   *         <p> Results are sorted and divided into numbered pages and the
   *             operation returns a single page of results. You can use the
   *             parameters
   *             of the operation to control sorting and pagination.
   *         </p>
   */
  public listAssignmentsForHIT(
    args: ListAssignmentsForHITCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAssignmentsForHITCommandOutput>;
  public listAssignmentsForHIT(
    args: ListAssignmentsForHITCommandInput,
    cb: (err: any, data?: ListAssignmentsForHITCommandOutput) => void
  ): void;
  public listAssignmentsForHIT(
    args: ListAssignmentsForHITCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAssignmentsForHITCommandOutput) => void
  ): void;
  public listAssignmentsForHIT(
    args: ListAssignmentsForHITCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAssignmentsForHITCommandOutput) => void),
    cb?: (err: any, data?: ListAssignmentsForHITCommandOutput) => void
  ): Promise<ListAssignmentsForHITCommandOutput> | void {
    const command = new ListAssignmentsForHITCommand(args);
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
   * <p>
   *             The
   *             <code>ListBonusPayments</code>
   *             operation retrieves the amounts of bonuses you have paid to Workers
   *             for a given HIT or assignment.
   *         </p>
   */
  public listBonusPayments(
    args: ListBonusPaymentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListBonusPaymentsCommandOutput>;
  public listBonusPayments(
    args: ListBonusPaymentsCommandInput,
    cb: (err: any, data?: ListBonusPaymentsCommandOutput) => void
  ): void;
  public listBonusPayments(
    args: ListBonusPaymentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBonusPaymentsCommandOutput) => void
  ): void;
  public listBonusPayments(
    args: ListBonusPaymentsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListBonusPaymentsCommandOutput) => void),
    cb?: (err: any, data?: ListBonusPaymentsCommandOutput) => void
  ): Promise<ListBonusPaymentsCommandOutput> | void {
    const command = new ListBonusPaymentsCommand(args);
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
   * <p>
   *             The
   *             <code>ListHITs</code>
   *             operation returns all of a Requester's HITs. The operation returns
   *             HITs of any status, except for HITs that have been deleted of with
   *             the DeleteHIT operation or that have been auto-deleted.
   *         </p>
   */
  public listHITs(args: ListHITsCommandInput, options?: __HttpHandlerOptions): Promise<ListHITsCommandOutput>;
  public listHITs(args: ListHITsCommandInput, cb: (err: any, data?: ListHITsCommandOutput) => void): void;
  public listHITs(
    args: ListHITsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListHITsCommandOutput) => void
  ): void;
  public listHITs(
    args: ListHITsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListHITsCommandOutput) => void),
    cb?: (err: any, data?: ListHITsCommandOutput) => void
  ): Promise<ListHITsCommandOutput> | void {
    const command = new ListHITsCommand(args);
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
   * <p>
   *             The <code>ListHITsForQualificationType</code> operation returns the HITs that use
   *             the given Qualification type for a Qualification requirement.
   *             The operation returns HITs of any status, except for HITs that have been deleted
   *             with the <code>DeleteHIT</code> operation or that have been auto-deleted.
   *         </p>
   */
  public listHITsForQualificationType(
    args: ListHITsForQualificationTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListHITsForQualificationTypeCommandOutput>;
  public listHITsForQualificationType(
    args: ListHITsForQualificationTypeCommandInput,
    cb: (err: any, data?: ListHITsForQualificationTypeCommandOutput) => void
  ): void;
  public listHITsForQualificationType(
    args: ListHITsForQualificationTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListHITsForQualificationTypeCommandOutput) => void
  ): void;
  public listHITsForQualificationType(
    args: ListHITsForQualificationTypeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListHITsForQualificationTypeCommandOutput) => void),
    cb?: (err: any, data?: ListHITsForQualificationTypeCommandOutput) => void
  ): Promise<ListHITsForQualificationTypeCommandOutput> | void {
    const command = new ListHITsForQualificationTypeCommand(args);
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
   * <p>
   *             The
   *             <code>ListQualificationRequests</code>
   *             operation retrieves requests for Qualifications of a particular
   *             Qualification type. The owner of the Qualification type calls this
   *             operation to poll for pending requests, and accepts them using the
   *             AcceptQualification operation.
   *         </p>
   */
  public listQualificationRequests(
    args: ListQualificationRequestsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListQualificationRequestsCommandOutput>;
  public listQualificationRequests(
    args: ListQualificationRequestsCommandInput,
    cb: (err: any, data?: ListQualificationRequestsCommandOutput) => void
  ): void;
  public listQualificationRequests(
    args: ListQualificationRequestsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListQualificationRequestsCommandOutput) => void
  ): void;
  public listQualificationRequests(
    args: ListQualificationRequestsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListQualificationRequestsCommandOutput) => void),
    cb?: (err: any, data?: ListQualificationRequestsCommandOutput) => void
  ): Promise<ListQualificationRequestsCommandOutput> | void {
    const command = new ListQualificationRequestsCommand(args);
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
   * <p>
   *             The
   *             <code>ListQualificationTypes</code>
   *             operation returns a list of Qualification types, filtered by
   *             an optional search term.
   *         </p>
   */
  public listQualificationTypes(
    args: ListQualificationTypesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListQualificationTypesCommandOutput>;
  public listQualificationTypes(
    args: ListQualificationTypesCommandInput,
    cb: (err: any, data?: ListQualificationTypesCommandOutput) => void
  ): void;
  public listQualificationTypes(
    args: ListQualificationTypesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListQualificationTypesCommandOutput) => void
  ): void;
  public listQualificationTypes(
    args: ListQualificationTypesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListQualificationTypesCommandOutput) => void),
    cb?: (err: any, data?: ListQualificationTypesCommandOutput) => void
  ): Promise<ListQualificationTypesCommandOutput> | void {
    const command = new ListQualificationTypesCommand(args);
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
   * <p>
   *             The <code>ListReviewableHITs</code> operation retrieves the HITs with Status equal to
   *             Reviewable or Status equal to Reviewing that belong to the Requester calling the operation.
   *         </p>
   */
  public listReviewableHITs(
    args: ListReviewableHITsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListReviewableHITsCommandOutput>;
  public listReviewableHITs(
    args: ListReviewableHITsCommandInput,
    cb: (err: any, data?: ListReviewableHITsCommandOutput) => void
  ): void;
  public listReviewableHITs(
    args: ListReviewableHITsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListReviewableHITsCommandOutput) => void
  ): void;
  public listReviewableHITs(
    args: ListReviewableHITsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListReviewableHITsCommandOutput) => void),
    cb?: (err: any, data?: ListReviewableHITsCommandOutput) => void
  ): Promise<ListReviewableHITsCommandOutput> | void {
    const command = new ListReviewableHITsCommand(args);
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
   * <p>
   *             The <code>ListReviewPolicyResultsForHIT</code> operation retrieves the computed results
   *             and the actions taken in the course of executing your Review Policies for a given HIT.
   *             For information about how to specify Review Policies when you call CreateHIT,
   *             see Review Policies. The ListReviewPolicyResultsForHIT operation can return results for both
   *             Assignment-level and HIT-level review results.
   *         </p>
   */
  public listReviewPolicyResultsForHIT(
    args: ListReviewPolicyResultsForHITCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListReviewPolicyResultsForHITCommandOutput>;
  public listReviewPolicyResultsForHIT(
    args: ListReviewPolicyResultsForHITCommandInput,
    cb: (err: any, data?: ListReviewPolicyResultsForHITCommandOutput) => void
  ): void;
  public listReviewPolicyResultsForHIT(
    args: ListReviewPolicyResultsForHITCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListReviewPolicyResultsForHITCommandOutput) => void
  ): void;
  public listReviewPolicyResultsForHIT(
    args: ListReviewPolicyResultsForHITCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListReviewPolicyResultsForHITCommandOutput) => void),
    cb?: (err: any, data?: ListReviewPolicyResultsForHITCommandOutput) => void
  ): Promise<ListReviewPolicyResultsForHITCommandOutput> | void {
    const command = new ListReviewPolicyResultsForHITCommand(args);
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
   * <p>The <code>ListWorkersBlocks</code> operation retrieves a list of Workers who are blocked from working on your HITs.</p>
   */
  public listWorkerBlocks(
    args: ListWorkerBlocksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListWorkerBlocksCommandOutput>;
  public listWorkerBlocks(
    args: ListWorkerBlocksCommandInput,
    cb: (err: any, data?: ListWorkerBlocksCommandOutput) => void
  ): void;
  public listWorkerBlocks(
    args: ListWorkerBlocksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWorkerBlocksCommandOutput) => void
  ): void;
  public listWorkerBlocks(
    args: ListWorkerBlocksCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListWorkerBlocksCommandOutput) => void),
    cb?: (err: any, data?: ListWorkerBlocksCommandOutput) => void
  ): Promise<ListWorkerBlocksCommandOutput> | void {
    const command = new ListWorkerBlocksCommand(args);
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
   * <p>
   *             The <code>ListWorkersWithQualificationType</code> operation returns all of the Workers
   *             that have been associated with a given Qualification type.
   *         </p>
   */
  public listWorkersWithQualificationType(
    args: ListWorkersWithQualificationTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListWorkersWithQualificationTypeCommandOutput>;
  public listWorkersWithQualificationType(
    args: ListWorkersWithQualificationTypeCommandInput,
    cb: (err: any, data?: ListWorkersWithQualificationTypeCommandOutput) => void
  ): void;
  public listWorkersWithQualificationType(
    args: ListWorkersWithQualificationTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWorkersWithQualificationTypeCommandOutput) => void
  ): void;
  public listWorkersWithQualificationType(
    args: ListWorkersWithQualificationTypeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListWorkersWithQualificationTypeCommandOutput) => void),
    cb?: (err: any, data?: ListWorkersWithQualificationTypeCommandOutput) => void
  ): Promise<ListWorkersWithQualificationTypeCommandOutput> | void {
    const command = new ListWorkersWithQualificationTypeCommand(args);
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
   * <p>
   *             The
   *             <code>NotifyWorkers</code>
   *             operation sends an email to one or more Workers that you specify with
   *             the Worker ID. You can specify up to 100 Worker IDs to send the same
   *             message with a single call to the NotifyWorkers operation. The
   *             NotifyWorkers operation will send a notification email to a Worker
   *             only if you have previously approved or rejected work from the
   *             Worker.
   *         </p>
   */
  public notifyWorkers(
    args: NotifyWorkersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<NotifyWorkersCommandOutput>;
  public notifyWorkers(
    args: NotifyWorkersCommandInput,
    cb: (err: any, data?: NotifyWorkersCommandOutput) => void
  ): void;
  public notifyWorkers(
    args: NotifyWorkersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: NotifyWorkersCommandOutput) => void
  ): void;
  public notifyWorkers(
    args: NotifyWorkersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: NotifyWorkersCommandOutput) => void),
    cb?: (err: any, data?: NotifyWorkersCommandOutput) => void
  ): Promise<NotifyWorkersCommandOutput> | void {
    const command = new NotifyWorkersCommand(args);
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
   * <p>
   *             The <code>RejectAssignment</code> operation rejects the results of a completed assignment.
   *         </p>
   *         <p>
   *             You can include an optional feedback message with the rejection,
   *             which the Worker can see in the Status section of the web site.
   *             When you include a feedback message with the rejection,
   *             it helps the Worker understand why the assignment was rejected,
   *             and can improve the quality of the results the Worker submits in the future.
   *         </p>
   *         <p>
   *             Only the Requester who created the HIT can reject an assignment for the HIT.
   *         </p>
   */
  public rejectAssignment(
    args: RejectAssignmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RejectAssignmentCommandOutput>;
  public rejectAssignment(
    args: RejectAssignmentCommandInput,
    cb: (err: any, data?: RejectAssignmentCommandOutput) => void
  ): void;
  public rejectAssignment(
    args: RejectAssignmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RejectAssignmentCommandOutput) => void
  ): void;
  public rejectAssignment(
    args: RejectAssignmentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RejectAssignmentCommandOutput) => void),
    cb?: (err: any, data?: RejectAssignmentCommandOutput) => void
  ): Promise<RejectAssignmentCommandOutput> | void {
    const command = new RejectAssignmentCommand(args);
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
   * <p>
   *             The
   *             <code>RejectQualificationRequest</code>
   *             operation rejects a user's request for a Qualification.
   *         </p>
   *         <p> You can provide a text message explaining why the request was
   *             rejected. The Worker who made the request can see this message.</p>
   */
  public rejectQualificationRequest(
    args: RejectQualificationRequestCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RejectQualificationRequestCommandOutput>;
  public rejectQualificationRequest(
    args: RejectQualificationRequestCommandInput,
    cb: (err: any, data?: RejectQualificationRequestCommandOutput) => void
  ): void;
  public rejectQualificationRequest(
    args: RejectQualificationRequestCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RejectQualificationRequestCommandOutput) => void
  ): void;
  public rejectQualificationRequest(
    args: RejectQualificationRequestCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RejectQualificationRequestCommandOutput) => void),
    cb?: (err: any, data?: RejectQualificationRequestCommandOutput) => void
  ): Promise<RejectQualificationRequestCommandOutput> | void {
    const command = new RejectQualificationRequestCommand(args);
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
   * <p>
   *             The
   *             <code>SendBonus</code>
   *             operation issues a payment of money from your account to a Worker.
   *             This payment happens separately from the reward you pay to the Worker
   *             when you approve the Worker's assignment. The SendBonus operation
   *             requires the Worker's ID and the assignment ID as parameters to
   *             initiate payment of the bonus. You must include a message that
   *             explains the reason for the bonus payment, as the Worker may not be
   *             expecting the payment. Amazon Mechanical Turk collects a fee for
   *             bonus payments, similar to the HIT listing fee. This operation fails
   *             if your account does not have enough funds to pay for both the bonus
   *             and the fees.
   *         </p>
   */
  public sendBonus(args: SendBonusCommandInput, options?: __HttpHandlerOptions): Promise<SendBonusCommandOutput>;
  public sendBonus(args: SendBonusCommandInput, cb: (err: any, data?: SendBonusCommandOutput) => void): void;
  public sendBonus(
    args: SendBonusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendBonusCommandOutput) => void
  ): void;
  public sendBonus(
    args: SendBonusCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SendBonusCommandOutput) => void),
    cb?: (err: any, data?: SendBonusCommandOutput) => void
  ): Promise<SendBonusCommandOutput> | void {
    const command = new SendBonusCommand(args);
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
   * <p>
   *             The <code>SendTestEventNotification</code> operation causes Amazon Mechanical Turk to send
   *             a notification message as if a HIT event occurred, according to the provided
   *             notification specification. This allows you to test notifications without
   *             setting up notifications for a real HIT type and trying to trigger them using the website.
   *             When you call this operation, the service attempts to send the test notification immediately.
   *         </p>
   */
  public sendTestEventNotification(
    args: SendTestEventNotificationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SendTestEventNotificationCommandOutput>;
  public sendTestEventNotification(
    args: SendTestEventNotificationCommandInput,
    cb: (err: any, data?: SendTestEventNotificationCommandOutput) => void
  ): void;
  public sendTestEventNotification(
    args: SendTestEventNotificationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendTestEventNotificationCommandOutput) => void
  ): void;
  public sendTestEventNotification(
    args: SendTestEventNotificationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SendTestEventNotificationCommandOutput) => void),
    cb?: (err: any, data?: SendTestEventNotificationCommandOutput) => void
  ): Promise<SendTestEventNotificationCommandOutput> | void {
    const command = new SendTestEventNotificationCommand(args);
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
   * <p>
   *             The <code>UpdateExpirationForHIT</code> operation allows you update the expiration time of a HIT.
   *             If you update it to a time in the past, the HIT will be immediately expired.
   *         </p>
   */
  public updateExpirationForHIT(
    args: UpdateExpirationForHITCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateExpirationForHITCommandOutput>;
  public updateExpirationForHIT(
    args: UpdateExpirationForHITCommandInput,
    cb: (err: any, data?: UpdateExpirationForHITCommandOutput) => void
  ): void;
  public updateExpirationForHIT(
    args: UpdateExpirationForHITCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateExpirationForHITCommandOutput) => void
  ): void;
  public updateExpirationForHIT(
    args: UpdateExpirationForHITCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateExpirationForHITCommandOutput) => void),
    cb?: (err: any, data?: UpdateExpirationForHITCommandOutput) => void
  ): Promise<UpdateExpirationForHITCommandOutput> | void {
    const command = new UpdateExpirationForHITCommand(args);
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
   * <p>
   *             The <code>UpdateHITReviewStatus</code> operation updates the status of a HIT.
   *             If the status is Reviewable, this operation can update the status to Reviewing,
   *             or it can revert a Reviewing HIT back to the Reviewable status.
   *         </p>
   */
  public updateHITReviewStatus(
    args: UpdateHITReviewStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateHITReviewStatusCommandOutput>;
  public updateHITReviewStatus(
    args: UpdateHITReviewStatusCommandInput,
    cb: (err: any, data?: UpdateHITReviewStatusCommandOutput) => void
  ): void;
  public updateHITReviewStatus(
    args: UpdateHITReviewStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateHITReviewStatusCommandOutput) => void
  ): void;
  public updateHITReviewStatus(
    args: UpdateHITReviewStatusCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateHITReviewStatusCommandOutput) => void),
    cb?: (err: any, data?: UpdateHITReviewStatusCommandOutput) => void
  ): Promise<UpdateHITReviewStatusCommandOutput> | void {
    const command = new UpdateHITReviewStatusCommand(args);
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
   * <p>
   *             The
   *             <code>UpdateHITTypeOfHIT</code>
   *             operation allows you to change the HITType properties of a HIT. This
   *             operation disassociates the HIT from its old HITType properties and
   *             associates it with the new HITType properties. The HIT takes on the
   *             properties of the new HITType in place of the old ones.
   *         </p>
   */
  public updateHITTypeOfHIT(
    args: UpdateHITTypeOfHITCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateHITTypeOfHITCommandOutput>;
  public updateHITTypeOfHIT(
    args: UpdateHITTypeOfHITCommandInput,
    cb: (err: any, data?: UpdateHITTypeOfHITCommandOutput) => void
  ): void;
  public updateHITTypeOfHIT(
    args: UpdateHITTypeOfHITCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateHITTypeOfHITCommandOutput) => void
  ): void;
  public updateHITTypeOfHIT(
    args: UpdateHITTypeOfHITCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateHITTypeOfHITCommandOutput) => void),
    cb?: (err: any, data?: UpdateHITTypeOfHITCommandOutput) => void
  ): Promise<UpdateHITTypeOfHITCommandOutput> | void {
    const command = new UpdateHITTypeOfHITCommand(args);
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
   * <p>
   *             The <code>UpdateNotificationSettings</code> operation creates, updates,
   *             disables or re-enables notifications for a HIT type.
   *             If you call the UpdateNotificationSettings operation for a HIT type that already has a
   *             notification specification, the operation replaces the old specification with a new one.
   *             You can call the UpdateNotificationSettings operation to enable or disable notifications
   *             for the HIT type, without having to modify the notification specification itself by providing
   *             updates to the Active status without specifying a new notification specification.
   *             To change the Active status of a HIT type's notifications,
   *             the HIT type must already have a notification specification,
   *             or one must be provided in the same call to <code>UpdateNotificationSettings</code>.
   *         </p>
   */
  public updateNotificationSettings(
    args: UpdateNotificationSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateNotificationSettingsCommandOutput>;
  public updateNotificationSettings(
    args: UpdateNotificationSettingsCommandInput,
    cb: (err: any, data?: UpdateNotificationSettingsCommandOutput) => void
  ): void;
  public updateNotificationSettings(
    args: UpdateNotificationSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateNotificationSettingsCommandOutput) => void
  ): void;
  public updateNotificationSettings(
    args: UpdateNotificationSettingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateNotificationSettingsCommandOutput) => void),
    cb?: (err: any, data?: UpdateNotificationSettingsCommandOutput) => void
  ): Promise<UpdateNotificationSettingsCommandOutput> | void {
    const command = new UpdateNotificationSettingsCommand(args);
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
   * <p>
   *             The
   *             <code>UpdateQualificationType</code>
   *             operation modifies the attributes of an existing Qualification type,
   *             which is represented by a QualificationType data structure. Only the
   *             owner of a Qualification type can modify its attributes.
   *         </p>
   *         <p> Most attributes of a Qualification type can be changed after
   *             the type has been created. However, the Name and Keywords fields
   *             cannot be modified. The RetryDelayInSeconds parameter can be modified
   *             or added to change the delay or to enable retries, but
   *             RetryDelayInSeconds cannot be used to disable retries. </p>
   *         <p> You can use this operation to update the test for a
   *             Qualification type. The test is updated based on the values specified
   *             for the Test, TestDurationInSeconds and AnswerKey parameters. All
   *             three parameters specify the updated test. If you are updating the
   *             test for a type, you must specify the Test and TestDurationInSeconds
   *             parameters. The AnswerKey parameter is optional; omitting it specifies
   *             that the updated test does not have an answer key. </p>
   *         <p> If you omit the Test parameter, the test for the
   *             Qualification type is unchanged. There is no way to remove a test from
   *             a Qualification type that has one. If the type already has a test, you
   *             cannot update it to be AutoGranted. If the Qualification type does not
   *             have a test and one is provided by an update, the type will henceforth
   *             have a test. </p>
   *         <p> If you want to update the test duration or answer key for an
   *             existing test without changing the questions, you must specify a Test
   *             parameter with the original questions, along with the updated values. </p>
   *         <p> If you provide an updated Test but no AnswerKey, the new test
   *             will not have an answer key. Requests for such Qualifications must be
   *             granted manually. </p>
   *         <p> You can also update the AutoGranted and AutoGrantedValue
   *             attributes of the Qualification type.</p>
   */
  public updateQualificationType(
    args: UpdateQualificationTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateQualificationTypeCommandOutput>;
  public updateQualificationType(
    args: UpdateQualificationTypeCommandInput,
    cb: (err: any, data?: UpdateQualificationTypeCommandOutput) => void
  ): void;
  public updateQualificationType(
    args: UpdateQualificationTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateQualificationTypeCommandOutput) => void
  ): void;
  public updateQualificationType(
    args: UpdateQualificationTypeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateQualificationTypeCommandOutput) => void),
    cb?: (err: any, data?: UpdateQualificationTypeCommandOutput) => void
  ): Promise<UpdateQualificationTypeCommandOutput> | void {
    const command = new UpdateQualificationTypeCommand(args);
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
