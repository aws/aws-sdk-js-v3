// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

import {
  type AcceptQualificationRequestCommandInput,
  type AcceptQualificationRequestCommandOutput,
  AcceptQualificationRequestCommand,
} from "./commands/AcceptQualificationRequestCommand";
import {
  type ApproveAssignmentCommandInput,
  type ApproveAssignmentCommandOutput,
  ApproveAssignmentCommand,
} from "./commands/ApproveAssignmentCommand";
import {
  type AssociateQualificationWithWorkerCommandInput,
  type AssociateQualificationWithWorkerCommandOutput,
  AssociateQualificationWithWorkerCommand,
} from "./commands/AssociateQualificationWithWorkerCommand";
import {
  type CreateAdditionalAssignmentsForHITCommandInput,
  type CreateAdditionalAssignmentsForHITCommandOutput,
  CreateAdditionalAssignmentsForHITCommand,
} from "./commands/CreateAdditionalAssignmentsForHITCommand";
import { type CreateHITCommandInput, type CreateHITCommandOutput, CreateHITCommand } from "./commands/CreateHITCommand";
import {
  type CreateHITTypeCommandInput,
  type CreateHITTypeCommandOutput,
  CreateHITTypeCommand,
} from "./commands/CreateHITTypeCommand";
import {
  type CreateHITWithHITTypeCommandInput,
  type CreateHITWithHITTypeCommandOutput,
  CreateHITWithHITTypeCommand,
} from "./commands/CreateHITWithHITTypeCommand";
import {
  type CreateQualificationTypeCommandInput,
  type CreateQualificationTypeCommandOutput,
  CreateQualificationTypeCommand,
} from "./commands/CreateQualificationTypeCommand";
import {
  type CreateWorkerBlockCommandInput,
  type CreateWorkerBlockCommandOutput,
  CreateWorkerBlockCommand,
} from "./commands/CreateWorkerBlockCommand";
import { type DeleteHITCommandInput, type DeleteHITCommandOutput, DeleteHITCommand } from "./commands/DeleteHITCommand";
import {
  type DeleteQualificationTypeCommandInput,
  type DeleteQualificationTypeCommandOutput,
  DeleteQualificationTypeCommand,
} from "./commands/DeleteQualificationTypeCommand";
import {
  type DeleteWorkerBlockCommandInput,
  type DeleteWorkerBlockCommandOutput,
  DeleteWorkerBlockCommand,
} from "./commands/DeleteWorkerBlockCommand";
import {
  type DisassociateQualificationFromWorkerCommandInput,
  type DisassociateQualificationFromWorkerCommandOutput,
  DisassociateQualificationFromWorkerCommand,
} from "./commands/DisassociateQualificationFromWorkerCommand";
import {
  type GetAccountBalanceCommandInput,
  type GetAccountBalanceCommandOutput,
  GetAccountBalanceCommand,
} from "./commands/GetAccountBalanceCommand";
import {
  type GetAssignmentCommandInput,
  type GetAssignmentCommandOutput,
  GetAssignmentCommand,
} from "./commands/GetAssignmentCommand";
import {
  type GetFileUploadURLCommandInput,
  type GetFileUploadURLCommandOutput,
  GetFileUploadURLCommand,
} from "./commands/GetFileUploadURLCommand";
import { type GetHITCommandInput, type GetHITCommandOutput, GetHITCommand } from "./commands/GetHITCommand";
import {
  type GetQualificationScoreCommandInput,
  type GetQualificationScoreCommandOutput,
  GetQualificationScoreCommand,
} from "./commands/GetQualificationScoreCommand";
import {
  type GetQualificationTypeCommandInput,
  type GetQualificationTypeCommandOutput,
  GetQualificationTypeCommand,
} from "./commands/GetQualificationTypeCommand";
import {
  type ListAssignmentsForHITCommandInput,
  type ListAssignmentsForHITCommandOutput,
  ListAssignmentsForHITCommand,
} from "./commands/ListAssignmentsForHITCommand";
import {
  type ListBonusPaymentsCommandInput,
  type ListBonusPaymentsCommandOutput,
  ListBonusPaymentsCommand,
} from "./commands/ListBonusPaymentsCommand";
import { type ListHITsCommandInput, type ListHITsCommandOutput, ListHITsCommand } from "./commands/ListHITsCommand";
import {
  type ListHITsForQualificationTypeCommandInput,
  type ListHITsForQualificationTypeCommandOutput,
  ListHITsForQualificationTypeCommand,
} from "./commands/ListHITsForQualificationTypeCommand";
import {
  type ListQualificationRequestsCommandInput,
  type ListQualificationRequestsCommandOutput,
  ListQualificationRequestsCommand,
} from "./commands/ListQualificationRequestsCommand";
import {
  type ListQualificationTypesCommandInput,
  type ListQualificationTypesCommandOutput,
  ListQualificationTypesCommand,
} from "./commands/ListQualificationTypesCommand";
import {
  type ListReviewableHITsCommandInput,
  type ListReviewableHITsCommandOutput,
  ListReviewableHITsCommand,
} from "./commands/ListReviewableHITsCommand";
import {
  type ListReviewPolicyResultsForHITCommandInput,
  type ListReviewPolicyResultsForHITCommandOutput,
  ListReviewPolicyResultsForHITCommand,
} from "./commands/ListReviewPolicyResultsForHITCommand";
import {
  type ListWorkerBlocksCommandInput,
  type ListWorkerBlocksCommandOutput,
  ListWorkerBlocksCommand,
} from "./commands/ListWorkerBlocksCommand";
import {
  type ListWorkersWithQualificationTypeCommandInput,
  type ListWorkersWithQualificationTypeCommandOutput,
  ListWorkersWithQualificationTypeCommand,
} from "./commands/ListWorkersWithQualificationTypeCommand";
import {
  type NotifyWorkersCommandInput,
  type NotifyWorkersCommandOutput,
  NotifyWorkersCommand,
} from "./commands/NotifyWorkersCommand";
import {
  type RejectAssignmentCommandInput,
  type RejectAssignmentCommandOutput,
  RejectAssignmentCommand,
} from "./commands/RejectAssignmentCommand";
import {
  type RejectQualificationRequestCommandInput,
  type RejectQualificationRequestCommandOutput,
  RejectQualificationRequestCommand,
} from "./commands/RejectQualificationRequestCommand";
import { type SendBonusCommandInput, type SendBonusCommandOutput, SendBonusCommand } from "./commands/SendBonusCommand";
import {
  type SendTestEventNotificationCommandInput,
  type SendTestEventNotificationCommandOutput,
  SendTestEventNotificationCommand,
} from "./commands/SendTestEventNotificationCommand";
import {
  type UpdateExpirationForHITCommandInput,
  type UpdateExpirationForHITCommandOutput,
  UpdateExpirationForHITCommand,
} from "./commands/UpdateExpirationForHITCommand";
import {
  type UpdateHITReviewStatusCommandInput,
  type UpdateHITReviewStatusCommandOutput,
  UpdateHITReviewStatusCommand,
} from "./commands/UpdateHITReviewStatusCommand";
import {
  type UpdateHITTypeOfHITCommandInput,
  type UpdateHITTypeOfHITCommandOutput,
  UpdateHITTypeOfHITCommand,
} from "./commands/UpdateHITTypeOfHITCommand";
import {
  type UpdateNotificationSettingsCommandInput,
  type UpdateNotificationSettingsCommandOutput,
  UpdateNotificationSettingsCommand,
} from "./commands/UpdateNotificationSettingsCommand";
import {
  type UpdateQualificationTypeCommandInput,
  type UpdateQualificationTypeCommandOutput,
  UpdateQualificationTypeCommand,
} from "./commands/UpdateQualificationTypeCommand";
import { MTurkClient } from "./MTurkClient";
import { paginateListAssignmentsForHIT } from "./pagination/ListAssignmentsForHITPaginator";
import { paginateListBonusPayments } from "./pagination/ListBonusPaymentsPaginator";
import { paginateListHITsForQualificationType } from "./pagination/ListHITsForQualificationTypePaginator";
import { paginateListHITs } from "./pagination/ListHITsPaginator";
import { paginateListQualificationRequests } from "./pagination/ListQualificationRequestsPaginator";
import { paginateListQualificationTypes } from "./pagination/ListQualificationTypesPaginator";
import { paginateListReviewableHITs } from "./pagination/ListReviewableHITsPaginator";
import { paginateListReviewPolicyResultsForHIT } from "./pagination/ListReviewPolicyResultsForHITPaginator";
import { paginateListWorkerBlocks } from "./pagination/ListWorkerBlocksPaginator";
import { paginateListWorkersWithQualificationType } from "./pagination/ListWorkersWithQualificationTypePaginator";

const commands = {
  AcceptQualificationRequestCommand,
  ApproveAssignmentCommand,
  AssociateQualificationWithWorkerCommand,
  CreateAdditionalAssignmentsForHITCommand,
  CreateHITCommand,
  CreateHITTypeCommand,
  CreateHITWithHITTypeCommand,
  CreateQualificationTypeCommand,
  CreateWorkerBlockCommand,
  DeleteHITCommand,
  DeleteQualificationTypeCommand,
  DeleteWorkerBlockCommand,
  DisassociateQualificationFromWorkerCommand,
  GetAccountBalanceCommand,
  GetAssignmentCommand,
  GetFileUploadURLCommand,
  GetHITCommand,
  GetQualificationScoreCommand,
  GetQualificationTypeCommand,
  ListAssignmentsForHITCommand,
  ListBonusPaymentsCommand,
  ListHITsCommand,
  ListHITsForQualificationTypeCommand,
  ListQualificationRequestsCommand,
  ListQualificationTypesCommand,
  ListReviewableHITsCommand,
  ListReviewPolicyResultsForHITCommand,
  ListWorkerBlocksCommand,
  ListWorkersWithQualificationTypeCommand,
  NotifyWorkersCommand,
  RejectAssignmentCommand,
  RejectQualificationRequestCommand,
  SendBonusCommand,
  SendTestEventNotificationCommand,
  UpdateExpirationForHITCommand,
  UpdateHITReviewStatusCommand,
  UpdateHITTypeOfHITCommand,
  UpdateNotificationSettingsCommand,
  UpdateQualificationTypeCommand,
};
const paginators = {
  paginateListAssignmentsForHIT,
  paginateListBonusPayments,
  paginateListHITs,
  paginateListHITsForQualificationType,
  paginateListQualificationRequests,
  paginateListQualificationTypes,
  paginateListReviewableHITs,
  paginateListReviewPolicyResultsForHIT,
  paginateListWorkerBlocks,
  paginateListWorkersWithQualificationType,
};

export interface MTurk {
  /**
   * @see {@link AcceptQualificationRequestCommand}
   */
  acceptQualificationRequest(
    args: AcceptQualificationRequestCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AcceptQualificationRequestCommandOutput>;
  acceptQualificationRequest(
    args: AcceptQualificationRequestCommandInput,
    cb: (err: any, data?: AcceptQualificationRequestCommandOutput) => void
  ): void;
  acceptQualificationRequest(
    args: AcceptQualificationRequestCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AcceptQualificationRequestCommandOutput) => void
  ): void;

  /**
   * @see {@link ApproveAssignmentCommand}
   */
  approveAssignment(
    args: ApproveAssignmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ApproveAssignmentCommandOutput>;
  approveAssignment(
    args: ApproveAssignmentCommandInput,
    cb: (err: any, data?: ApproveAssignmentCommandOutput) => void
  ): void;
  approveAssignment(
    args: ApproveAssignmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ApproveAssignmentCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateQualificationWithWorkerCommand}
   */
  associateQualificationWithWorker(
    args: AssociateQualificationWithWorkerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateQualificationWithWorkerCommandOutput>;
  associateQualificationWithWorker(
    args: AssociateQualificationWithWorkerCommandInput,
    cb: (err: any, data?: AssociateQualificationWithWorkerCommandOutput) => void
  ): void;
  associateQualificationWithWorker(
    args: AssociateQualificationWithWorkerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateQualificationWithWorkerCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAdditionalAssignmentsForHITCommand}
   */
  createAdditionalAssignmentsForHIT(
    args: CreateAdditionalAssignmentsForHITCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAdditionalAssignmentsForHITCommandOutput>;
  createAdditionalAssignmentsForHIT(
    args: CreateAdditionalAssignmentsForHITCommandInput,
    cb: (err: any, data?: CreateAdditionalAssignmentsForHITCommandOutput) => void
  ): void;
  createAdditionalAssignmentsForHIT(
    args: CreateAdditionalAssignmentsForHITCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAdditionalAssignmentsForHITCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateHITCommand}
   */
  createHIT(
    args: CreateHITCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateHITCommandOutput>;
  createHIT(
    args: CreateHITCommandInput,
    cb: (err: any, data?: CreateHITCommandOutput) => void
  ): void;
  createHIT(
    args: CreateHITCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateHITCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateHITTypeCommand}
   */
  createHITType(
    args: CreateHITTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateHITTypeCommandOutput>;
  createHITType(
    args: CreateHITTypeCommandInput,
    cb: (err: any, data?: CreateHITTypeCommandOutput) => void
  ): void;
  createHITType(
    args: CreateHITTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateHITTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateHITWithHITTypeCommand}
   */
  createHITWithHITType(
    args: CreateHITWithHITTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateHITWithHITTypeCommandOutput>;
  createHITWithHITType(
    args: CreateHITWithHITTypeCommandInput,
    cb: (err: any, data?: CreateHITWithHITTypeCommandOutput) => void
  ): void;
  createHITWithHITType(
    args: CreateHITWithHITTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateHITWithHITTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateQualificationTypeCommand}
   */
  createQualificationType(
    args: CreateQualificationTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateQualificationTypeCommandOutput>;
  createQualificationType(
    args: CreateQualificationTypeCommandInput,
    cb: (err: any, data?: CreateQualificationTypeCommandOutput) => void
  ): void;
  createQualificationType(
    args: CreateQualificationTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateQualificationTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateWorkerBlockCommand}
   */
  createWorkerBlock(
    args: CreateWorkerBlockCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateWorkerBlockCommandOutput>;
  createWorkerBlock(
    args: CreateWorkerBlockCommandInput,
    cb: (err: any, data?: CreateWorkerBlockCommandOutput) => void
  ): void;
  createWorkerBlock(
    args: CreateWorkerBlockCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateWorkerBlockCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteHITCommand}
   */
  deleteHIT(
    args: DeleteHITCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteHITCommandOutput>;
  deleteHIT(
    args: DeleteHITCommandInput,
    cb: (err: any, data?: DeleteHITCommandOutput) => void
  ): void;
  deleteHIT(
    args: DeleteHITCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteHITCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteQualificationTypeCommand}
   */
  deleteQualificationType(
    args: DeleteQualificationTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteQualificationTypeCommandOutput>;
  deleteQualificationType(
    args: DeleteQualificationTypeCommandInput,
    cb: (err: any, data?: DeleteQualificationTypeCommandOutput) => void
  ): void;
  deleteQualificationType(
    args: DeleteQualificationTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteQualificationTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteWorkerBlockCommand}
   */
  deleteWorkerBlock(
    args: DeleteWorkerBlockCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteWorkerBlockCommandOutput>;
  deleteWorkerBlock(
    args: DeleteWorkerBlockCommandInput,
    cb: (err: any, data?: DeleteWorkerBlockCommandOutput) => void
  ): void;
  deleteWorkerBlock(
    args: DeleteWorkerBlockCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteWorkerBlockCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateQualificationFromWorkerCommand}
   */
  disassociateQualificationFromWorker(
    args: DisassociateQualificationFromWorkerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateQualificationFromWorkerCommandOutput>;
  disassociateQualificationFromWorker(
    args: DisassociateQualificationFromWorkerCommandInput,
    cb: (err: any, data?: DisassociateQualificationFromWorkerCommandOutput) => void
  ): void;
  disassociateQualificationFromWorker(
    args: DisassociateQualificationFromWorkerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateQualificationFromWorkerCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAccountBalanceCommand}
   */
  getAccountBalance(): Promise<GetAccountBalanceCommandOutput>;
  getAccountBalance(
    args: GetAccountBalanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAccountBalanceCommandOutput>;
  getAccountBalance(
    args: GetAccountBalanceCommandInput,
    cb: (err: any, data?: GetAccountBalanceCommandOutput) => void
  ): void;
  getAccountBalance(
    args: GetAccountBalanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAccountBalanceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAssignmentCommand}
   */
  getAssignment(
    args: GetAssignmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAssignmentCommandOutput>;
  getAssignment(
    args: GetAssignmentCommandInput,
    cb: (err: any, data?: GetAssignmentCommandOutput) => void
  ): void;
  getAssignment(
    args: GetAssignmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAssignmentCommandOutput) => void
  ): void;

  /**
   * @see {@link GetFileUploadURLCommand}
   */
  getFileUploadURL(
    args: GetFileUploadURLCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetFileUploadURLCommandOutput>;
  getFileUploadURL(
    args: GetFileUploadURLCommandInput,
    cb: (err: any, data?: GetFileUploadURLCommandOutput) => void
  ): void;
  getFileUploadURL(
    args: GetFileUploadURLCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFileUploadURLCommandOutput) => void
  ): void;

  /**
   * @see {@link GetHITCommand}
   */
  getHIT(
    args: GetHITCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetHITCommandOutput>;
  getHIT(
    args: GetHITCommandInput,
    cb: (err: any, data?: GetHITCommandOutput) => void
  ): void;
  getHIT(
    args: GetHITCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetHITCommandOutput) => void
  ): void;

  /**
   * @see {@link GetQualificationScoreCommand}
   */
  getQualificationScore(
    args: GetQualificationScoreCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetQualificationScoreCommandOutput>;
  getQualificationScore(
    args: GetQualificationScoreCommandInput,
    cb: (err: any, data?: GetQualificationScoreCommandOutput) => void
  ): void;
  getQualificationScore(
    args: GetQualificationScoreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetQualificationScoreCommandOutput) => void
  ): void;

  /**
   * @see {@link GetQualificationTypeCommand}
   */
  getQualificationType(
    args: GetQualificationTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetQualificationTypeCommandOutput>;
  getQualificationType(
    args: GetQualificationTypeCommandInput,
    cb: (err: any, data?: GetQualificationTypeCommandOutput) => void
  ): void;
  getQualificationType(
    args: GetQualificationTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetQualificationTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAssignmentsForHITCommand}
   */
  listAssignmentsForHIT(
    args: ListAssignmentsForHITCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAssignmentsForHITCommandOutput>;
  listAssignmentsForHIT(
    args: ListAssignmentsForHITCommandInput,
    cb: (err: any, data?: ListAssignmentsForHITCommandOutput) => void
  ): void;
  listAssignmentsForHIT(
    args: ListAssignmentsForHITCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAssignmentsForHITCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBonusPaymentsCommand}
   */
  listBonusPayments(): Promise<ListBonusPaymentsCommandOutput>;
  listBonusPayments(
    args: ListBonusPaymentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListBonusPaymentsCommandOutput>;
  listBonusPayments(
    args: ListBonusPaymentsCommandInput,
    cb: (err: any, data?: ListBonusPaymentsCommandOutput) => void
  ): void;
  listBonusPayments(
    args: ListBonusPaymentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBonusPaymentsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListHITsCommand}
   */
  listHITs(): Promise<ListHITsCommandOutput>;
  listHITs(
    args: ListHITsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListHITsCommandOutput>;
  listHITs(
    args: ListHITsCommandInput,
    cb: (err: any, data?: ListHITsCommandOutput) => void
  ): void;
  listHITs(
    args: ListHITsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListHITsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListHITsForQualificationTypeCommand}
   */
  listHITsForQualificationType(
    args: ListHITsForQualificationTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListHITsForQualificationTypeCommandOutput>;
  listHITsForQualificationType(
    args: ListHITsForQualificationTypeCommandInput,
    cb: (err: any, data?: ListHITsForQualificationTypeCommandOutput) => void
  ): void;
  listHITsForQualificationType(
    args: ListHITsForQualificationTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListHITsForQualificationTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link ListQualificationRequestsCommand}
   */
  listQualificationRequests(): Promise<ListQualificationRequestsCommandOutput>;
  listQualificationRequests(
    args: ListQualificationRequestsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListQualificationRequestsCommandOutput>;
  listQualificationRequests(
    args: ListQualificationRequestsCommandInput,
    cb: (err: any, data?: ListQualificationRequestsCommandOutput) => void
  ): void;
  listQualificationRequests(
    args: ListQualificationRequestsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListQualificationRequestsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListQualificationTypesCommand}
   */
  listQualificationTypes(
    args: ListQualificationTypesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListQualificationTypesCommandOutput>;
  listQualificationTypes(
    args: ListQualificationTypesCommandInput,
    cb: (err: any, data?: ListQualificationTypesCommandOutput) => void
  ): void;
  listQualificationTypes(
    args: ListQualificationTypesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListQualificationTypesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListReviewableHITsCommand}
   */
  listReviewableHITs(): Promise<ListReviewableHITsCommandOutput>;
  listReviewableHITs(
    args: ListReviewableHITsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListReviewableHITsCommandOutput>;
  listReviewableHITs(
    args: ListReviewableHITsCommandInput,
    cb: (err: any, data?: ListReviewableHITsCommandOutput) => void
  ): void;
  listReviewableHITs(
    args: ListReviewableHITsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListReviewableHITsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListReviewPolicyResultsForHITCommand}
   */
  listReviewPolicyResultsForHIT(
    args: ListReviewPolicyResultsForHITCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListReviewPolicyResultsForHITCommandOutput>;
  listReviewPolicyResultsForHIT(
    args: ListReviewPolicyResultsForHITCommandInput,
    cb: (err: any, data?: ListReviewPolicyResultsForHITCommandOutput) => void
  ): void;
  listReviewPolicyResultsForHIT(
    args: ListReviewPolicyResultsForHITCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListReviewPolicyResultsForHITCommandOutput) => void
  ): void;

  /**
   * @see {@link ListWorkerBlocksCommand}
   */
  listWorkerBlocks(): Promise<ListWorkerBlocksCommandOutput>;
  listWorkerBlocks(
    args: ListWorkerBlocksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListWorkerBlocksCommandOutput>;
  listWorkerBlocks(
    args: ListWorkerBlocksCommandInput,
    cb: (err: any, data?: ListWorkerBlocksCommandOutput) => void
  ): void;
  listWorkerBlocks(
    args: ListWorkerBlocksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWorkerBlocksCommandOutput) => void
  ): void;

  /**
   * @see {@link ListWorkersWithQualificationTypeCommand}
   */
  listWorkersWithQualificationType(
    args: ListWorkersWithQualificationTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListWorkersWithQualificationTypeCommandOutput>;
  listWorkersWithQualificationType(
    args: ListWorkersWithQualificationTypeCommandInput,
    cb: (err: any, data?: ListWorkersWithQualificationTypeCommandOutput) => void
  ): void;
  listWorkersWithQualificationType(
    args: ListWorkersWithQualificationTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWorkersWithQualificationTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link NotifyWorkersCommand}
   */
  notifyWorkers(
    args: NotifyWorkersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<NotifyWorkersCommandOutput>;
  notifyWorkers(
    args: NotifyWorkersCommandInput,
    cb: (err: any, data?: NotifyWorkersCommandOutput) => void
  ): void;
  notifyWorkers(
    args: NotifyWorkersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: NotifyWorkersCommandOutput) => void
  ): void;

  /**
   * @see {@link RejectAssignmentCommand}
   */
  rejectAssignment(
    args: RejectAssignmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RejectAssignmentCommandOutput>;
  rejectAssignment(
    args: RejectAssignmentCommandInput,
    cb: (err: any, data?: RejectAssignmentCommandOutput) => void
  ): void;
  rejectAssignment(
    args: RejectAssignmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RejectAssignmentCommandOutput) => void
  ): void;

  /**
   * @see {@link RejectQualificationRequestCommand}
   */
  rejectQualificationRequest(
    args: RejectQualificationRequestCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RejectQualificationRequestCommandOutput>;
  rejectQualificationRequest(
    args: RejectQualificationRequestCommandInput,
    cb: (err: any, data?: RejectQualificationRequestCommandOutput) => void
  ): void;
  rejectQualificationRequest(
    args: RejectQualificationRequestCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RejectQualificationRequestCommandOutput) => void
  ): void;

  /**
   * @see {@link SendBonusCommand}
   */
  sendBonus(
    args: SendBonusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SendBonusCommandOutput>;
  sendBonus(
    args: SendBonusCommandInput,
    cb: (err: any, data?: SendBonusCommandOutput) => void
  ): void;
  sendBonus(
    args: SendBonusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendBonusCommandOutput) => void
  ): void;

  /**
   * @see {@link SendTestEventNotificationCommand}
   */
  sendTestEventNotification(
    args: SendTestEventNotificationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SendTestEventNotificationCommandOutput>;
  sendTestEventNotification(
    args: SendTestEventNotificationCommandInput,
    cb: (err: any, data?: SendTestEventNotificationCommandOutput) => void
  ): void;
  sendTestEventNotification(
    args: SendTestEventNotificationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendTestEventNotificationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateExpirationForHITCommand}
   */
  updateExpirationForHIT(
    args: UpdateExpirationForHITCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateExpirationForHITCommandOutput>;
  updateExpirationForHIT(
    args: UpdateExpirationForHITCommandInput,
    cb: (err: any, data?: UpdateExpirationForHITCommandOutput) => void
  ): void;
  updateExpirationForHIT(
    args: UpdateExpirationForHITCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateExpirationForHITCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateHITReviewStatusCommand}
   */
  updateHITReviewStatus(
    args: UpdateHITReviewStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateHITReviewStatusCommandOutput>;
  updateHITReviewStatus(
    args: UpdateHITReviewStatusCommandInput,
    cb: (err: any, data?: UpdateHITReviewStatusCommandOutput) => void
  ): void;
  updateHITReviewStatus(
    args: UpdateHITReviewStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateHITReviewStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateHITTypeOfHITCommand}
   */
  updateHITTypeOfHIT(
    args: UpdateHITTypeOfHITCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateHITTypeOfHITCommandOutput>;
  updateHITTypeOfHIT(
    args: UpdateHITTypeOfHITCommandInput,
    cb: (err: any, data?: UpdateHITTypeOfHITCommandOutput) => void
  ): void;
  updateHITTypeOfHIT(
    args: UpdateHITTypeOfHITCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateHITTypeOfHITCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateNotificationSettingsCommand}
   */
  updateNotificationSettings(
    args: UpdateNotificationSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateNotificationSettingsCommandOutput>;
  updateNotificationSettings(
    args: UpdateNotificationSettingsCommandInput,
    cb: (err: any, data?: UpdateNotificationSettingsCommandOutput) => void
  ): void;
  updateNotificationSettings(
    args: UpdateNotificationSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateNotificationSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateQualificationTypeCommand}
   */
  updateQualificationType(
    args: UpdateQualificationTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateQualificationTypeCommandOutput>;
  updateQualificationType(
    args: UpdateQualificationTypeCommandInput,
    cb: (err: any, data?: UpdateQualificationTypeCommandOutput) => void
  ): void;
  updateQualificationType(
    args: UpdateQualificationTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateQualificationTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAssignmentsForHITCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAssignmentsForHITCommandOutput}.
   */
  paginateListAssignmentsForHIT(
    args: ListAssignmentsForHITCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAssignmentsForHITCommandOutput>;

  /**
   * @see {@link ListBonusPaymentsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListBonusPaymentsCommandOutput}.
   */
  paginateListBonusPayments(
    args?: ListBonusPaymentsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListBonusPaymentsCommandOutput>;

  /**
   * @see {@link ListHITsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListHITsCommandOutput}.
   */
  paginateListHITs(
    args?: ListHITsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListHITsCommandOutput>;

  /**
   * @see {@link ListHITsForQualificationTypeCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListHITsForQualificationTypeCommandOutput}.
   */
  paginateListHITsForQualificationType(
    args: ListHITsForQualificationTypeCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListHITsForQualificationTypeCommandOutput>;

  /**
   * @see {@link ListQualificationRequestsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListQualificationRequestsCommandOutput}.
   */
  paginateListQualificationRequests(
    args?: ListQualificationRequestsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListQualificationRequestsCommandOutput>;

  /**
   * @see {@link ListQualificationTypesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListQualificationTypesCommandOutput}.
   */
  paginateListQualificationTypes(
    args: ListQualificationTypesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListQualificationTypesCommandOutput>;

  /**
   * @see {@link ListReviewableHITsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListReviewableHITsCommandOutput}.
   */
  paginateListReviewableHITs(
    args?: ListReviewableHITsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListReviewableHITsCommandOutput>;

  /**
   * @see {@link ListReviewPolicyResultsForHITCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListReviewPolicyResultsForHITCommandOutput}.
   */
  paginateListReviewPolicyResultsForHIT(
    args: ListReviewPolicyResultsForHITCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListReviewPolicyResultsForHITCommandOutput>;

  /**
   * @see {@link ListWorkerBlocksCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListWorkerBlocksCommandOutput}.
   */
  paginateListWorkerBlocks(
    args?: ListWorkerBlocksCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListWorkerBlocksCommandOutput>;

  /**
   * @see {@link ListWorkersWithQualificationTypeCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListWorkersWithQualificationTypeCommandOutput}.
   */
  paginateListWorkersWithQualificationType(
    args: ListWorkersWithQualificationTypeCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListWorkersWithQualificationTypeCommandOutput>;
}

/**
 * <fullname>Amazon Mechanical Turk API Reference</fullname>
 * @public
 */
export class MTurk extends MTurkClient implements MTurk {}
createAggregatedClient(commands, MTurk, { paginators });
