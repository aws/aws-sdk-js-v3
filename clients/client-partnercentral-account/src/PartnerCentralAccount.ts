// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
} from "@smithy/types";

import {
  type AcceptConnectionInvitationCommandInput,
  type AcceptConnectionInvitationCommandOutput,
  AcceptConnectionInvitationCommand,
} from "./commands/AcceptConnectionInvitationCommand";
import {
  type AssociateAwsTrainingCertificationEmailDomainCommandInput,
  type AssociateAwsTrainingCertificationEmailDomainCommandOutput,
  AssociateAwsTrainingCertificationEmailDomainCommand,
} from "./commands/AssociateAwsTrainingCertificationEmailDomainCommand";
import {
  type CancelConnectionCommandInput,
  type CancelConnectionCommandOutput,
  CancelConnectionCommand,
} from "./commands/CancelConnectionCommand";
import {
  type CancelConnectionInvitationCommandInput,
  type CancelConnectionInvitationCommandOutput,
  CancelConnectionInvitationCommand,
} from "./commands/CancelConnectionInvitationCommand";
import {
  type CancelProfileUpdateTaskCommandInput,
  type CancelProfileUpdateTaskCommandOutput,
  CancelProfileUpdateTaskCommand,
} from "./commands/CancelProfileUpdateTaskCommand";
import {
  type CreateConnectionInvitationCommandInput,
  type CreateConnectionInvitationCommandOutput,
  CreateConnectionInvitationCommand,
} from "./commands/CreateConnectionInvitationCommand";
import {
  type CreatePartnerCommandInput,
  type CreatePartnerCommandOutput,
  CreatePartnerCommand,
} from "./commands/CreatePartnerCommand";
import {
  type DisassociateAwsTrainingCertificationEmailDomainCommandInput,
  type DisassociateAwsTrainingCertificationEmailDomainCommandOutput,
  DisassociateAwsTrainingCertificationEmailDomainCommand,
} from "./commands/DisassociateAwsTrainingCertificationEmailDomainCommand";
import {
  type GetAllianceLeadContactCommandInput,
  type GetAllianceLeadContactCommandOutput,
  GetAllianceLeadContactCommand,
} from "./commands/GetAllianceLeadContactCommand";
import {
  type GetConnectionCommandInput,
  type GetConnectionCommandOutput,
  GetConnectionCommand,
} from "./commands/GetConnectionCommand";
import {
  type GetConnectionInvitationCommandInput,
  type GetConnectionInvitationCommandOutput,
  GetConnectionInvitationCommand,
} from "./commands/GetConnectionInvitationCommand";
import {
  type GetConnectionPreferencesCommandInput,
  type GetConnectionPreferencesCommandOutput,
  GetConnectionPreferencesCommand,
} from "./commands/GetConnectionPreferencesCommand";
import {
  type GetPartnerCommandInput,
  type GetPartnerCommandOutput,
  GetPartnerCommand,
} from "./commands/GetPartnerCommand";
import {
  type GetProfileUpdateTaskCommandInput,
  type GetProfileUpdateTaskCommandOutput,
  GetProfileUpdateTaskCommand,
} from "./commands/GetProfileUpdateTaskCommand";
import {
  type GetProfileVisibilityCommandInput,
  type GetProfileVisibilityCommandOutput,
  GetProfileVisibilityCommand,
} from "./commands/GetProfileVisibilityCommand";
import {
  type GetQualificationsAssociationDetailsCommandInput,
  type GetQualificationsAssociationDetailsCommandOutput,
  GetQualificationsAssociationDetailsCommand,
} from "./commands/GetQualificationsAssociationDetailsCommand";
import {
  type GetQualificationsAssociationTaskCommandInput,
  type GetQualificationsAssociationTaskCommandOutput,
  GetQualificationsAssociationTaskCommand,
} from "./commands/GetQualificationsAssociationTaskCommand";
import {
  type GetQualificationsDisassociationTaskCommandInput,
  type GetQualificationsDisassociationTaskCommandOutput,
  GetQualificationsDisassociationTaskCommand,
} from "./commands/GetQualificationsDisassociationTaskCommand";
import {
  type GetVerificationCommandInput,
  type GetVerificationCommandOutput,
  GetVerificationCommand,
} from "./commands/GetVerificationCommand";
import {
  type ListConnectionInvitationsCommandInput,
  type ListConnectionInvitationsCommandOutput,
  ListConnectionInvitationsCommand,
} from "./commands/ListConnectionInvitationsCommand";
import {
  type ListConnectionsCommandInput,
  type ListConnectionsCommandOutput,
  ListConnectionsCommand,
} from "./commands/ListConnectionsCommand";
import {
  type ListPartnersCommandInput,
  type ListPartnersCommandOutput,
  ListPartnersCommand,
} from "./commands/ListPartnersCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type PutAllianceLeadContactCommandInput,
  type PutAllianceLeadContactCommandOutput,
  PutAllianceLeadContactCommand,
} from "./commands/PutAllianceLeadContactCommand";
import {
  type PutProfileVisibilityCommandInput,
  type PutProfileVisibilityCommandOutput,
  PutProfileVisibilityCommand,
} from "./commands/PutProfileVisibilityCommand";
import {
  type RejectConnectionInvitationCommandInput,
  type RejectConnectionInvitationCommandOutput,
  RejectConnectionInvitationCommand,
} from "./commands/RejectConnectionInvitationCommand";
import {
  type SendEmailVerificationCodeCommandInput,
  type SendEmailVerificationCodeCommandOutput,
  SendEmailVerificationCodeCommand,
} from "./commands/SendEmailVerificationCodeCommand";
import {
  type StartProfileUpdateTaskCommandInput,
  type StartProfileUpdateTaskCommandOutput,
  StartProfileUpdateTaskCommand,
} from "./commands/StartProfileUpdateTaskCommand";
import {
  type StartQualificationsAssociationTaskCommandInput,
  type StartQualificationsAssociationTaskCommandOutput,
  StartQualificationsAssociationTaskCommand,
} from "./commands/StartQualificationsAssociationTaskCommand";
import {
  type StartQualificationsDisassociationTaskCommandInput,
  type StartQualificationsDisassociationTaskCommandOutput,
  StartQualificationsDisassociationTaskCommand,
} from "./commands/StartQualificationsDisassociationTaskCommand";
import {
  type StartVerificationCommandInput,
  type StartVerificationCommandOutput,
  StartVerificationCommand,
} from "./commands/StartVerificationCommand";
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
  type UpdateConnectionPreferencesCommandInput,
  type UpdateConnectionPreferencesCommandOutput,
  UpdateConnectionPreferencesCommand,
} from "./commands/UpdateConnectionPreferencesCommand";
import { paginateListConnectionInvitations } from "./pagination/ListConnectionInvitationsPaginator";
import { paginateListConnections } from "./pagination/ListConnectionsPaginator";
import { paginateListPartners } from "./pagination/ListPartnersPaginator";
import { PartnerCentralAccountClient } from "./PartnerCentralAccountClient";

const commands = {
  AcceptConnectionInvitationCommand,
  AssociateAwsTrainingCertificationEmailDomainCommand,
  CancelConnectionCommand,
  CancelConnectionInvitationCommand,
  CancelProfileUpdateTaskCommand,
  CreateConnectionInvitationCommand,
  CreatePartnerCommand,
  DisassociateAwsTrainingCertificationEmailDomainCommand,
  GetAllianceLeadContactCommand,
  GetConnectionCommand,
  GetConnectionInvitationCommand,
  GetConnectionPreferencesCommand,
  GetPartnerCommand,
  GetProfileUpdateTaskCommand,
  GetProfileVisibilityCommand,
  GetQualificationsAssociationDetailsCommand,
  GetQualificationsAssociationTaskCommand,
  GetQualificationsDisassociationTaskCommand,
  GetVerificationCommand,
  ListConnectionInvitationsCommand,
  ListConnectionsCommand,
  ListPartnersCommand,
  ListTagsForResourceCommand,
  PutAllianceLeadContactCommand,
  PutProfileVisibilityCommand,
  RejectConnectionInvitationCommand,
  SendEmailVerificationCodeCommand,
  StartProfileUpdateTaskCommand,
  StartQualificationsAssociationTaskCommand,
  StartQualificationsDisassociationTaskCommand,
  StartVerificationCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateConnectionPreferencesCommand,
};
const paginators = {
  paginateListConnectionInvitations,
  paginateListConnections,
  paginateListPartners,
};

/**
 * @public
 */
export interface PartnerCentralAccountRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface PartnerCentralAccount {
  /**
   * @see {@link AcceptConnectionInvitationCommand}
   */
  acceptConnectionInvitation(
    args: AcceptConnectionInvitationCommandInput,
    options?: PartnerCentralAccountRequestOptions
  ): Promise<AcceptConnectionInvitationCommandOutput>;
  acceptConnectionInvitation(
    args: AcceptConnectionInvitationCommandInput,
    cb: (err: any, data?: AcceptConnectionInvitationCommandOutput) => void
  ): void;
  acceptConnectionInvitation(
    args: AcceptConnectionInvitationCommandInput,
    options: PartnerCentralAccountRequestOptions,
    cb: (err: any, data?: AcceptConnectionInvitationCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateAwsTrainingCertificationEmailDomainCommand}
   */
  associateAwsTrainingCertificationEmailDomain(
    args: AssociateAwsTrainingCertificationEmailDomainCommandInput,
    options?: PartnerCentralAccountRequestOptions
  ): Promise<AssociateAwsTrainingCertificationEmailDomainCommandOutput>;
  associateAwsTrainingCertificationEmailDomain(
    args: AssociateAwsTrainingCertificationEmailDomainCommandInput,
    cb: (err: any, data?: AssociateAwsTrainingCertificationEmailDomainCommandOutput) => void
  ): void;
  associateAwsTrainingCertificationEmailDomain(
    args: AssociateAwsTrainingCertificationEmailDomainCommandInput,
    options: PartnerCentralAccountRequestOptions,
    cb: (err: any, data?: AssociateAwsTrainingCertificationEmailDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelConnectionCommand}
   */
  cancelConnection(
    args: CancelConnectionCommandInput,
    options?: PartnerCentralAccountRequestOptions
  ): Promise<CancelConnectionCommandOutput>;
  cancelConnection(
    args: CancelConnectionCommandInput,
    cb: (err: any, data?: CancelConnectionCommandOutput) => void
  ): void;
  cancelConnection(
    args: CancelConnectionCommandInput,
    options: PartnerCentralAccountRequestOptions,
    cb: (err: any, data?: CancelConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelConnectionInvitationCommand}
   */
  cancelConnectionInvitation(
    args: CancelConnectionInvitationCommandInput,
    options?: PartnerCentralAccountRequestOptions
  ): Promise<CancelConnectionInvitationCommandOutput>;
  cancelConnectionInvitation(
    args: CancelConnectionInvitationCommandInput,
    cb: (err: any, data?: CancelConnectionInvitationCommandOutput) => void
  ): void;
  cancelConnectionInvitation(
    args: CancelConnectionInvitationCommandInput,
    options: PartnerCentralAccountRequestOptions,
    cb: (err: any, data?: CancelConnectionInvitationCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelProfileUpdateTaskCommand}
   */
  cancelProfileUpdateTask(
    args: CancelProfileUpdateTaskCommandInput,
    options?: PartnerCentralAccountRequestOptions
  ): Promise<CancelProfileUpdateTaskCommandOutput>;
  cancelProfileUpdateTask(
    args: CancelProfileUpdateTaskCommandInput,
    cb: (err: any, data?: CancelProfileUpdateTaskCommandOutput) => void
  ): void;
  cancelProfileUpdateTask(
    args: CancelProfileUpdateTaskCommandInput,
    options: PartnerCentralAccountRequestOptions,
    cb: (err: any, data?: CancelProfileUpdateTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateConnectionInvitationCommand}
   */
  createConnectionInvitation(
    args: CreateConnectionInvitationCommandInput,
    options?: PartnerCentralAccountRequestOptions
  ): Promise<CreateConnectionInvitationCommandOutput>;
  createConnectionInvitation(
    args: CreateConnectionInvitationCommandInput,
    cb: (err: any, data?: CreateConnectionInvitationCommandOutput) => void
  ): void;
  createConnectionInvitation(
    args: CreateConnectionInvitationCommandInput,
    options: PartnerCentralAccountRequestOptions,
    cb: (err: any, data?: CreateConnectionInvitationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePartnerCommand}
   */
  createPartner(
    args: CreatePartnerCommandInput,
    options?: PartnerCentralAccountRequestOptions
  ): Promise<CreatePartnerCommandOutput>;
  createPartner(
    args: CreatePartnerCommandInput,
    cb: (err: any, data?: CreatePartnerCommandOutput) => void
  ): void;
  createPartner(
    args: CreatePartnerCommandInput,
    options: PartnerCentralAccountRequestOptions,
    cb: (err: any, data?: CreatePartnerCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateAwsTrainingCertificationEmailDomainCommand}
   */
  disassociateAwsTrainingCertificationEmailDomain(
    args: DisassociateAwsTrainingCertificationEmailDomainCommandInput,
    options?: PartnerCentralAccountRequestOptions
  ): Promise<DisassociateAwsTrainingCertificationEmailDomainCommandOutput>;
  disassociateAwsTrainingCertificationEmailDomain(
    args: DisassociateAwsTrainingCertificationEmailDomainCommandInput,
    cb: (err: any, data?: DisassociateAwsTrainingCertificationEmailDomainCommandOutput) => void
  ): void;
  disassociateAwsTrainingCertificationEmailDomain(
    args: DisassociateAwsTrainingCertificationEmailDomainCommandInput,
    options: PartnerCentralAccountRequestOptions,
    cb: (err: any, data?: DisassociateAwsTrainingCertificationEmailDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAllianceLeadContactCommand}
   */
  getAllianceLeadContact(
    args: GetAllianceLeadContactCommandInput,
    options?: PartnerCentralAccountRequestOptions
  ): Promise<GetAllianceLeadContactCommandOutput>;
  getAllianceLeadContact(
    args: GetAllianceLeadContactCommandInput,
    cb: (err: any, data?: GetAllianceLeadContactCommandOutput) => void
  ): void;
  getAllianceLeadContact(
    args: GetAllianceLeadContactCommandInput,
    options: PartnerCentralAccountRequestOptions,
    cb: (err: any, data?: GetAllianceLeadContactCommandOutput) => void
  ): void;

  /**
   * @see {@link GetConnectionCommand}
   */
  getConnection(
    args: GetConnectionCommandInput,
    options?: PartnerCentralAccountRequestOptions
  ): Promise<GetConnectionCommandOutput>;
  getConnection(
    args: GetConnectionCommandInput,
    cb: (err: any, data?: GetConnectionCommandOutput) => void
  ): void;
  getConnection(
    args: GetConnectionCommandInput,
    options: PartnerCentralAccountRequestOptions,
    cb: (err: any, data?: GetConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetConnectionInvitationCommand}
   */
  getConnectionInvitation(
    args: GetConnectionInvitationCommandInput,
    options?: PartnerCentralAccountRequestOptions
  ): Promise<GetConnectionInvitationCommandOutput>;
  getConnectionInvitation(
    args: GetConnectionInvitationCommandInput,
    cb: (err: any, data?: GetConnectionInvitationCommandOutput) => void
  ): void;
  getConnectionInvitation(
    args: GetConnectionInvitationCommandInput,
    options: PartnerCentralAccountRequestOptions,
    cb: (err: any, data?: GetConnectionInvitationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetConnectionPreferencesCommand}
   */
  getConnectionPreferences(
    args: GetConnectionPreferencesCommandInput,
    options?: PartnerCentralAccountRequestOptions
  ): Promise<GetConnectionPreferencesCommandOutput>;
  getConnectionPreferences(
    args: GetConnectionPreferencesCommandInput,
    cb: (err: any, data?: GetConnectionPreferencesCommandOutput) => void
  ): void;
  getConnectionPreferences(
    args: GetConnectionPreferencesCommandInput,
    options: PartnerCentralAccountRequestOptions,
    cb: (err: any, data?: GetConnectionPreferencesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPartnerCommand}
   */
  getPartner(
    args: GetPartnerCommandInput,
    options?: PartnerCentralAccountRequestOptions
  ): Promise<GetPartnerCommandOutput>;
  getPartner(
    args: GetPartnerCommandInput,
    cb: (err: any, data?: GetPartnerCommandOutput) => void
  ): void;
  getPartner(
    args: GetPartnerCommandInput,
    options: PartnerCentralAccountRequestOptions,
    cb: (err: any, data?: GetPartnerCommandOutput) => void
  ): void;

  /**
   * @see {@link GetProfileUpdateTaskCommand}
   */
  getProfileUpdateTask(
    args: GetProfileUpdateTaskCommandInput,
    options?: PartnerCentralAccountRequestOptions
  ): Promise<GetProfileUpdateTaskCommandOutput>;
  getProfileUpdateTask(
    args: GetProfileUpdateTaskCommandInput,
    cb: (err: any, data?: GetProfileUpdateTaskCommandOutput) => void
  ): void;
  getProfileUpdateTask(
    args: GetProfileUpdateTaskCommandInput,
    options: PartnerCentralAccountRequestOptions,
    cb: (err: any, data?: GetProfileUpdateTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link GetProfileVisibilityCommand}
   */
  getProfileVisibility(
    args: GetProfileVisibilityCommandInput,
    options?: PartnerCentralAccountRequestOptions
  ): Promise<GetProfileVisibilityCommandOutput>;
  getProfileVisibility(
    args: GetProfileVisibilityCommandInput,
    cb: (err: any, data?: GetProfileVisibilityCommandOutput) => void
  ): void;
  getProfileVisibility(
    args: GetProfileVisibilityCommandInput,
    options: PartnerCentralAccountRequestOptions,
    cb: (err: any, data?: GetProfileVisibilityCommandOutput) => void
  ): void;

  /**
   * @see {@link GetQualificationsAssociationDetailsCommand}
   */
  getQualificationsAssociationDetails(
    args: GetQualificationsAssociationDetailsCommandInput,
    options?: PartnerCentralAccountRequestOptions
  ): Promise<GetQualificationsAssociationDetailsCommandOutput>;
  getQualificationsAssociationDetails(
    args: GetQualificationsAssociationDetailsCommandInput,
    cb: (err: any, data?: GetQualificationsAssociationDetailsCommandOutput) => void
  ): void;
  getQualificationsAssociationDetails(
    args: GetQualificationsAssociationDetailsCommandInput,
    options: PartnerCentralAccountRequestOptions,
    cb: (err: any, data?: GetQualificationsAssociationDetailsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetQualificationsAssociationTaskCommand}
   */
  getQualificationsAssociationTask(
    args: GetQualificationsAssociationTaskCommandInput,
    options?: PartnerCentralAccountRequestOptions
  ): Promise<GetQualificationsAssociationTaskCommandOutput>;
  getQualificationsAssociationTask(
    args: GetQualificationsAssociationTaskCommandInput,
    cb: (err: any, data?: GetQualificationsAssociationTaskCommandOutput) => void
  ): void;
  getQualificationsAssociationTask(
    args: GetQualificationsAssociationTaskCommandInput,
    options: PartnerCentralAccountRequestOptions,
    cb: (err: any, data?: GetQualificationsAssociationTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link GetQualificationsDisassociationTaskCommand}
   */
  getQualificationsDisassociationTask(
    args: GetQualificationsDisassociationTaskCommandInput,
    options?: PartnerCentralAccountRequestOptions
  ): Promise<GetQualificationsDisassociationTaskCommandOutput>;
  getQualificationsDisassociationTask(
    args: GetQualificationsDisassociationTaskCommandInput,
    cb: (err: any, data?: GetQualificationsDisassociationTaskCommandOutput) => void
  ): void;
  getQualificationsDisassociationTask(
    args: GetQualificationsDisassociationTaskCommandInput,
    options: PartnerCentralAccountRequestOptions,
    cb: (err: any, data?: GetQualificationsDisassociationTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link GetVerificationCommand}
   */
  getVerification(
    args: GetVerificationCommandInput,
    options?: PartnerCentralAccountRequestOptions
  ): Promise<GetVerificationCommandOutput>;
  getVerification(
    args: GetVerificationCommandInput,
    cb: (err: any, data?: GetVerificationCommandOutput) => void
  ): void;
  getVerification(
    args: GetVerificationCommandInput,
    options: PartnerCentralAccountRequestOptions,
    cb: (err: any, data?: GetVerificationCommandOutput) => void
  ): void;

  /**
   * @see {@link ListConnectionInvitationsCommand}
   */
  listConnectionInvitations(
    args: ListConnectionInvitationsCommandInput,
    options?: PartnerCentralAccountRequestOptions
  ): Promise<ListConnectionInvitationsCommandOutput>;
  listConnectionInvitations(
    args: ListConnectionInvitationsCommandInput,
    cb: (err: any, data?: ListConnectionInvitationsCommandOutput) => void
  ): void;
  listConnectionInvitations(
    args: ListConnectionInvitationsCommandInput,
    options: PartnerCentralAccountRequestOptions,
    cb: (err: any, data?: ListConnectionInvitationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListConnectionsCommand}
   */
  listConnections(
    args: ListConnectionsCommandInput,
    options?: PartnerCentralAccountRequestOptions
  ): Promise<ListConnectionsCommandOutput>;
  listConnections(
    args: ListConnectionsCommandInput,
    cb: (err: any, data?: ListConnectionsCommandOutput) => void
  ): void;
  listConnections(
    args: ListConnectionsCommandInput,
    options: PartnerCentralAccountRequestOptions,
    cb: (err: any, data?: ListConnectionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPartnersCommand}
   */
  listPartners(
    args: ListPartnersCommandInput,
    options?: PartnerCentralAccountRequestOptions
  ): Promise<ListPartnersCommandOutput>;
  listPartners(
    args: ListPartnersCommandInput,
    cb: (err: any, data?: ListPartnersCommandOutput) => void
  ): void;
  listPartners(
    args: ListPartnersCommandInput,
    options: PartnerCentralAccountRequestOptions,
    cb: (err: any, data?: ListPartnersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: PartnerCentralAccountRequestOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: PartnerCentralAccountRequestOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link PutAllianceLeadContactCommand}
   */
  putAllianceLeadContact(
    args: PutAllianceLeadContactCommandInput,
    options?: PartnerCentralAccountRequestOptions
  ): Promise<PutAllianceLeadContactCommandOutput>;
  putAllianceLeadContact(
    args: PutAllianceLeadContactCommandInput,
    cb: (err: any, data?: PutAllianceLeadContactCommandOutput) => void
  ): void;
  putAllianceLeadContact(
    args: PutAllianceLeadContactCommandInput,
    options: PartnerCentralAccountRequestOptions,
    cb: (err: any, data?: PutAllianceLeadContactCommandOutput) => void
  ): void;

  /**
   * @see {@link PutProfileVisibilityCommand}
   */
  putProfileVisibility(
    args: PutProfileVisibilityCommandInput,
    options?: PartnerCentralAccountRequestOptions
  ): Promise<PutProfileVisibilityCommandOutput>;
  putProfileVisibility(
    args: PutProfileVisibilityCommandInput,
    cb: (err: any, data?: PutProfileVisibilityCommandOutput) => void
  ): void;
  putProfileVisibility(
    args: PutProfileVisibilityCommandInput,
    options: PartnerCentralAccountRequestOptions,
    cb: (err: any, data?: PutProfileVisibilityCommandOutput) => void
  ): void;

  /**
   * @see {@link RejectConnectionInvitationCommand}
   */
  rejectConnectionInvitation(
    args: RejectConnectionInvitationCommandInput,
    options?: PartnerCentralAccountRequestOptions
  ): Promise<RejectConnectionInvitationCommandOutput>;
  rejectConnectionInvitation(
    args: RejectConnectionInvitationCommandInput,
    cb: (err: any, data?: RejectConnectionInvitationCommandOutput) => void
  ): void;
  rejectConnectionInvitation(
    args: RejectConnectionInvitationCommandInput,
    options: PartnerCentralAccountRequestOptions,
    cb: (err: any, data?: RejectConnectionInvitationCommandOutput) => void
  ): void;

  /**
   * @see {@link SendEmailVerificationCodeCommand}
   */
  sendEmailVerificationCode(
    args: SendEmailVerificationCodeCommandInput,
    options?: PartnerCentralAccountRequestOptions
  ): Promise<SendEmailVerificationCodeCommandOutput>;
  sendEmailVerificationCode(
    args: SendEmailVerificationCodeCommandInput,
    cb: (err: any, data?: SendEmailVerificationCodeCommandOutput) => void
  ): void;
  sendEmailVerificationCode(
    args: SendEmailVerificationCodeCommandInput,
    options: PartnerCentralAccountRequestOptions,
    cb: (err: any, data?: SendEmailVerificationCodeCommandOutput) => void
  ): void;

  /**
   * @see {@link StartProfileUpdateTaskCommand}
   */
  startProfileUpdateTask(
    args: StartProfileUpdateTaskCommandInput,
    options?: PartnerCentralAccountRequestOptions
  ): Promise<StartProfileUpdateTaskCommandOutput>;
  startProfileUpdateTask(
    args: StartProfileUpdateTaskCommandInput,
    cb: (err: any, data?: StartProfileUpdateTaskCommandOutput) => void
  ): void;
  startProfileUpdateTask(
    args: StartProfileUpdateTaskCommandInput,
    options: PartnerCentralAccountRequestOptions,
    cb: (err: any, data?: StartProfileUpdateTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link StartQualificationsAssociationTaskCommand}
   */
  startQualificationsAssociationTask(
    args: StartQualificationsAssociationTaskCommandInput,
    options?: PartnerCentralAccountRequestOptions
  ): Promise<StartQualificationsAssociationTaskCommandOutput>;
  startQualificationsAssociationTask(
    args: StartQualificationsAssociationTaskCommandInput,
    cb: (err: any, data?: StartQualificationsAssociationTaskCommandOutput) => void
  ): void;
  startQualificationsAssociationTask(
    args: StartQualificationsAssociationTaskCommandInput,
    options: PartnerCentralAccountRequestOptions,
    cb: (err: any, data?: StartQualificationsAssociationTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link StartQualificationsDisassociationTaskCommand}
   */
  startQualificationsDisassociationTask(
    args: StartQualificationsDisassociationTaskCommandInput,
    options?: PartnerCentralAccountRequestOptions
  ): Promise<StartQualificationsDisassociationTaskCommandOutput>;
  startQualificationsDisassociationTask(
    args: StartQualificationsDisassociationTaskCommandInput,
    cb: (err: any, data?: StartQualificationsDisassociationTaskCommandOutput) => void
  ): void;
  startQualificationsDisassociationTask(
    args: StartQualificationsDisassociationTaskCommandInput,
    options: PartnerCentralAccountRequestOptions,
    cb: (err: any, data?: StartQualificationsDisassociationTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link StartVerificationCommand}
   */
  startVerification(): Promise<StartVerificationCommandOutput>;
  startVerification(
    args: StartVerificationCommandInput,
    options?: PartnerCentralAccountRequestOptions
  ): Promise<StartVerificationCommandOutput>;
  startVerification(
    args: StartVerificationCommandInput,
    cb: (err: any, data?: StartVerificationCommandOutput) => void
  ): void;
  startVerification(
    args: StartVerificationCommandInput,
    options: PartnerCentralAccountRequestOptions,
    cb: (err: any, data?: StartVerificationCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: PartnerCentralAccountRequestOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: PartnerCentralAccountRequestOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: PartnerCentralAccountRequestOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: PartnerCentralAccountRequestOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateConnectionPreferencesCommand}
   */
  updateConnectionPreferences(
    args: UpdateConnectionPreferencesCommandInput,
    options?: PartnerCentralAccountRequestOptions
  ): Promise<UpdateConnectionPreferencesCommandOutput>;
  updateConnectionPreferences(
    args: UpdateConnectionPreferencesCommandInput,
    cb: (err: any, data?: UpdateConnectionPreferencesCommandOutput) => void
  ): void;
  updateConnectionPreferences(
    args: UpdateConnectionPreferencesCommandInput,
    options: PartnerCentralAccountRequestOptions,
    cb: (err: any, data?: UpdateConnectionPreferencesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListConnectionInvitationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListConnectionInvitationsCommandOutput}.
   */
  paginateListConnectionInvitations(
    args: ListConnectionInvitationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListConnectionInvitationsCommandOutput>;

  /**
   * @see {@link ListConnectionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListConnectionsCommandOutput}.
   */
  paginateListConnections(
    args: ListConnectionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListConnectionsCommandOutput>;

  /**
   * @see {@link ListPartnersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListPartnersCommandOutput}.
   */
  paginateListPartners(
    args: ListPartnersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListPartnersCommandOutput>;
}

/**
 * <p>AWS Partner Central Account service provides APIs for managing partner accounts, connections, and profiles within the AWS Partner Network. This service enables partners to create and manage their partner profiles, establish connections with other partners, and maintain their account information.</p>
 * @public
 */
export class PartnerCentralAccount extends PartnerCentralAccountClient implements PartnerCentralAccount {}
createAggregatedClient(commands, PartnerCentralAccount, { paginators });
