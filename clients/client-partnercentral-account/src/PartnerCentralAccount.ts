// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  AcceptConnectionInvitationCommand,
  AcceptConnectionInvitationCommandInput,
  AcceptConnectionInvitationCommandOutput,
} from "./commands/AcceptConnectionInvitationCommand";
import {
  AssociateAwsTrainingCertificationEmailDomainCommand,
  AssociateAwsTrainingCertificationEmailDomainCommandInput,
  AssociateAwsTrainingCertificationEmailDomainCommandOutput,
} from "./commands/AssociateAwsTrainingCertificationEmailDomainCommand";
import {
  CancelConnectionCommand,
  CancelConnectionCommandInput,
  CancelConnectionCommandOutput,
} from "./commands/CancelConnectionCommand";
import {
  CancelConnectionInvitationCommand,
  CancelConnectionInvitationCommandInput,
  CancelConnectionInvitationCommandOutput,
} from "./commands/CancelConnectionInvitationCommand";
import {
  CancelProfileUpdateTaskCommand,
  CancelProfileUpdateTaskCommandInput,
  CancelProfileUpdateTaskCommandOutput,
} from "./commands/CancelProfileUpdateTaskCommand";
import {
  CreateConnectionInvitationCommand,
  CreateConnectionInvitationCommandInput,
  CreateConnectionInvitationCommandOutput,
} from "./commands/CreateConnectionInvitationCommand";
import {
  CreatePartnerCommand,
  CreatePartnerCommandInput,
  CreatePartnerCommandOutput,
} from "./commands/CreatePartnerCommand";
import {
  DisassociateAwsTrainingCertificationEmailDomainCommand,
  DisassociateAwsTrainingCertificationEmailDomainCommandInput,
  DisassociateAwsTrainingCertificationEmailDomainCommandOutput,
} from "./commands/DisassociateAwsTrainingCertificationEmailDomainCommand";
import {
  GetAllianceLeadContactCommand,
  GetAllianceLeadContactCommandInput,
  GetAllianceLeadContactCommandOutput,
} from "./commands/GetAllianceLeadContactCommand";
import {
  GetConnectionCommand,
  GetConnectionCommandInput,
  GetConnectionCommandOutput,
} from "./commands/GetConnectionCommand";
import {
  GetConnectionInvitationCommand,
  GetConnectionInvitationCommandInput,
  GetConnectionInvitationCommandOutput,
} from "./commands/GetConnectionInvitationCommand";
import {
  GetConnectionPreferencesCommand,
  GetConnectionPreferencesCommandInput,
  GetConnectionPreferencesCommandOutput,
} from "./commands/GetConnectionPreferencesCommand";
import { GetPartnerCommand, GetPartnerCommandInput, GetPartnerCommandOutput } from "./commands/GetPartnerCommand";
import {
  GetProfileUpdateTaskCommand,
  GetProfileUpdateTaskCommandInput,
  GetProfileUpdateTaskCommandOutput,
} from "./commands/GetProfileUpdateTaskCommand";
import {
  GetProfileVisibilityCommand,
  GetProfileVisibilityCommandInput,
  GetProfileVisibilityCommandOutput,
} from "./commands/GetProfileVisibilityCommand";
import {
  ListConnectionInvitationsCommand,
  ListConnectionInvitationsCommandInput,
  ListConnectionInvitationsCommandOutput,
} from "./commands/ListConnectionInvitationsCommand";
import {
  ListConnectionsCommand,
  ListConnectionsCommandInput,
  ListConnectionsCommandOutput,
} from "./commands/ListConnectionsCommand";
import {
  ListPartnersCommand,
  ListPartnersCommandInput,
  ListPartnersCommandOutput,
} from "./commands/ListPartnersCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  PutAllianceLeadContactCommand,
  PutAllianceLeadContactCommandInput,
  PutAllianceLeadContactCommandOutput,
} from "./commands/PutAllianceLeadContactCommand";
import {
  PutProfileVisibilityCommand,
  PutProfileVisibilityCommandInput,
  PutProfileVisibilityCommandOutput,
} from "./commands/PutProfileVisibilityCommand";
import {
  RejectConnectionInvitationCommand,
  RejectConnectionInvitationCommandInput,
  RejectConnectionInvitationCommandOutput,
} from "./commands/RejectConnectionInvitationCommand";
import {
  SendEmailVerificationCodeCommand,
  SendEmailVerificationCodeCommandInput,
  SendEmailVerificationCodeCommandOutput,
} from "./commands/SendEmailVerificationCodeCommand";
import {
  StartProfileUpdateTaskCommand,
  StartProfileUpdateTaskCommandInput,
  StartProfileUpdateTaskCommandOutput,
} from "./commands/StartProfileUpdateTaskCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateConnectionPreferencesCommand,
  UpdateConnectionPreferencesCommandInput,
  UpdateConnectionPreferencesCommandOutput,
} from "./commands/UpdateConnectionPreferencesCommand";
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
  ListConnectionInvitationsCommand,
  ListConnectionsCommand,
  ListPartnersCommand,
  ListTagsForResourceCommand,
  PutAllianceLeadContactCommand,
  PutProfileVisibilityCommand,
  RejectConnectionInvitationCommand,
  SendEmailVerificationCodeCommand,
  StartProfileUpdateTaskCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateConnectionPreferencesCommand,
};

export interface PartnerCentralAccount {
  /**
   * @see {@link AcceptConnectionInvitationCommand}
   */
  acceptConnectionInvitation(
    args: AcceptConnectionInvitationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AcceptConnectionInvitationCommandOutput>;
  acceptConnectionInvitation(
    args: AcceptConnectionInvitationCommandInput,
    cb: (err: any, data?: AcceptConnectionInvitationCommandOutput) => void
  ): void;
  acceptConnectionInvitation(
    args: AcceptConnectionInvitationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AcceptConnectionInvitationCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateAwsTrainingCertificationEmailDomainCommand}
   */
  associateAwsTrainingCertificationEmailDomain(
    args: AssociateAwsTrainingCertificationEmailDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateAwsTrainingCertificationEmailDomainCommandOutput>;
  associateAwsTrainingCertificationEmailDomain(
    args: AssociateAwsTrainingCertificationEmailDomainCommandInput,
    cb: (err: any, data?: AssociateAwsTrainingCertificationEmailDomainCommandOutput) => void
  ): void;
  associateAwsTrainingCertificationEmailDomain(
    args: AssociateAwsTrainingCertificationEmailDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateAwsTrainingCertificationEmailDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelConnectionCommand}
   */
  cancelConnection(
    args: CancelConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelConnectionCommandOutput>;
  cancelConnection(
    args: CancelConnectionCommandInput,
    cb: (err: any, data?: CancelConnectionCommandOutput) => void
  ): void;
  cancelConnection(
    args: CancelConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelConnectionInvitationCommand}
   */
  cancelConnectionInvitation(
    args: CancelConnectionInvitationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelConnectionInvitationCommandOutput>;
  cancelConnectionInvitation(
    args: CancelConnectionInvitationCommandInput,
    cb: (err: any, data?: CancelConnectionInvitationCommandOutput) => void
  ): void;
  cancelConnectionInvitation(
    args: CancelConnectionInvitationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelConnectionInvitationCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelProfileUpdateTaskCommand}
   */
  cancelProfileUpdateTask(
    args: CancelProfileUpdateTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelProfileUpdateTaskCommandOutput>;
  cancelProfileUpdateTask(
    args: CancelProfileUpdateTaskCommandInput,
    cb: (err: any, data?: CancelProfileUpdateTaskCommandOutput) => void
  ): void;
  cancelProfileUpdateTask(
    args: CancelProfileUpdateTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelProfileUpdateTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateConnectionInvitationCommand}
   */
  createConnectionInvitation(
    args: CreateConnectionInvitationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateConnectionInvitationCommandOutput>;
  createConnectionInvitation(
    args: CreateConnectionInvitationCommandInput,
    cb: (err: any, data?: CreateConnectionInvitationCommandOutput) => void
  ): void;
  createConnectionInvitation(
    args: CreateConnectionInvitationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateConnectionInvitationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePartnerCommand}
   */
  createPartner(args: CreatePartnerCommandInput, options?: __HttpHandlerOptions): Promise<CreatePartnerCommandOutput>;
  createPartner(args: CreatePartnerCommandInput, cb: (err: any, data?: CreatePartnerCommandOutput) => void): void;
  createPartner(
    args: CreatePartnerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePartnerCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateAwsTrainingCertificationEmailDomainCommand}
   */
  disassociateAwsTrainingCertificationEmailDomain(
    args: DisassociateAwsTrainingCertificationEmailDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateAwsTrainingCertificationEmailDomainCommandOutput>;
  disassociateAwsTrainingCertificationEmailDomain(
    args: DisassociateAwsTrainingCertificationEmailDomainCommandInput,
    cb: (err: any, data?: DisassociateAwsTrainingCertificationEmailDomainCommandOutput) => void
  ): void;
  disassociateAwsTrainingCertificationEmailDomain(
    args: DisassociateAwsTrainingCertificationEmailDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateAwsTrainingCertificationEmailDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAllianceLeadContactCommand}
   */
  getAllianceLeadContact(
    args: GetAllianceLeadContactCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAllianceLeadContactCommandOutput>;
  getAllianceLeadContact(
    args: GetAllianceLeadContactCommandInput,
    cb: (err: any, data?: GetAllianceLeadContactCommandOutput) => void
  ): void;
  getAllianceLeadContact(
    args: GetAllianceLeadContactCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAllianceLeadContactCommandOutput) => void
  ): void;

  /**
   * @see {@link GetConnectionCommand}
   */
  getConnection(args: GetConnectionCommandInput, options?: __HttpHandlerOptions): Promise<GetConnectionCommandOutput>;
  getConnection(args: GetConnectionCommandInput, cb: (err: any, data?: GetConnectionCommandOutput) => void): void;
  getConnection(
    args: GetConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetConnectionInvitationCommand}
   */
  getConnectionInvitation(
    args: GetConnectionInvitationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetConnectionInvitationCommandOutput>;
  getConnectionInvitation(
    args: GetConnectionInvitationCommandInput,
    cb: (err: any, data?: GetConnectionInvitationCommandOutput) => void
  ): void;
  getConnectionInvitation(
    args: GetConnectionInvitationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetConnectionInvitationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetConnectionPreferencesCommand}
   */
  getConnectionPreferences(
    args: GetConnectionPreferencesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetConnectionPreferencesCommandOutput>;
  getConnectionPreferences(
    args: GetConnectionPreferencesCommandInput,
    cb: (err: any, data?: GetConnectionPreferencesCommandOutput) => void
  ): void;
  getConnectionPreferences(
    args: GetConnectionPreferencesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetConnectionPreferencesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPartnerCommand}
   */
  getPartner(args: GetPartnerCommandInput, options?: __HttpHandlerOptions): Promise<GetPartnerCommandOutput>;
  getPartner(args: GetPartnerCommandInput, cb: (err: any, data?: GetPartnerCommandOutput) => void): void;
  getPartner(
    args: GetPartnerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPartnerCommandOutput) => void
  ): void;

  /**
   * @see {@link GetProfileUpdateTaskCommand}
   */
  getProfileUpdateTask(
    args: GetProfileUpdateTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetProfileUpdateTaskCommandOutput>;
  getProfileUpdateTask(
    args: GetProfileUpdateTaskCommandInput,
    cb: (err: any, data?: GetProfileUpdateTaskCommandOutput) => void
  ): void;
  getProfileUpdateTask(
    args: GetProfileUpdateTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetProfileUpdateTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link GetProfileVisibilityCommand}
   */
  getProfileVisibility(
    args: GetProfileVisibilityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetProfileVisibilityCommandOutput>;
  getProfileVisibility(
    args: GetProfileVisibilityCommandInput,
    cb: (err: any, data?: GetProfileVisibilityCommandOutput) => void
  ): void;
  getProfileVisibility(
    args: GetProfileVisibilityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetProfileVisibilityCommandOutput) => void
  ): void;

  /**
   * @see {@link ListConnectionInvitationsCommand}
   */
  listConnectionInvitations(
    args: ListConnectionInvitationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListConnectionInvitationsCommandOutput>;
  listConnectionInvitations(
    args: ListConnectionInvitationsCommandInput,
    cb: (err: any, data?: ListConnectionInvitationsCommandOutput) => void
  ): void;
  listConnectionInvitations(
    args: ListConnectionInvitationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListConnectionInvitationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListConnectionsCommand}
   */
  listConnections(
    args: ListConnectionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListConnectionsCommandOutput>;
  listConnections(args: ListConnectionsCommandInput, cb: (err: any, data?: ListConnectionsCommandOutput) => void): void;
  listConnections(
    args: ListConnectionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListConnectionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPartnersCommand}
   */
  listPartners(args: ListPartnersCommandInput, options?: __HttpHandlerOptions): Promise<ListPartnersCommandOutput>;
  listPartners(args: ListPartnersCommandInput, cb: (err: any, data?: ListPartnersCommandOutput) => void): void;
  listPartners(
    args: ListPartnersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPartnersCommandOutput) => void
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
   * @see {@link PutAllianceLeadContactCommand}
   */
  putAllianceLeadContact(
    args: PutAllianceLeadContactCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutAllianceLeadContactCommandOutput>;
  putAllianceLeadContact(
    args: PutAllianceLeadContactCommandInput,
    cb: (err: any, data?: PutAllianceLeadContactCommandOutput) => void
  ): void;
  putAllianceLeadContact(
    args: PutAllianceLeadContactCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutAllianceLeadContactCommandOutput) => void
  ): void;

  /**
   * @see {@link PutProfileVisibilityCommand}
   */
  putProfileVisibility(
    args: PutProfileVisibilityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutProfileVisibilityCommandOutput>;
  putProfileVisibility(
    args: PutProfileVisibilityCommandInput,
    cb: (err: any, data?: PutProfileVisibilityCommandOutput) => void
  ): void;
  putProfileVisibility(
    args: PutProfileVisibilityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutProfileVisibilityCommandOutput) => void
  ): void;

  /**
   * @see {@link RejectConnectionInvitationCommand}
   */
  rejectConnectionInvitation(
    args: RejectConnectionInvitationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RejectConnectionInvitationCommandOutput>;
  rejectConnectionInvitation(
    args: RejectConnectionInvitationCommandInput,
    cb: (err: any, data?: RejectConnectionInvitationCommandOutput) => void
  ): void;
  rejectConnectionInvitation(
    args: RejectConnectionInvitationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RejectConnectionInvitationCommandOutput) => void
  ): void;

  /**
   * @see {@link SendEmailVerificationCodeCommand}
   */
  sendEmailVerificationCode(
    args: SendEmailVerificationCodeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SendEmailVerificationCodeCommandOutput>;
  sendEmailVerificationCode(
    args: SendEmailVerificationCodeCommandInput,
    cb: (err: any, data?: SendEmailVerificationCodeCommandOutput) => void
  ): void;
  sendEmailVerificationCode(
    args: SendEmailVerificationCodeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendEmailVerificationCodeCommandOutput) => void
  ): void;

  /**
   * @see {@link StartProfileUpdateTaskCommand}
   */
  startProfileUpdateTask(
    args: StartProfileUpdateTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartProfileUpdateTaskCommandOutput>;
  startProfileUpdateTask(
    args: StartProfileUpdateTaskCommandInput,
    cb: (err: any, data?: StartProfileUpdateTaskCommandOutput) => void
  ): void;
  startProfileUpdateTask(
    args: StartProfileUpdateTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartProfileUpdateTaskCommandOutput) => void
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
   * @see {@link UpdateConnectionPreferencesCommand}
   */
  updateConnectionPreferences(
    args: UpdateConnectionPreferencesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateConnectionPreferencesCommandOutput>;
  updateConnectionPreferences(
    args: UpdateConnectionPreferencesCommandInput,
    cb: (err: any, data?: UpdateConnectionPreferencesCommandOutput) => void
  ): void;
  updateConnectionPreferences(
    args: UpdateConnectionPreferencesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateConnectionPreferencesCommandOutput) => void
  ): void;
}

/**
 * <p>AWS Partner Central Account service provides APIs for managing partner accounts, connections, and profiles within the AWS Partner Network. This service enables partners to create and manage their partner profiles, establish connections with other partners, and maintain their account information.</p>
 * @public
 */
export class PartnerCentralAccount extends PartnerCentralAccountClient implements PartnerCentralAccount {}
createAggregatedClient(commands, PartnerCentralAccount);
