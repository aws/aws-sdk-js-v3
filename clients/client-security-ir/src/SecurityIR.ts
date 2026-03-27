// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

import {
  type BatchGetMemberAccountDetailsCommandInput,
  type BatchGetMemberAccountDetailsCommandOutput,
  BatchGetMemberAccountDetailsCommand,
} from "./commands/BatchGetMemberAccountDetailsCommand";
import {
  type CancelMembershipCommandInput,
  type CancelMembershipCommandOutput,
  CancelMembershipCommand,
} from "./commands/CancelMembershipCommand";
import { type CloseCaseCommandInput, type CloseCaseCommandOutput, CloseCaseCommand } from "./commands/CloseCaseCommand";
import {
  type CreateCaseCommandInput,
  type CreateCaseCommandOutput,
  CreateCaseCommand,
} from "./commands/CreateCaseCommand";
import {
  type CreateCaseCommentCommandInput,
  type CreateCaseCommentCommandOutput,
  CreateCaseCommentCommand,
} from "./commands/CreateCaseCommentCommand";
import {
  type CreateMembershipCommandInput,
  type CreateMembershipCommandOutput,
  CreateMembershipCommand,
} from "./commands/CreateMembershipCommand";
import {
  type GetCaseAttachmentDownloadUrlCommandInput,
  type GetCaseAttachmentDownloadUrlCommandOutput,
  GetCaseAttachmentDownloadUrlCommand,
} from "./commands/GetCaseAttachmentDownloadUrlCommand";
import {
  type GetCaseAttachmentUploadUrlCommandInput,
  type GetCaseAttachmentUploadUrlCommandOutput,
  GetCaseAttachmentUploadUrlCommand,
} from "./commands/GetCaseAttachmentUploadUrlCommand";
import { type GetCaseCommandInput, type GetCaseCommandOutput, GetCaseCommand } from "./commands/GetCaseCommand";
import {
  type GetMembershipCommandInput,
  type GetMembershipCommandOutput,
  GetMembershipCommand,
} from "./commands/GetMembershipCommand";
import {
  type ListCaseEditsCommandInput,
  type ListCaseEditsCommandOutput,
  ListCaseEditsCommand,
} from "./commands/ListCaseEditsCommand";
import { type ListCasesCommandInput, type ListCasesCommandOutput, ListCasesCommand } from "./commands/ListCasesCommand";
import {
  type ListCommentsCommandInput,
  type ListCommentsCommandOutput,
  ListCommentsCommand,
} from "./commands/ListCommentsCommand";
import {
  type ListInvestigationsCommandInput,
  type ListInvestigationsCommandOutput,
  ListInvestigationsCommand,
} from "./commands/ListInvestigationsCommand";
import {
  type ListMembershipsCommandInput,
  type ListMembershipsCommandOutput,
  ListMembershipsCommand,
} from "./commands/ListMembershipsCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type SendFeedbackCommandInput,
  type SendFeedbackCommandOutput,
  SendFeedbackCommand,
} from "./commands/SendFeedbackCommand";
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
  type UpdateCaseCommandInput,
  type UpdateCaseCommandOutput,
  UpdateCaseCommand,
} from "./commands/UpdateCaseCommand";
import {
  type UpdateCaseCommentCommandInput,
  type UpdateCaseCommentCommandOutput,
  UpdateCaseCommentCommand,
} from "./commands/UpdateCaseCommentCommand";
import {
  type UpdateCaseStatusCommandInput,
  type UpdateCaseStatusCommandOutput,
  UpdateCaseStatusCommand,
} from "./commands/UpdateCaseStatusCommand";
import {
  type UpdateMembershipCommandInput,
  type UpdateMembershipCommandOutput,
  UpdateMembershipCommand,
} from "./commands/UpdateMembershipCommand";
import {
  type UpdateResolverTypeCommandInput,
  type UpdateResolverTypeCommandOutput,
  UpdateResolverTypeCommand,
} from "./commands/UpdateResolverTypeCommand";
import { paginateListCaseEdits } from "./pagination/ListCaseEditsPaginator";
import { paginateListCases } from "./pagination/ListCasesPaginator";
import { paginateListComments } from "./pagination/ListCommentsPaginator";
import { paginateListInvestigations } from "./pagination/ListInvestigationsPaginator";
import { paginateListMemberships } from "./pagination/ListMembershipsPaginator";
import { SecurityIRClient } from "./SecurityIRClient";

const commands = {
  BatchGetMemberAccountDetailsCommand,
  CancelMembershipCommand,
  CloseCaseCommand,
  CreateCaseCommand,
  CreateCaseCommentCommand,
  CreateMembershipCommand,
  GetCaseCommand,
  GetCaseAttachmentDownloadUrlCommand,
  GetCaseAttachmentUploadUrlCommand,
  GetMembershipCommand,
  ListCaseEditsCommand,
  ListCasesCommand,
  ListCommentsCommand,
  ListInvestigationsCommand,
  ListMembershipsCommand,
  ListTagsForResourceCommand,
  SendFeedbackCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateCaseCommand,
  UpdateCaseCommentCommand,
  UpdateCaseStatusCommand,
  UpdateMembershipCommand,
  UpdateResolverTypeCommand,
};
const paginators = {
  paginateListCaseEdits,
  paginateListCases,
  paginateListComments,
  paginateListInvestigations,
  paginateListMemberships,
};

export interface SecurityIR {
  /**
   * @see {@link BatchGetMemberAccountDetailsCommand}
   */
  batchGetMemberAccountDetails(
    args: BatchGetMemberAccountDetailsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetMemberAccountDetailsCommandOutput>;
  batchGetMemberAccountDetails(
    args: BatchGetMemberAccountDetailsCommandInput,
    cb: (err: any, data?: BatchGetMemberAccountDetailsCommandOutput) => void
  ): void;
  batchGetMemberAccountDetails(
    args: BatchGetMemberAccountDetailsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetMemberAccountDetailsCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelMembershipCommand}
   */
  cancelMembership(
    args: CancelMembershipCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelMembershipCommandOutput>;
  cancelMembership(
    args: CancelMembershipCommandInput,
    cb: (err: any, data?: CancelMembershipCommandOutput) => void
  ): void;
  cancelMembership(
    args: CancelMembershipCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelMembershipCommandOutput) => void
  ): void;

  /**
   * @see {@link CloseCaseCommand}
   */
  closeCase(
    args: CloseCaseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CloseCaseCommandOutput>;
  closeCase(
    args: CloseCaseCommandInput,
    cb: (err: any, data?: CloseCaseCommandOutput) => void
  ): void;
  closeCase(
    args: CloseCaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CloseCaseCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateCaseCommand}
   */
  createCase(
    args: CreateCaseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCaseCommandOutput>;
  createCase(
    args: CreateCaseCommandInput,
    cb: (err: any, data?: CreateCaseCommandOutput) => void
  ): void;
  createCase(
    args: CreateCaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCaseCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateCaseCommentCommand}
   */
  createCaseComment(
    args: CreateCaseCommentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCaseCommentCommandOutput>;
  createCaseComment(
    args: CreateCaseCommentCommandInput,
    cb: (err: any, data?: CreateCaseCommentCommandOutput) => void
  ): void;
  createCaseComment(
    args: CreateCaseCommentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCaseCommentCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateMembershipCommand}
   */
  createMembership(
    args: CreateMembershipCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateMembershipCommandOutput>;
  createMembership(
    args: CreateMembershipCommandInput,
    cb: (err: any, data?: CreateMembershipCommandOutput) => void
  ): void;
  createMembership(
    args: CreateMembershipCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMembershipCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCaseCommand}
   */
  getCase(
    args: GetCaseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCaseCommandOutput>;
  getCase(
    args: GetCaseCommandInput,
    cb: (err: any, data?: GetCaseCommandOutput) => void
  ): void;
  getCase(
    args: GetCaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCaseCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCaseAttachmentDownloadUrlCommand}
   */
  getCaseAttachmentDownloadUrl(
    args: GetCaseAttachmentDownloadUrlCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCaseAttachmentDownloadUrlCommandOutput>;
  getCaseAttachmentDownloadUrl(
    args: GetCaseAttachmentDownloadUrlCommandInput,
    cb: (err: any, data?: GetCaseAttachmentDownloadUrlCommandOutput) => void
  ): void;
  getCaseAttachmentDownloadUrl(
    args: GetCaseAttachmentDownloadUrlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCaseAttachmentDownloadUrlCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCaseAttachmentUploadUrlCommand}
   */
  getCaseAttachmentUploadUrl(
    args: GetCaseAttachmentUploadUrlCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCaseAttachmentUploadUrlCommandOutput>;
  getCaseAttachmentUploadUrl(
    args: GetCaseAttachmentUploadUrlCommandInput,
    cb: (err: any, data?: GetCaseAttachmentUploadUrlCommandOutput) => void
  ): void;
  getCaseAttachmentUploadUrl(
    args: GetCaseAttachmentUploadUrlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCaseAttachmentUploadUrlCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMembershipCommand}
   */
  getMembership(
    args: GetMembershipCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMembershipCommandOutput>;
  getMembership(
    args: GetMembershipCommandInput,
    cb: (err: any, data?: GetMembershipCommandOutput) => void
  ): void;
  getMembership(
    args: GetMembershipCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMembershipCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCaseEditsCommand}
   */
  listCaseEdits(
    args: ListCaseEditsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCaseEditsCommandOutput>;
  listCaseEdits(
    args: ListCaseEditsCommandInput,
    cb: (err: any, data?: ListCaseEditsCommandOutput) => void
  ): void;
  listCaseEdits(
    args: ListCaseEditsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCaseEditsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCasesCommand}
   */
  listCases(): Promise<ListCasesCommandOutput>;
  listCases(
    args: ListCasesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCasesCommandOutput>;
  listCases(
    args: ListCasesCommandInput,
    cb: (err: any, data?: ListCasesCommandOutput) => void
  ): void;
  listCases(
    args: ListCasesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCasesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCommentsCommand}
   */
  listComments(
    args: ListCommentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCommentsCommandOutput>;
  listComments(
    args: ListCommentsCommandInput,
    cb: (err: any, data?: ListCommentsCommandOutput) => void
  ): void;
  listComments(
    args: ListCommentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCommentsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListInvestigationsCommand}
   */
  listInvestigations(
    args: ListInvestigationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListInvestigationsCommandOutput>;
  listInvestigations(
    args: ListInvestigationsCommandInput,
    cb: (err: any, data?: ListInvestigationsCommandOutput) => void
  ): void;
  listInvestigations(
    args: ListInvestigationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListInvestigationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMembershipsCommand}
   */
  listMemberships(): Promise<ListMembershipsCommandOutput>;
  listMemberships(
    args: ListMembershipsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMembershipsCommandOutput>;
  listMemberships(
    args: ListMembershipsCommandInput,
    cb: (err: any, data?: ListMembershipsCommandOutput) => void
  ): void;
  listMemberships(
    args: ListMembershipsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMembershipsCommandOutput) => void
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
   * @see {@link SendFeedbackCommand}
   */
  sendFeedback(
    args: SendFeedbackCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SendFeedbackCommandOutput>;
  sendFeedback(
    args: SendFeedbackCommandInput,
    cb: (err: any, data?: SendFeedbackCommandOutput) => void
  ): void;
  sendFeedback(
    args: SendFeedbackCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendFeedbackCommandOutput) => void
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
   * @see {@link UpdateCaseCommand}
   */
  updateCase(
    args: UpdateCaseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateCaseCommandOutput>;
  updateCase(
    args: UpdateCaseCommandInput,
    cb: (err: any, data?: UpdateCaseCommandOutput) => void
  ): void;
  updateCase(
    args: UpdateCaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateCaseCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateCaseCommentCommand}
   */
  updateCaseComment(
    args: UpdateCaseCommentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateCaseCommentCommandOutput>;
  updateCaseComment(
    args: UpdateCaseCommentCommandInput,
    cb: (err: any, data?: UpdateCaseCommentCommandOutput) => void
  ): void;
  updateCaseComment(
    args: UpdateCaseCommentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateCaseCommentCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateCaseStatusCommand}
   */
  updateCaseStatus(
    args: UpdateCaseStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateCaseStatusCommandOutput>;
  updateCaseStatus(
    args: UpdateCaseStatusCommandInput,
    cb: (err: any, data?: UpdateCaseStatusCommandOutput) => void
  ): void;
  updateCaseStatus(
    args: UpdateCaseStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateCaseStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateMembershipCommand}
   */
  updateMembership(
    args: UpdateMembershipCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateMembershipCommandOutput>;
  updateMembership(
    args: UpdateMembershipCommandInput,
    cb: (err: any, data?: UpdateMembershipCommandOutput) => void
  ): void;
  updateMembership(
    args: UpdateMembershipCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateMembershipCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateResolverTypeCommand}
   */
  updateResolverType(
    args: UpdateResolverTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateResolverTypeCommandOutput>;
  updateResolverType(
    args: UpdateResolverTypeCommandInput,
    cb: (err: any, data?: UpdateResolverTypeCommandOutput) => void
  ): void;
  updateResolverType(
    args: UpdateResolverTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateResolverTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCaseEditsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListCaseEditsCommandOutput}.
   */
  paginateListCaseEdits(
    args: ListCaseEditsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListCaseEditsCommandOutput>;

  /**
   * @see {@link ListCasesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListCasesCommandOutput}.
   */
  paginateListCases(
    args?: ListCasesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListCasesCommandOutput>;

  /**
   * @see {@link ListCommentsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListCommentsCommandOutput}.
   */
  paginateListComments(
    args: ListCommentsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListCommentsCommandOutput>;

  /**
   * @see {@link ListInvestigationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListInvestigationsCommandOutput}.
   */
  paginateListInvestigations(
    args: ListInvestigationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListInvestigationsCommandOutput>;

  /**
   * @see {@link ListMembershipsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListMembershipsCommandOutput}.
   */
  paginateListMemberships(
    args?: ListMembershipsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListMembershipsCommandOutput>;
}

/**
 * <p>This guide documents the action and response elements for use of the service.</p>
 * @public
 */
export class SecurityIR extends SecurityIRClient implements SecurityIR {}
createAggregatedClient(commands, SecurityIR, { paginators });
