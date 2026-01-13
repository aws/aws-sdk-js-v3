// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  BatchGetMemberAccountDetailsCommand,
  BatchGetMemberAccountDetailsCommandInput,
  BatchGetMemberAccountDetailsCommandOutput,
} from "./commands/BatchGetMemberAccountDetailsCommand";
import {
  CancelMembershipCommand,
  CancelMembershipCommandInput,
  CancelMembershipCommandOutput,
} from "./commands/CancelMembershipCommand";
import { CloseCaseCommand, CloseCaseCommandInput, CloseCaseCommandOutput } from "./commands/CloseCaseCommand";
import { CreateCaseCommand, CreateCaseCommandInput, CreateCaseCommandOutput } from "./commands/CreateCaseCommand";
import {
  CreateCaseCommentCommand,
  CreateCaseCommentCommandInput,
  CreateCaseCommentCommandOutput,
} from "./commands/CreateCaseCommentCommand";
import {
  CreateMembershipCommand,
  CreateMembershipCommandInput,
  CreateMembershipCommandOutput,
} from "./commands/CreateMembershipCommand";
import {
  GetCaseAttachmentDownloadUrlCommand,
  GetCaseAttachmentDownloadUrlCommandInput,
  GetCaseAttachmentDownloadUrlCommandOutput,
} from "./commands/GetCaseAttachmentDownloadUrlCommand";
import {
  GetCaseAttachmentUploadUrlCommand,
  GetCaseAttachmentUploadUrlCommandInput,
  GetCaseAttachmentUploadUrlCommandOutput,
} from "./commands/GetCaseAttachmentUploadUrlCommand";
import { GetCaseCommand, GetCaseCommandInput, GetCaseCommandOutput } from "./commands/GetCaseCommand";
import {
  GetMembershipCommand,
  GetMembershipCommandInput,
  GetMembershipCommandOutput,
} from "./commands/GetMembershipCommand";
import {
  ListCaseEditsCommand,
  ListCaseEditsCommandInput,
  ListCaseEditsCommandOutput,
} from "./commands/ListCaseEditsCommand";
import { ListCasesCommand, ListCasesCommandInput, ListCasesCommandOutput } from "./commands/ListCasesCommand";
import {
  ListCommentsCommand,
  ListCommentsCommandInput,
  ListCommentsCommandOutput,
} from "./commands/ListCommentsCommand";
import {
  ListInvestigationsCommand,
  ListInvestigationsCommandInput,
  ListInvestigationsCommandOutput,
} from "./commands/ListInvestigationsCommand";
import {
  ListMembershipsCommand,
  ListMembershipsCommandInput,
  ListMembershipsCommandOutput,
} from "./commands/ListMembershipsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  SendFeedbackCommand,
  SendFeedbackCommandInput,
  SendFeedbackCommandOutput,
} from "./commands/SendFeedbackCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import { UpdateCaseCommand, UpdateCaseCommandInput, UpdateCaseCommandOutput } from "./commands/UpdateCaseCommand";
import {
  UpdateCaseCommentCommand,
  UpdateCaseCommentCommandInput,
  UpdateCaseCommentCommandOutput,
} from "./commands/UpdateCaseCommentCommand";
import {
  UpdateCaseStatusCommand,
  UpdateCaseStatusCommandInput,
  UpdateCaseStatusCommandOutput,
} from "./commands/UpdateCaseStatusCommand";
import {
  UpdateMembershipCommand,
  UpdateMembershipCommandInput,
  UpdateMembershipCommandOutput,
} from "./commands/UpdateMembershipCommand";
import {
  UpdateResolverTypeCommand,
  UpdateResolverTypeCommandInput,
  UpdateResolverTypeCommandOutput,
} from "./commands/UpdateResolverTypeCommand";
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
}

/**
 * <p>This guide documents the action and response elements for use of the service.</p>
 * @public
 */
export class SecurityIR extends SecurityIRClient implements SecurityIR {}
createAggregatedClient(commands, SecurityIR);
