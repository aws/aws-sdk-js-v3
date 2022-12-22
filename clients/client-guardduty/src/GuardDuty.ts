// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  AcceptAdministratorInvitationCommand,
  AcceptAdministratorInvitationCommandInput,
  AcceptAdministratorInvitationCommandOutput,
} from "./commands/AcceptAdministratorInvitationCommand";
import {
  AcceptInvitationCommand,
  AcceptInvitationCommandInput,
  AcceptInvitationCommandOutput,
} from "./commands/AcceptInvitationCommand";
import {
  ArchiveFindingsCommand,
  ArchiveFindingsCommandInput,
  ArchiveFindingsCommandOutput,
} from "./commands/ArchiveFindingsCommand";
import {
  CreateDetectorCommand,
  CreateDetectorCommandInput,
  CreateDetectorCommandOutput,
} from "./commands/CreateDetectorCommand";
import {
  CreateFilterCommand,
  CreateFilterCommandInput,
  CreateFilterCommandOutput,
} from "./commands/CreateFilterCommand";
import { CreateIPSetCommand, CreateIPSetCommandInput, CreateIPSetCommandOutput } from "./commands/CreateIPSetCommand";
import {
  CreateMembersCommand,
  CreateMembersCommandInput,
  CreateMembersCommandOutput,
} from "./commands/CreateMembersCommand";
import {
  CreatePublishingDestinationCommand,
  CreatePublishingDestinationCommandInput,
  CreatePublishingDestinationCommandOutput,
} from "./commands/CreatePublishingDestinationCommand";
import {
  CreateSampleFindingsCommand,
  CreateSampleFindingsCommandInput,
  CreateSampleFindingsCommandOutput,
} from "./commands/CreateSampleFindingsCommand";
import {
  CreateThreatIntelSetCommand,
  CreateThreatIntelSetCommandInput,
  CreateThreatIntelSetCommandOutput,
} from "./commands/CreateThreatIntelSetCommand";
import {
  DeclineInvitationsCommand,
  DeclineInvitationsCommandInput,
  DeclineInvitationsCommandOutput,
} from "./commands/DeclineInvitationsCommand";
import {
  DeleteDetectorCommand,
  DeleteDetectorCommandInput,
  DeleteDetectorCommandOutput,
} from "./commands/DeleteDetectorCommand";
import {
  DeleteFilterCommand,
  DeleteFilterCommandInput,
  DeleteFilterCommandOutput,
} from "./commands/DeleteFilterCommand";
import {
  DeleteInvitationsCommand,
  DeleteInvitationsCommandInput,
  DeleteInvitationsCommandOutput,
} from "./commands/DeleteInvitationsCommand";
import { DeleteIPSetCommand, DeleteIPSetCommandInput, DeleteIPSetCommandOutput } from "./commands/DeleteIPSetCommand";
import {
  DeleteMembersCommand,
  DeleteMembersCommandInput,
  DeleteMembersCommandOutput,
} from "./commands/DeleteMembersCommand";
import {
  DeletePublishingDestinationCommand,
  DeletePublishingDestinationCommandInput,
  DeletePublishingDestinationCommandOutput,
} from "./commands/DeletePublishingDestinationCommand";
import {
  DeleteThreatIntelSetCommand,
  DeleteThreatIntelSetCommandInput,
  DeleteThreatIntelSetCommandOutput,
} from "./commands/DeleteThreatIntelSetCommand";
import {
  DescribeMalwareScansCommand,
  DescribeMalwareScansCommandInput,
  DescribeMalwareScansCommandOutput,
} from "./commands/DescribeMalwareScansCommand";
import {
  DescribeOrganizationConfigurationCommand,
  DescribeOrganizationConfigurationCommandInput,
  DescribeOrganizationConfigurationCommandOutput,
} from "./commands/DescribeOrganizationConfigurationCommand";
import {
  DescribePublishingDestinationCommand,
  DescribePublishingDestinationCommandInput,
  DescribePublishingDestinationCommandOutput,
} from "./commands/DescribePublishingDestinationCommand";
import {
  DisableOrganizationAdminAccountCommand,
  DisableOrganizationAdminAccountCommandInput,
  DisableOrganizationAdminAccountCommandOutput,
} from "./commands/DisableOrganizationAdminAccountCommand";
import {
  DisassociateFromAdministratorAccountCommand,
  DisassociateFromAdministratorAccountCommandInput,
  DisassociateFromAdministratorAccountCommandOutput,
} from "./commands/DisassociateFromAdministratorAccountCommand";
import {
  DisassociateFromMasterAccountCommand,
  DisassociateFromMasterAccountCommandInput,
  DisassociateFromMasterAccountCommandOutput,
} from "./commands/DisassociateFromMasterAccountCommand";
import {
  DisassociateMembersCommand,
  DisassociateMembersCommandInput,
  DisassociateMembersCommandOutput,
} from "./commands/DisassociateMembersCommand";
import {
  EnableOrganizationAdminAccountCommand,
  EnableOrganizationAdminAccountCommandInput,
  EnableOrganizationAdminAccountCommandOutput,
} from "./commands/EnableOrganizationAdminAccountCommand";
import {
  GetAdministratorAccountCommand,
  GetAdministratorAccountCommandInput,
  GetAdministratorAccountCommandOutput,
} from "./commands/GetAdministratorAccountCommand";
import { GetDetectorCommand, GetDetectorCommandInput, GetDetectorCommandOutput } from "./commands/GetDetectorCommand";
import { GetFilterCommand, GetFilterCommandInput, GetFilterCommandOutput } from "./commands/GetFilterCommand";
import { GetFindingsCommand, GetFindingsCommandInput, GetFindingsCommandOutput } from "./commands/GetFindingsCommand";
import {
  GetFindingsStatisticsCommand,
  GetFindingsStatisticsCommandInput,
  GetFindingsStatisticsCommandOutput,
} from "./commands/GetFindingsStatisticsCommand";
import {
  GetInvitationsCountCommand,
  GetInvitationsCountCommandInput,
  GetInvitationsCountCommandOutput,
} from "./commands/GetInvitationsCountCommand";
import { GetIPSetCommand, GetIPSetCommandInput, GetIPSetCommandOutput } from "./commands/GetIPSetCommand";
import {
  GetMalwareScanSettingsCommand,
  GetMalwareScanSettingsCommandInput,
  GetMalwareScanSettingsCommandOutput,
} from "./commands/GetMalwareScanSettingsCommand";
import {
  GetMasterAccountCommand,
  GetMasterAccountCommandInput,
  GetMasterAccountCommandOutput,
} from "./commands/GetMasterAccountCommand";
import {
  GetMemberDetectorsCommand,
  GetMemberDetectorsCommandInput,
  GetMemberDetectorsCommandOutput,
} from "./commands/GetMemberDetectorsCommand";
import { GetMembersCommand, GetMembersCommandInput, GetMembersCommandOutput } from "./commands/GetMembersCommand";
import {
  GetRemainingFreeTrialDaysCommand,
  GetRemainingFreeTrialDaysCommandInput,
  GetRemainingFreeTrialDaysCommandOutput,
} from "./commands/GetRemainingFreeTrialDaysCommand";
import {
  GetThreatIntelSetCommand,
  GetThreatIntelSetCommandInput,
  GetThreatIntelSetCommandOutput,
} from "./commands/GetThreatIntelSetCommand";
import {
  GetUsageStatisticsCommand,
  GetUsageStatisticsCommandInput,
  GetUsageStatisticsCommandOutput,
} from "./commands/GetUsageStatisticsCommand";
import {
  InviteMembersCommand,
  InviteMembersCommandInput,
  InviteMembersCommandOutput,
} from "./commands/InviteMembersCommand";
import {
  ListDetectorsCommand,
  ListDetectorsCommandInput,
  ListDetectorsCommandOutput,
} from "./commands/ListDetectorsCommand";
import { ListFiltersCommand, ListFiltersCommandInput, ListFiltersCommandOutput } from "./commands/ListFiltersCommand";
import {
  ListFindingsCommand,
  ListFindingsCommandInput,
  ListFindingsCommandOutput,
} from "./commands/ListFindingsCommand";
import {
  ListInvitationsCommand,
  ListInvitationsCommandInput,
  ListInvitationsCommandOutput,
} from "./commands/ListInvitationsCommand";
import { ListIPSetsCommand, ListIPSetsCommandInput, ListIPSetsCommandOutput } from "./commands/ListIPSetsCommand";
import { ListMembersCommand, ListMembersCommandInput, ListMembersCommandOutput } from "./commands/ListMembersCommand";
import {
  ListOrganizationAdminAccountsCommand,
  ListOrganizationAdminAccountsCommandInput,
  ListOrganizationAdminAccountsCommandOutput,
} from "./commands/ListOrganizationAdminAccountsCommand";
import {
  ListPublishingDestinationsCommand,
  ListPublishingDestinationsCommandInput,
  ListPublishingDestinationsCommandOutput,
} from "./commands/ListPublishingDestinationsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListThreatIntelSetsCommand,
  ListThreatIntelSetsCommandInput,
  ListThreatIntelSetsCommandOutput,
} from "./commands/ListThreatIntelSetsCommand";
import {
  StartMonitoringMembersCommand,
  StartMonitoringMembersCommandInput,
  StartMonitoringMembersCommandOutput,
} from "./commands/StartMonitoringMembersCommand";
import {
  StopMonitoringMembersCommand,
  StopMonitoringMembersCommandInput,
  StopMonitoringMembersCommandOutput,
} from "./commands/StopMonitoringMembersCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UnarchiveFindingsCommand,
  UnarchiveFindingsCommandInput,
  UnarchiveFindingsCommandOutput,
} from "./commands/UnarchiveFindingsCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateDetectorCommand,
  UpdateDetectorCommandInput,
  UpdateDetectorCommandOutput,
} from "./commands/UpdateDetectorCommand";
import {
  UpdateFilterCommand,
  UpdateFilterCommandInput,
  UpdateFilterCommandOutput,
} from "./commands/UpdateFilterCommand";
import {
  UpdateFindingsFeedbackCommand,
  UpdateFindingsFeedbackCommandInput,
  UpdateFindingsFeedbackCommandOutput,
} from "./commands/UpdateFindingsFeedbackCommand";
import { UpdateIPSetCommand, UpdateIPSetCommandInput, UpdateIPSetCommandOutput } from "./commands/UpdateIPSetCommand";
import {
  UpdateMalwareScanSettingsCommand,
  UpdateMalwareScanSettingsCommandInput,
  UpdateMalwareScanSettingsCommandOutput,
} from "./commands/UpdateMalwareScanSettingsCommand";
import {
  UpdateMemberDetectorsCommand,
  UpdateMemberDetectorsCommandInput,
  UpdateMemberDetectorsCommandOutput,
} from "./commands/UpdateMemberDetectorsCommand";
import {
  UpdateOrganizationConfigurationCommand,
  UpdateOrganizationConfigurationCommandInput,
  UpdateOrganizationConfigurationCommandOutput,
} from "./commands/UpdateOrganizationConfigurationCommand";
import {
  UpdatePublishingDestinationCommand,
  UpdatePublishingDestinationCommandInput,
  UpdatePublishingDestinationCommandOutput,
} from "./commands/UpdatePublishingDestinationCommand";
import {
  UpdateThreatIntelSetCommand,
  UpdateThreatIntelSetCommandInput,
  UpdateThreatIntelSetCommandOutput,
} from "./commands/UpdateThreatIntelSetCommand";
import { GuardDutyClient } from "./GuardDutyClient";

/**
 * <p>Amazon GuardDuty is a continuous security monitoring service that analyzes and processes
 *       the following data sources: VPC flow logs, Amazon Web Services CloudTrail management event logs, CloudTrail S3 data event
 *       logs, EKS audit logs, DNS logs, and Amazon EBS volume data.
 *       It uses threat intelligence
 *       feeds, such as lists of malicious IPs and domains, and machine learning to identify
 *       unexpected, potentially unauthorized, and malicious activity within your Amazon Web Services environment.
 *       This can include issues like escalations of privileges, uses of exposed credentials, or
 *       communication with malicious IPs, domains, or presence of malware on your
 *       Amazon EC2 instances and container workloads. For example, GuardDuty can detect
 *       compromised EC2 instances and container workloads serving malware, or mining bitcoin. </p>
 *          <p>GuardDuty also monitors Amazon Web Services account access behavior for signs of compromise, such
 *       as unauthorized infrastructure deployments like EC2 instances deployed in a Region
 *       that has never been used, or unusual API calls like a password policy change to reduce
 *       password strength. </p>
 *          <p>GuardDuty informs you about the status of your Amazon Web Services environment by producing
 *       security findings that you can view in the GuardDuty console or through Amazon EventBridge.
 *       For more information, see the <i>
 *                <a href="https://docs.aws.amazon.com/guardduty/latest/ug/what-is-guardduty.html">Amazon
 *           GuardDuty User Guide</a>
 *             </i>. </p>
 */
export class GuardDuty extends GuardDutyClient {
  /**
   * <p>Accepts the invitation to be a member account and get monitored by a GuardDuty administrator account that sent the invitation.</p>
   */
  public acceptAdministratorInvitation(
    args: AcceptAdministratorInvitationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AcceptAdministratorInvitationCommandOutput>;
  public acceptAdministratorInvitation(
    args: AcceptAdministratorInvitationCommandInput,
    cb: (err: any, data?: AcceptAdministratorInvitationCommandOutput) => void
  ): void;
  public acceptAdministratorInvitation(
    args: AcceptAdministratorInvitationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AcceptAdministratorInvitationCommandOutput) => void
  ): void;
  public acceptAdministratorInvitation(
    args: AcceptAdministratorInvitationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AcceptAdministratorInvitationCommandOutput) => void),
    cb?: (err: any, data?: AcceptAdministratorInvitationCommandOutput) => void
  ): Promise<AcceptAdministratorInvitationCommandOutput> | void {
    const command = new AcceptAdministratorInvitationCommand(args);
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
   * @deprecated
   *
   * <p>Accepts the invitation to be monitored by a GuardDuty administrator account.</p>
   */
  public acceptInvitation(
    args: AcceptInvitationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AcceptInvitationCommandOutput>;
  public acceptInvitation(
    args: AcceptInvitationCommandInput,
    cb: (err: any, data?: AcceptInvitationCommandOutput) => void
  ): void;
  public acceptInvitation(
    args: AcceptInvitationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AcceptInvitationCommandOutput) => void
  ): void;
  public acceptInvitation(
    args: AcceptInvitationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AcceptInvitationCommandOutput) => void),
    cb?: (err: any, data?: AcceptInvitationCommandOutput) => void
  ): Promise<AcceptInvitationCommandOutput> | void {
    const command = new AcceptInvitationCommand(args);
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
   * <p>Archives GuardDuty findings that are specified by the list of finding IDs.</p>
   *          <note>
   *             <p>Only the administrator account can archive findings. Member accounts don't have permission to
   *         archive findings from their accounts.</p>
   *          </note>
   */
  public archiveFindings(
    args: ArchiveFindingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ArchiveFindingsCommandOutput>;
  public archiveFindings(
    args: ArchiveFindingsCommandInput,
    cb: (err: any, data?: ArchiveFindingsCommandOutput) => void
  ): void;
  public archiveFindings(
    args: ArchiveFindingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ArchiveFindingsCommandOutput) => void
  ): void;
  public archiveFindings(
    args: ArchiveFindingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ArchiveFindingsCommandOutput) => void),
    cb?: (err: any, data?: ArchiveFindingsCommandOutput) => void
  ): Promise<ArchiveFindingsCommandOutput> | void {
    const command = new ArchiveFindingsCommand(args);
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
   * <p>Creates a single Amazon GuardDuty detector. A detector is a resource that represents the
   *       GuardDuty service. To start using GuardDuty, you must create a detector in each Region where
   *       you enable the service. You can have only one detector per account per Region. All data
   *       sources are enabled in a new detector by default.</p>
   */
  public createDetector(
    args: CreateDetectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDetectorCommandOutput>;
  public createDetector(
    args: CreateDetectorCommandInput,
    cb: (err: any, data?: CreateDetectorCommandOutput) => void
  ): void;
  public createDetector(
    args: CreateDetectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDetectorCommandOutput) => void
  ): void;
  public createDetector(
    args: CreateDetectorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDetectorCommandOutput) => void),
    cb?: (err: any, data?: CreateDetectorCommandOutput) => void
  ): Promise<CreateDetectorCommandOutput> | void {
    const command = new CreateDetectorCommand(args);
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
   * <p>Creates a filter using the specified finding criteria.</p>
   */
  public createFilter(
    args: CreateFilterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateFilterCommandOutput>;
  public createFilter(args: CreateFilterCommandInput, cb: (err: any, data?: CreateFilterCommandOutput) => void): void;
  public createFilter(
    args: CreateFilterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFilterCommandOutput) => void
  ): void;
  public createFilter(
    args: CreateFilterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateFilterCommandOutput) => void),
    cb?: (err: any, data?: CreateFilterCommandOutput) => void
  ): Promise<CreateFilterCommandOutput> | void {
    const command = new CreateFilterCommand(args);
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
   * <p>Creates a new IPSet, which is called a trusted IP list in the console user interface. An
   *       IPSet is a list of IP addresses that are trusted for secure communication with Amazon Web Services
   *       infrastructure and applications. GuardDuty doesn't generate findings for IP addresses that are
   *       included in IPSets. Only users from the administrator account can use this operation.</p>
   */
  public createIPSet(args: CreateIPSetCommandInput, options?: __HttpHandlerOptions): Promise<CreateIPSetCommandOutput>;
  public createIPSet(args: CreateIPSetCommandInput, cb: (err: any, data?: CreateIPSetCommandOutput) => void): void;
  public createIPSet(
    args: CreateIPSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateIPSetCommandOutput) => void
  ): void;
  public createIPSet(
    args: CreateIPSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateIPSetCommandOutput) => void),
    cb?: (err: any, data?: CreateIPSetCommandOutput) => void
  ): Promise<CreateIPSetCommandOutput> | void {
    const command = new CreateIPSetCommand(args);
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
   * <p>Creates member accounts of the current Amazon Web Services account by specifying a list of Amazon Web Services account
   *       IDs. This step is a prerequisite for managing the associated member accounts either by
   *       invitation or through an organization.</p>
   *          <p>When using <code>Create Members</code> as an organizations delegated administrator this
   *       action will enable GuardDuty in the added member accounts, with the exception of the
   *       organization delegated administrator account, which must enable GuardDuty prior to being added as a
   *       member.</p>
   *          <p>If you are adding accounts by invitation use this action after GuardDuty has been enabled
   *       in potential member accounts and before using <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_InviteMembers.html">
   *                <code>Invite
   *         Members</code>
   *             </a>.</p>
   */
  public createMembers(
    args: CreateMembersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateMembersCommandOutput>;
  public createMembers(
    args: CreateMembersCommandInput,
    cb: (err: any, data?: CreateMembersCommandOutput) => void
  ): void;
  public createMembers(
    args: CreateMembersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMembersCommandOutput) => void
  ): void;
  public createMembers(
    args: CreateMembersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateMembersCommandOutput) => void),
    cb?: (err: any, data?: CreateMembersCommandOutput) => void
  ): Promise<CreateMembersCommandOutput> | void {
    const command = new CreateMembersCommand(args);
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
   * <p>Creates a publishing destination to export findings to. The resource to export findings to
   *       must exist before you use this operation.</p>
   */
  public createPublishingDestination(
    args: CreatePublishingDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePublishingDestinationCommandOutput>;
  public createPublishingDestination(
    args: CreatePublishingDestinationCommandInput,
    cb: (err: any, data?: CreatePublishingDestinationCommandOutput) => void
  ): void;
  public createPublishingDestination(
    args: CreatePublishingDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePublishingDestinationCommandOutput) => void
  ): void;
  public createPublishingDestination(
    args: CreatePublishingDestinationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreatePublishingDestinationCommandOutput) => void),
    cb?: (err: any, data?: CreatePublishingDestinationCommandOutput) => void
  ): Promise<CreatePublishingDestinationCommandOutput> | void {
    const command = new CreatePublishingDestinationCommand(args);
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
   * <p>Generates example findings of types specified by the list of finding types. If 'NULL' is
   *       specified for <code>findingTypes</code>, the API generates example findings of all supported
   *       finding types.</p>
   */
  public createSampleFindings(
    args: CreateSampleFindingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSampleFindingsCommandOutput>;
  public createSampleFindings(
    args: CreateSampleFindingsCommandInput,
    cb: (err: any, data?: CreateSampleFindingsCommandOutput) => void
  ): void;
  public createSampleFindings(
    args: CreateSampleFindingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSampleFindingsCommandOutput) => void
  ): void;
  public createSampleFindings(
    args: CreateSampleFindingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateSampleFindingsCommandOutput) => void),
    cb?: (err: any, data?: CreateSampleFindingsCommandOutput) => void
  ): Promise<CreateSampleFindingsCommandOutput> | void {
    const command = new CreateSampleFindingsCommand(args);
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
   * <p>Creates a new ThreatIntelSet. ThreatIntelSets consist of known malicious IP addresses.
   *       GuardDuty generates findings based on ThreatIntelSets. Only users of the administrator account can
   *       use this operation.</p>
   */
  public createThreatIntelSet(
    args: CreateThreatIntelSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateThreatIntelSetCommandOutput>;
  public createThreatIntelSet(
    args: CreateThreatIntelSetCommandInput,
    cb: (err: any, data?: CreateThreatIntelSetCommandOutput) => void
  ): void;
  public createThreatIntelSet(
    args: CreateThreatIntelSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateThreatIntelSetCommandOutput) => void
  ): void;
  public createThreatIntelSet(
    args: CreateThreatIntelSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateThreatIntelSetCommandOutput) => void),
    cb?: (err: any, data?: CreateThreatIntelSetCommandOutput) => void
  ): Promise<CreateThreatIntelSetCommandOutput> | void {
    const command = new CreateThreatIntelSetCommand(args);
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
   * <p>Declines invitations sent to the current member account by Amazon Web Services accounts specified by their
   *       account IDs.</p>
   */
  public declineInvitations(
    args: DeclineInvitationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeclineInvitationsCommandOutput>;
  public declineInvitations(
    args: DeclineInvitationsCommandInput,
    cb: (err: any, data?: DeclineInvitationsCommandOutput) => void
  ): void;
  public declineInvitations(
    args: DeclineInvitationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeclineInvitationsCommandOutput) => void
  ): void;
  public declineInvitations(
    args: DeclineInvitationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeclineInvitationsCommandOutput) => void),
    cb?: (err: any, data?: DeclineInvitationsCommandOutput) => void
  ): Promise<DeclineInvitationsCommandOutput> | void {
    const command = new DeclineInvitationsCommand(args);
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
   * <p>Deletes an Amazon GuardDuty detector that is specified by the detector ID.</p>
   */
  public deleteDetector(
    args: DeleteDetectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDetectorCommandOutput>;
  public deleteDetector(
    args: DeleteDetectorCommandInput,
    cb: (err: any, data?: DeleteDetectorCommandOutput) => void
  ): void;
  public deleteDetector(
    args: DeleteDetectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDetectorCommandOutput) => void
  ): void;
  public deleteDetector(
    args: DeleteDetectorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteDetectorCommandOutput) => void),
    cb?: (err: any, data?: DeleteDetectorCommandOutput) => void
  ): Promise<DeleteDetectorCommandOutput> | void {
    const command = new DeleteDetectorCommand(args);
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
   * <p>Deletes the filter specified by the filter name.</p>
   */
  public deleteFilter(
    args: DeleteFilterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteFilterCommandOutput>;
  public deleteFilter(args: DeleteFilterCommandInput, cb: (err: any, data?: DeleteFilterCommandOutput) => void): void;
  public deleteFilter(
    args: DeleteFilterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFilterCommandOutput) => void
  ): void;
  public deleteFilter(
    args: DeleteFilterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteFilterCommandOutput) => void),
    cb?: (err: any, data?: DeleteFilterCommandOutput) => void
  ): Promise<DeleteFilterCommandOutput> | void {
    const command = new DeleteFilterCommand(args);
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
   * <p>Deletes invitations sent to the current member account by Amazon Web Services accounts specified by their
   *       account IDs.</p>
   */
  public deleteInvitations(
    args: DeleteInvitationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteInvitationsCommandOutput>;
  public deleteInvitations(
    args: DeleteInvitationsCommandInput,
    cb: (err: any, data?: DeleteInvitationsCommandOutput) => void
  ): void;
  public deleteInvitations(
    args: DeleteInvitationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteInvitationsCommandOutput) => void
  ): void;
  public deleteInvitations(
    args: DeleteInvitationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteInvitationsCommandOutput) => void),
    cb?: (err: any, data?: DeleteInvitationsCommandOutput) => void
  ): Promise<DeleteInvitationsCommandOutput> | void {
    const command = new DeleteInvitationsCommand(args);
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
   * <p>Deletes the IPSet specified by the <code>ipSetId</code>. IPSets are called trusted IP
   *       lists in the console user interface.</p>
   */
  public deleteIPSet(args: DeleteIPSetCommandInput, options?: __HttpHandlerOptions): Promise<DeleteIPSetCommandOutput>;
  public deleteIPSet(args: DeleteIPSetCommandInput, cb: (err: any, data?: DeleteIPSetCommandOutput) => void): void;
  public deleteIPSet(
    args: DeleteIPSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteIPSetCommandOutput) => void
  ): void;
  public deleteIPSet(
    args: DeleteIPSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteIPSetCommandOutput) => void),
    cb?: (err: any, data?: DeleteIPSetCommandOutput) => void
  ): Promise<DeleteIPSetCommandOutput> | void {
    const command = new DeleteIPSetCommand(args);
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
   * <p>Deletes GuardDuty member accounts (to the current GuardDuty administrator account) specified by
   *       the account IDs.</p>
   */
  public deleteMembers(
    args: DeleteMembersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteMembersCommandOutput>;
  public deleteMembers(
    args: DeleteMembersCommandInput,
    cb: (err: any, data?: DeleteMembersCommandOutput) => void
  ): void;
  public deleteMembers(
    args: DeleteMembersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMembersCommandOutput) => void
  ): void;
  public deleteMembers(
    args: DeleteMembersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteMembersCommandOutput) => void),
    cb?: (err: any, data?: DeleteMembersCommandOutput) => void
  ): Promise<DeleteMembersCommandOutput> | void {
    const command = new DeleteMembersCommand(args);
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
   * <p>Deletes the publishing definition with the specified <code>destinationId</code>.</p>
   */
  public deletePublishingDestination(
    args: DeletePublishingDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePublishingDestinationCommandOutput>;
  public deletePublishingDestination(
    args: DeletePublishingDestinationCommandInput,
    cb: (err: any, data?: DeletePublishingDestinationCommandOutput) => void
  ): void;
  public deletePublishingDestination(
    args: DeletePublishingDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePublishingDestinationCommandOutput) => void
  ): void;
  public deletePublishingDestination(
    args: DeletePublishingDestinationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeletePublishingDestinationCommandOutput) => void),
    cb?: (err: any, data?: DeletePublishingDestinationCommandOutput) => void
  ): Promise<DeletePublishingDestinationCommandOutput> | void {
    const command = new DeletePublishingDestinationCommand(args);
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
   * <p>Deletes the ThreatIntelSet specified by the ThreatIntelSet ID.</p>
   */
  public deleteThreatIntelSet(
    args: DeleteThreatIntelSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteThreatIntelSetCommandOutput>;
  public deleteThreatIntelSet(
    args: DeleteThreatIntelSetCommandInput,
    cb: (err: any, data?: DeleteThreatIntelSetCommandOutput) => void
  ): void;
  public deleteThreatIntelSet(
    args: DeleteThreatIntelSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteThreatIntelSetCommandOutput) => void
  ): void;
  public deleteThreatIntelSet(
    args: DeleteThreatIntelSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteThreatIntelSetCommandOutput) => void),
    cb?: (err: any, data?: DeleteThreatIntelSetCommandOutput) => void
  ): Promise<DeleteThreatIntelSetCommandOutput> | void {
    const command = new DeleteThreatIntelSetCommand(args);
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
   * <p>Returns a list of malware scans. Each member account can view the malware scans for their
   *       own accounts. An administrator can view the malware scans for all the member accounts.</p>
   */
  public describeMalwareScans(
    args: DescribeMalwareScansCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeMalwareScansCommandOutput>;
  public describeMalwareScans(
    args: DescribeMalwareScansCommandInput,
    cb: (err: any, data?: DescribeMalwareScansCommandOutput) => void
  ): void;
  public describeMalwareScans(
    args: DescribeMalwareScansCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeMalwareScansCommandOutput) => void
  ): void;
  public describeMalwareScans(
    args: DescribeMalwareScansCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeMalwareScansCommandOutput) => void),
    cb?: (err: any, data?: DescribeMalwareScansCommandOutput) => void
  ): Promise<DescribeMalwareScansCommandOutput> | void {
    const command = new DescribeMalwareScansCommand(args);
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
   * <p>Returns information about the account selected as the delegated administrator for
   *       GuardDuty.</p>
   */
  public describeOrganizationConfiguration(
    args: DescribeOrganizationConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeOrganizationConfigurationCommandOutput>;
  public describeOrganizationConfiguration(
    args: DescribeOrganizationConfigurationCommandInput,
    cb: (err: any, data?: DescribeOrganizationConfigurationCommandOutput) => void
  ): void;
  public describeOrganizationConfiguration(
    args: DescribeOrganizationConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeOrganizationConfigurationCommandOutput) => void
  ): void;
  public describeOrganizationConfiguration(
    args: DescribeOrganizationConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeOrganizationConfigurationCommandOutput) => void),
    cb?: (err: any, data?: DescribeOrganizationConfigurationCommandOutput) => void
  ): Promise<DescribeOrganizationConfigurationCommandOutput> | void {
    const command = new DescribeOrganizationConfigurationCommand(args);
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
   * <p>Returns information about the publishing destination specified by the provided
   *         <code>destinationId</code>.</p>
   */
  public describePublishingDestination(
    args: DescribePublishingDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribePublishingDestinationCommandOutput>;
  public describePublishingDestination(
    args: DescribePublishingDestinationCommandInput,
    cb: (err: any, data?: DescribePublishingDestinationCommandOutput) => void
  ): void;
  public describePublishingDestination(
    args: DescribePublishingDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePublishingDestinationCommandOutput) => void
  ): void;
  public describePublishingDestination(
    args: DescribePublishingDestinationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribePublishingDestinationCommandOutput) => void),
    cb?: (err: any, data?: DescribePublishingDestinationCommandOutput) => void
  ): Promise<DescribePublishingDestinationCommandOutput> | void {
    const command = new DescribePublishingDestinationCommand(args);
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
   * <p>Disables an Amazon Web Services account within the Organization as the GuardDuty delegated
   *       administrator.</p>
   */
  public disableOrganizationAdminAccount(
    args: DisableOrganizationAdminAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisableOrganizationAdminAccountCommandOutput>;
  public disableOrganizationAdminAccount(
    args: DisableOrganizationAdminAccountCommandInput,
    cb: (err: any, data?: DisableOrganizationAdminAccountCommandOutput) => void
  ): void;
  public disableOrganizationAdminAccount(
    args: DisableOrganizationAdminAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableOrganizationAdminAccountCommandOutput) => void
  ): void;
  public disableOrganizationAdminAccount(
    args: DisableOrganizationAdminAccountCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisableOrganizationAdminAccountCommandOutput) => void),
    cb?: (err: any, data?: DisableOrganizationAdminAccountCommandOutput) => void
  ): Promise<DisableOrganizationAdminAccountCommandOutput> | void {
    const command = new DisableOrganizationAdminAccountCommand(args);
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
   * <p>Disassociates the current GuardDuty member account from its administrator account.</p>
   */
  public disassociateFromAdministratorAccount(
    args: DisassociateFromAdministratorAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateFromAdministratorAccountCommandOutput>;
  public disassociateFromAdministratorAccount(
    args: DisassociateFromAdministratorAccountCommandInput,
    cb: (err: any, data?: DisassociateFromAdministratorAccountCommandOutput) => void
  ): void;
  public disassociateFromAdministratorAccount(
    args: DisassociateFromAdministratorAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateFromAdministratorAccountCommandOutput) => void
  ): void;
  public disassociateFromAdministratorAccount(
    args: DisassociateFromAdministratorAccountCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisassociateFromAdministratorAccountCommandOutput) => void),
    cb?: (err: any, data?: DisassociateFromAdministratorAccountCommandOutput) => void
  ): Promise<DisassociateFromAdministratorAccountCommandOutput> | void {
    const command = new DisassociateFromAdministratorAccountCommand(args);
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
   * @deprecated
   *
   * <p>Disassociates the current GuardDuty member account from its administrator account.</p>
   */
  public disassociateFromMasterAccount(
    args: DisassociateFromMasterAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateFromMasterAccountCommandOutput>;
  public disassociateFromMasterAccount(
    args: DisassociateFromMasterAccountCommandInput,
    cb: (err: any, data?: DisassociateFromMasterAccountCommandOutput) => void
  ): void;
  public disassociateFromMasterAccount(
    args: DisassociateFromMasterAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateFromMasterAccountCommandOutput) => void
  ): void;
  public disassociateFromMasterAccount(
    args: DisassociateFromMasterAccountCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisassociateFromMasterAccountCommandOutput) => void),
    cb?: (err: any, data?: DisassociateFromMasterAccountCommandOutput) => void
  ): Promise<DisassociateFromMasterAccountCommandOutput> | void {
    const command = new DisassociateFromMasterAccountCommand(args);
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
   * <p>Disassociates GuardDuty member accounts (to the current administrator account) specified by the account IDs.</p>
   */
  public disassociateMembers(
    args: DisassociateMembersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateMembersCommandOutput>;
  public disassociateMembers(
    args: DisassociateMembersCommandInput,
    cb: (err: any, data?: DisassociateMembersCommandOutput) => void
  ): void;
  public disassociateMembers(
    args: DisassociateMembersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateMembersCommandOutput) => void
  ): void;
  public disassociateMembers(
    args: DisassociateMembersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisassociateMembersCommandOutput) => void),
    cb?: (err: any, data?: DisassociateMembersCommandOutput) => void
  ): Promise<DisassociateMembersCommandOutput> | void {
    const command = new DisassociateMembersCommand(args);
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
   * <p>Enables an Amazon Web Services account within the organization as the GuardDuty delegated
   *       administrator.</p>
   */
  public enableOrganizationAdminAccount(
    args: EnableOrganizationAdminAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EnableOrganizationAdminAccountCommandOutput>;
  public enableOrganizationAdminAccount(
    args: EnableOrganizationAdminAccountCommandInput,
    cb: (err: any, data?: EnableOrganizationAdminAccountCommandOutput) => void
  ): void;
  public enableOrganizationAdminAccount(
    args: EnableOrganizationAdminAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableOrganizationAdminAccountCommandOutput) => void
  ): void;
  public enableOrganizationAdminAccount(
    args: EnableOrganizationAdminAccountCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: EnableOrganizationAdminAccountCommandOutput) => void),
    cb?: (err: any, data?: EnableOrganizationAdminAccountCommandOutput) => void
  ): Promise<EnableOrganizationAdminAccountCommandOutput> | void {
    const command = new EnableOrganizationAdminAccountCommand(args);
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
   * <p>Provides the details for the GuardDuty administrator account associated with the current
   *       GuardDuty member account.</p>
   */
  public getAdministratorAccount(
    args: GetAdministratorAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAdministratorAccountCommandOutput>;
  public getAdministratorAccount(
    args: GetAdministratorAccountCommandInput,
    cb: (err: any, data?: GetAdministratorAccountCommandOutput) => void
  ): void;
  public getAdministratorAccount(
    args: GetAdministratorAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAdministratorAccountCommandOutput) => void
  ): void;
  public getAdministratorAccount(
    args: GetAdministratorAccountCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetAdministratorAccountCommandOutput) => void),
    cb?: (err: any, data?: GetAdministratorAccountCommandOutput) => void
  ): Promise<GetAdministratorAccountCommandOutput> | void {
    const command = new GetAdministratorAccountCommand(args);
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
   * <p>Retrieves an Amazon GuardDuty detector specified by the detectorId.</p>
   */
  public getDetector(args: GetDetectorCommandInput, options?: __HttpHandlerOptions): Promise<GetDetectorCommandOutput>;
  public getDetector(args: GetDetectorCommandInput, cb: (err: any, data?: GetDetectorCommandOutput) => void): void;
  public getDetector(
    args: GetDetectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDetectorCommandOutput) => void
  ): void;
  public getDetector(
    args: GetDetectorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDetectorCommandOutput) => void),
    cb?: (err: any, data?: GetDetectorCommandOutput) => void
  ): Promise<GetDetectorCommandOutput> | void {
    const command = new GetDetectorCommand(args);
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
   * <p>Returns the details of the filter specified by the filter name.</p>
   */
  public getFilter(args: GetFilterCommandInput, options?: __HttpHandlerOptions): Promise<GetFilterCommandOutput>;
  public getFilter(args: GetFilterCommandInput, cb: (err: any, data?: GetFilterCommandOutput) => void): void;
  public getFilter(
    args: GetFilterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFilterCommandOutput) => void
  ): void;
  public getFilter(
    args: GetFilterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetFilterCommandOutput) => void),
    cb?: (err: any, data?: GetFilterCommandOutput) => void
  ): Promise<GetFilterCommandOutput> | void {
    const command = new GetFilterCommand(args);
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
   * <p>Describes Amazon GuardDuty findings specified by finding IDs.</p>
   */
  public getFindings(args: GetFindingsCommandInput, options?: __HttpHandlerOptions): Promise<GetFindingsCommandOutput>;
  public getFindings(args: GetFindingsCommandInput, cb: (err: any, data?: GetFindingsCommandOutput) => void): void;
  public getFindings(
    args: GetFindingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFindingsCommandOutput) => void
  ): void;
  public getFindings(
    args: GetFindingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetFindingsCommandOutput) => void),
    cb?: (err: any, data?: GetFindingsCommandOutput) => void
  ): Promise<GetFindingsCommandOutput> | void {
    const command = new GetFindingsCommand(args);
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
   * <p>Lists Amazon GuardDuty findings statistics for the specified detector ID.</p>
   */
  public getFindingsStatistics(
    args: GetFindingsStatisticsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetFindingsStatisticsCommandOutput>;
  public getFindingsStatistics(
    args: GetFindingsStatisticsCommandInput,
    cb: (err: any, data?: GetFindingsStatisticsCommandOutput) => void
  ): void;
  public getFindingsStatistics(
    args: GetFindingsStatisticsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFindingsStatisticsCommandOutput) => void
  ): void;
  public getFindingsStatistics(
    args: GetFindingsStatisticsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetFindingsStatisticsCommandOutput) => void),
    cb?: (err: any, data?: GetFindingsStatisticsCommandOutput) => void
  ): Promise<GetFindingsStatisticsCommandOutput> | void {
    const command = new GetFindingsStatisticsCommand(args);
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
   * <p>Returns the count of all GuardDuty membership invitations that were sent to the current
   *       member account except the currently accepted invitation.</p>
   */
  public getInvitationsCount(
    args: GetInvitationsCountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetInvitationsCountCommandOutput>;
  public getInvitationsCount(
    args: GetInvitationsCountCommandInput,
    cb: (err: any, data?: GetInvitationsCountCommandOutput) => void
  ): void;
  public getInvitationsCount(
    args: GetInvitationsCountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetInvitationsCountCommandOutput) => void
  ): void;
  public getInvitationsCount(
    args: GetInvitationsCountCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetInvitationsCountCommandOutput) => void),
    cb?: (err: any, data?: GetInvitationsCountCommandOutput) => void
  ): Promise<GetInvitationsCountCommandOutput> | void {
    const command = new GetInvitationsCountCommand(args);
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
   * <p>Retrieves the IPSet specified by the <code>ipSetId</code>.</p>
   */
  public getIPSet(args: GetIPSetCommandInput, options?: __HttpHandlerOptions): Promise<GetIPSetCommandOutput>;
  public getIPSet(args: GetIPSetCommandInput, cb: (err: any, data?: GetIPSetCommandOutput) => void): void;
  public getIPSet(
    args: GetIPSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetIPSetCommandOutput) => void
  ): void;
  public getIPSet(
    args: GetIPSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetIPSetCommandOutput) => void),
    cb?: (err: any, data?: GetIPSetCommandOutput) => void
  ): Promise<GetIPSetCommandOutput> | void {
    const command = new GetIPSetCommand(args);
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
   * <p>Returns the details of the malware scan settings.</p>
   */
  public getMalwareScanSettings(
    args: GetMalwareScanSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMalwareScanSettingsCommandOutput>;
  public getMalwareScanSettings(
    args: GetMalwareScanSettingsCommandInput,
    cb: (err: any, data?: GetMalwareScanSettingsCommandOutput) => void
  ): void;
  public getMalwareScanSettings(
    args: GetMalwareScanSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMalwareScanSettingsCommandOutput) => void
  ): void;
  public getMalwareScanSettings(
    args: GetMalwareScanSettingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetMalwareScanSettingsCommandOutput) => void),
    cb?: (err: any, data?: GetMalwareScanSettingsCommandOutput) => void
  ): Promise<GetMalwareScanSettingsCommandOutput> | void {
    const command = new GetMalwareScanSettingsCommand(args);
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
   * @deprecated
   *
   * <p>Provides the details for the GuardDuty administrator account associated with the current
   *       GuardDuty member account.</p>
   */
  public getMasterAccount(
    args: GetMasterAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMasterAccountCommandOutput>;
  public getMasterAccount(
    args: GetMasterAccountCommandInput,
    cb: (err: any, data?: GetMasterAccountCommandOutput) => void
  ): void;
  public getMasterAccount(
    args: GetMasterAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMasterAccountCommandOutput) => void
  ): void;
  public getMasterAccount(
    args: GetMasterAccountCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetMasterAccountCommandOutput) => void),
    cb?: (err: any, data?: GetMasterAccountCommandOutput) => void
  ): Promise<GetMasterAccountCommandOutput> | void {
    const command = new GetMasterAccountCommand(args);
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
   * <p>Describes which data sources are enabled for the member account's detector.</p>
   */
  public getMemberDetectors(
    args: GetMemberDetectorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMemberDetectorsCommandOutput>;
  public getMemberDetectors(
    args: GetMemberDetectorsCommandInput,
    cb: (err: any, data?: GetMemberDetectorsCommandOutput) => void
  ): void;
  public getMemberDetectors(
    args: GetMemberDetectorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMemberDetectorsCommandOutput) => void
  ): void;
  public getMemberDetectors(
    args: GetMemberDetectorsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetMemberDetectorsCommandOutput) => void),
    cb?: (err: any, data?: GetMemberDetectorsCommandOutput) => void
  ): Promise<GetMemberDetectorsCommandOutput> | void {
    const command = new GetMemberDetectorsCommand(args);
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
   * <p>Retrieves GuardDuty member accounts (of the current GuardDuty administrator account) specified by
   *       the account IDs.</p>
   */
  public getMembers(args: GetMembersCommandInput, options?: __HttpHandlerOptions): Promise<GetMembersCommandOutput>;
  public getMembers(args: GetMembersCommandInput, cb: (err: any, data?: GetMembersCommandOutput) => void): void;
  public getMembers(
    args: GetMembersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMembersCommandOutput) => void
  ): void;
  public getMembers(
    args: GetMembersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetMembersCommandOutput) => void),
    cb?: (err: any, data?: GetMembersCommandOutput) => void
  ): Promise<GetMembersCommandOutput> | void {
    const command = new GetMembersCommand(args);
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
   * <p>Provides the number of days left for each data source used in the free trial period.</p>
   */
  public getRemainingFreeTrialDays(
    args: GetRemainingFreeTrialDaysCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRemainingFreeTrialDaysCommandOutput>;
  public getRemainingFreeTrialDays(
    args: GetRemainingFreeTrialDaysCommandInput,
    cb: (err: any, data?: GetRemainingFreeTrialDaysCommandOutput) => void
  ): void;
  public getRemainingFreeTrialDays(
    args: GetRemainingFreeTrialDaysCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRemainingFreeTrialDaysCommandOutput) => void
  ): void;
  public getRemainingFreeTrialDays(
    args: GetRemainingFreeTrialDaysCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetRemainingFreeTrialDaysCommandOutput) => void),
    cb?: (err: any, data?: GetRemainingFreeTrialDaysCommandOutput) => void
  ): Promise<GetRemainingFreeTrialDaysCommandOutput> | void {
    const command = new GetRemainingFreeTrialDaysCommand(args);
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
   * <p>Retrieves the ThreatIntelSet that is specified by the ThreatIntelSet ID.</p>
   */
  public getThreatIntelSet(
    args: GetThreatIntelSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetThreatIntelSetCommandOutput>;
  public getThreatIntelSet(
    args: GetThreatIntelSetCommandInput,
    cb: (err: any, data?: GetThreatIntelSetCommandOutput) => void
  ): void;
  public getThreatIntelSet(
    args: GetThreatIntelSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetThreatIntelSetCommandOutput) => void
  ): void;
  public getThreatIntelSet(
    args: GetThreatIntelSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetThreatIntelSetCommandOutput) => void),
    cb?: (err: any, data?: GetThreatIntelSetCommandOutput) => void
  ): Promise<GetThreatIntelSetCommandOutput> | void {
    const command = new GetThreatIntelSetCommand(args);
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
   * <p>Lists Amazon GuardDuty usage statistics over the last 30 days for the specified detector
   *       ID. For newly enabled detectors or data sources, the cost returned will include only the usage
   *       so far under 30 days. This may differ from the cost metrics in the console, which project
   *       usage over 30 days to provide a monthly cost estimate. For more information, see <a href="https://docs.aws.amazon.com/guardduty/latest/ug/monitoring_costs.html#usage-calculations">Understanding How Usage Costs are Calculated</a>.</p>
   */
  public getUsageStatistics(
    args: GetUsageStatisticsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetUsageStatisticsCommandOutput>;
  public getUsageStatistics(
    args: GetUsageStatisticsCommandInput,
    cb: (err: any, data?: GetUsageStatisticsCommandOutput) => void
  ): void;
  public getUsageStatistics(
    args: GetUsageStatisticsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetUsageStatisticsCommandOutput) => void
  ): void;
  public getUsageStatistics(
    args: GetUsageStatisticsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetUsageStatisticsCommandOutput) => void),
    cb?: (err: any, data?: GetUsageStatisticsCommandOutput) => void
  ): Promise<GetUsageStatisticsCommandOutput> | void {
    const command = new GetUsageStatisticsCommand(args);
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
   * <p>Invites other Amazon Web Services accounts (created as members of the current Amazon Web Services account by
   *       CreateMembers) to enable GuardDuty, and allow the current Amazon Web Services account to view and manage these
   *       accounts' findings on their behalf as the GuardDuty administrator account.</p>
   */
  public inviteMembers(
    args: InviteMembersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<InviteMembersCommandOutput>;
  public inviteMembers(
    args: InviteMembersCommandInput,
    cb: (err: any, data?: InviteMembersCommandOutput) => void
  ): void;
  public inviteMembers(
    args: InviteMembersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: InviteMembersCommandOutput) => void
  ): void;
  public inviteMembers(
    args: InviteMembersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: InviteMembersCommandOutput) => void),
    cb?: (err: any, data?: InviteMembersCommandOutput) => void
  ): Promise<InviteMembersCommandOutput> | void {
    const command = new InviteMembersCommand(args);
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
   * <p>Lists detectorIds of all the existing Amazon GuardDuty detector resources.</p>
   */
  public listDetectors(
    args: ListDetectorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDetectorsCommandOutput>;
  public listDetectors(
    args: ListDetectorsCommandInput,
    cb: (err: any, data?: ListDetectorsCommandOutput) => void
  ): void;
  public listDetectors(
    args: ListDetectorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDetectorsCommandOutput) => void
  ): void;
  public listDetectors(
    args: ListDetectorsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDetectorsCommandOutput) => void),
    cb?: (err: any, data?: ListDetectorsCommandOutput) => void
  ): Promise<ListDetectorsCommandOutput> | void {
    const command = new ListDetectorsCommand(args);
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
   * <p>Returns a paginated list of the current filters.</p>
   */
  public listFilters(args: ListFiltersCommandInput, options?: __HttpHandlerOptions): Promise<ListFiltersCommandOutput>;
  public listFilters(args: ListFiltersCommandInput, cb: (err: any, data?: ListFiltersCommandOutput) => void): void;
  public listFilters(
    args: ListFiltersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFiltersCommandOutput) => void
  ): void;
  public listFilters(
    args: ListFiltersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListFiltersCommandOutput) => void),
    cb?: (err: any, data?: ListFiltersCommandOutput) => void
  ): Promise<ListFiltersCommandOutput> | void {
    const command = new ListFiltersCommand(args);
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
   * <p>Lists Amazon GuardDuty findings for the specified detector ID.</p>
   */
  public listFindings(
    args: ListFindingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFindingsCommandOutput>;
  public listFindings(args: ListFindingsCommandInput, cb: (err: any, data?: ListFindingsCommandOutput) => void): void;
  public listFindings(
    args: ListFindingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFindingsCommandOutput) => void
  ): void;
  public listFindings(
    args: ListFindingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListFindingsCommandOutput) => void),
    cb?: (err: any, data?: ListFindingsCommandOutput) => void
  ): Promise<ListFindingsCommandOutput> | void {
    const command = new ListFindingsCommand(args);
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
   * <p>Lists all GuardDuty membership invitations that were sent to the current Amazon Web Services
   *       account.</p>
   */
  public listInvitations(
    args: ListInvitationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListInvitationsCommandOutput>;
  public listInvitations(
    args: ListInvitationsCommandInput,
    cb: (err: any, data?: ListInvitationsCommandOutput) => void
  ): void;
  public listInvitations(
    args: ListInvitationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListInvitationsCommandOutput) => void
  ): void;
  public listInvitations(
    args: ListInvitationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListInvitationsCommandOutput) => void),
    cb?: (err: any, data?: ListInvitationsCommandOutput) => void
  ): Promise<ListInvitationsCommandOutput> | void {
    const command = new ListInvitationsCommand(args);
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
   * <p>Lists the IPSets of the GuardDuty service specified by the detector ID. If you use this
   *       operation from a member account, the IPSets returned are the IPSets from the associated administrator
   *       account.</p>
   */
  public listIPSets(args: ListIPSetsCommandInput, options?: __HttpHandlerOptions): Promise<ListIPSetsCommandOutput>;
  public listIPSets(args: ListIPSetsCommandInput, cb: (err: any, data?: ListIPSetsCommandOutput) => void): void;
  public listIPSets(
    args: ListIPSetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListIPSetsCommandOutput) => void
  ): void;
  public listIPSets(
    args: ListIPSetsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListIPSetsCommandOutput) => void),
    cb?: (err: any, data?: ListIPSetsCommandOutput) => void
  ): Promise<ListIPSetsCommandOutput> | void {
    const command = new ListIPSetsCommand(args);
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
   * <p>Lists details about all member accounts for the current GuardDuty administrator account.</p>
   */
  public listMembers(args: ListMembersCommandInput, options?: __HttpHandlerOptions): Promise<ListMembersCommandOutput>;
  public listMembers(args: ListMembersCommandInput, cb: (err: any, data?: ListMembersCommandOutput) => void): void;
  public listMembers(
    args: ListMembersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMembersCommandOutput) => void
  ): void;
  public listMembers(
    args: ListMembersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListMembersCommandOutput) => void),
    cb?: (err: any, data?: ListMembersCommandOutput) => void
  ): Promise<ListMembersCommandOutput> | void {
    const command = new ListMembersCommand(args);
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
   * <p>Lists the accounts configured as GuardDuty delegated administrators.</p>
   */
  public listOrganizationAdminAccounts(
    args: ListOrganizationAdminAccountsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListOrganizationAdminAccountsCommandOutput>;
  public listOrganizationAdminAccounts(
    args: ListOrganizationAdminAccountsCommandInput,
    cb: (err: any, data?: ListOrganizationAdminAccountsCommandOutput) => void
  ): void;
  public listOrganizationAdminAccounts(
    args: ListOrganizationAdminAccountsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListOrganizationAdminAccountsCommandOutput) => void
  ): void;
  public listOrganizationAdminAccounts(
    args: ListOrganizationAdminAccountsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListOrganizationAdminAccountsCommandOutput) => void),
    cb?: (err: any, data?: ListOrganizationAdminAccountsCommandOutput) => void
  ): Promise<ListOrganizationAdminAccountsCommandOutput> | void {
    const command = new ListOrganizationAdminAccountsCommand(args);
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
   * <p>Returns a list of publishing destinations associated with the specified
   *         <code>detectorId</code>.</p>
   */
  public listPublishingDestinations(
    args: ListPublishingDestinationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPublishingDestinationsCommandOutput>;
  public listPublishingDestinations(
    args: ListPublishingDestinationsCommandInput,
    cb: (err: any, data?: ListPublishingDestinationsCommandOutput) => void
  ): void;
  public listPublishingDestinations(
    args: ListPublishingDestinationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPublishingDestinationsCommandOutput) => void
  ): void;
  public listPublishingDestinations(
    args: ListPublishingDestinationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListPublishingDestinationsCommandOutput) => void),
    cb?: (err: any, data?: ListPublishingDestinationsCommandOutput) => void
  ): Promise<ListPublishingDestinationsCommandOutput> | void {
    const command = new ListPublishingDestinationsCommand(args);
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
   * <p>Lists tags for a resource. Tagging is currently supported for detectors, finding filters,
   *       IP sets, and threat intel sets, with a limit of 50 tags per resource. When invoked, this
   *       operation returns all assigned tags for a given resource.</p>
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
   * <p>Lists the ThreatIntelSets of the GuardDuty service specified by the detector ID. If you
   *       use this operation from a member account, the ThreatIntelSets associated with the administrator
   *       account are returned.</p>
   */
  public listThreatIntelSets(
    args: ListThreatIntelSetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListThreatIntelSetsCommandOutput>;
  public listThreatIntelSets(
    args: ListThreatIntelSetsCommandInput,
    cb: (err: any, data?: ListThreatIntelSetsCommandOutput) => void
  ): void;
  public listThreatIntelSets(
    args: ListThreatIntelSetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListThreatIntelSetsCommandOutput) => void
  ): void;
  public listThreatIntelSets(
    args: ListThreatIntelSetsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListThreatIntelSetsCommandOutput) => void),
    cb?: (err: any, data?: ListThreatIntelSetsCommandOutput) => void
  ): Promise<ListThreatIntelSetsCommandOutput> | void {
    const command = new ListThreatIntelSetsCommand(args);
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
   * <p>Turns on GuardDuty monitoring of the specified member accounts. Use this operation to
   *       restart monitoring of accounts that you stopped monitoring with the
   *         <code>StopMonitoringMembers</code> operation.</p>
   */
  public startMonitoringMembers(
    args: StartMonitoringMembersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartMonitoringMembersCommandOutput>;
  public startMonitoringMembers(
    args: StartMonitoringMembersCommandInput,
    cb: (err: any, data?: StartMonitoringMembersCommandOutput) => void
  ): void;
  public startMonitoringMembers(
    args: StartMonitoringMembersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartMonitoringMembersCommandOutput) => void
  ): void;
  public startMonitoringMembers(
    args: StartMonitoringMembersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartMonitoringMembersCommandOutput) => void),
    cb?: (err: any, data?: StartMonitoringMembersCommandOutput) => void
  ): Promise<StartMonitoringMembersCommandOutput> | void {
    const command = new StartMonitoringMembersCommand(args);
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
   * <p>Stops GuardDuty monitoring for the specified member accounts. Use the
   *         <code>StartMonitoringMembers</code> operation to restart monitoring for those
   *       accounts.</p>
   */
  public stopMonitoringMembers(
    args: StopMonitoringMembersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopMonitoringMembersCommandOutput>;
  public stopMonitoringMembers(
    args: StopMonitoringMembersCommandInput,
    cb: (err: any, data?: StopMonitoringMembersCommandOutput) => void
  ): void;
  public stopMonitoringMembers(
    args: StopMonitoringMembersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopMonitoringMembersCommandOutput) => void
  ): void;
  public stopMonitoringMembers(
    args: StopMonitoringMembersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StopMonitoringMembersCommandOutput) => void),
    cb?: (err: any, data?: StopMonitoringMembersCommandOutput) => void
  ): Promise<StopMonitoringMembersCommandOutput> | void {
    const command = new StopMonitoringMembersCommand(args);
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
   * <p>Adds tags to a resource.</p>
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
   * <p>Unarchives GuardDuty findings specified by the <code>findingIds</code>.</p>
   */
  public unarchiveFindings(
    args: UnarchiveFindingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UnarchiveFindingsCommandOutput>;
  public unarchiveFindings(
    args: UnarchiveFindingsCommandInput,
    cb: (err: any, data?: UnarchiveFindingsCommandOutput) => void
  ): void;
  public unarchiveFindings(
    args: UnarchiveFindingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UnarchiveFindingsCommandOutput) => void
  ): void;
  public unarchiveFindings(
    args: UnarchiveFindingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UnarchiveFindingsCommandOutput) => void),
    cb?: (err: any, data?: UnarchiveFindingsCommandOutput) => void
  ): Promise<UnarchiveFindingsCommandOutput> | void {
    const command = new UnarchiveFindingsCommand(args);
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
   * <p>Removes tags from a resource.</p>
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
   * <p>Updates the Amazon GuardDuty detector specified by the detectorId.</p>
   */
  public updateDetector(
    args: UpdateDetectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDetectorCommandOutput>;
  public updateDetector(
    args: UpdateDetectorCommandInput,
    cb: (err: any, data?: UpdateDetectorCommandOutput) => void
  ): void;
  public updateDetector(
    args: UpdateDetectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDetectorCommandOutput) => void
  ): void;
  public updateDetector(
    args: UpdateDetectorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateDetectorCommandOutput) => void),
    cb?: (err: any, data?: UpdateDetectorCommandOutput) => void
  ): Promise<UpdateDetectorCommandOutput> | void {
    const command = new UpdateDetectorCommand(args);
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
   * <p>Updates the filter specified by the filter name.</p>
   */
  public updateFilter(
    args: UpdateFilterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFilterCommandOutput>;
  public updateFilter(args: UpdateFilterCommandInput, cb: (err: any, data?: UpdateFilterCommandOutput) => void): void;
  public updateFilter(
    args: UpdateFilterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFilterCommandOutput) => void
  ): void;
  public updateFilter(
    args: UpdateFilterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateFilterCommandOutput) => void),
    cb?: (err: any, data?: UpdateFilterCommandOutput) => void
  ): Promise<UpdateFilterCommandOutput> | void {
    const command = new UpdateFilterCommand(args);
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
   * <p>Marks the specified GuardDuty findings as useful or not useful.</p>
   */
  public updateFindingsFeedback(
    args: UpdateFindingsFeedbackCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFindingsFeedbackCommandOutput>;
  public updateFindingsFeedback(
    args: UpdateFindingsFeedbackCommandInput,
    cb: (err: any, data?: UpdateFindingsFeedbackCommandOutput) => void
  ): void;
  public updateFindingsFeedback(
    args: UpdateFindingsFeedbackCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFindingsFeedbackCommandOutput) => void
  ): void;
  public updateFindingsFeedback(
    args: UpdateFindingsFeedbackCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateFindingsFeedbackCommandOutput) => void),
    cb?: (err: any, data?: UpdateFindingsFeedbackCommandOutput) => void
  ): Promise<UpdateFindingsFeedbackCommandOutput> | void {
    const command = new UpdateFindingsFeedbackCommand(args);
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
   * <p>Updates the IPSet specified by the IPSet ID.</p>
   */
  public updateIPSet(args: UpdateIPSetCommandInput, options?: __HttpHandlerOptions): Promise<UpdateIPSetCommandOutput>;
  public updateIPSet(args: UpdateIPSetCommandInput, cb: (err: any, data?: UpdateIPSetCommandOutput) => void): void;
  public updateIPSet(
    args: UpdateIPSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateIPSetCommandOutput) => void
  ): void;
  public updateIPSet(
    args: UpdateIPSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateIPSetCommandOutput) => void),
    cb?: (err: any, data?: UpdateIPSetCommandOutput) => void
  ): Promise<UpdateIPSetCommandOutput> | void {
    const command = new UpdateIPSetCommand(args);
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
   * <p>Updates the malware scan settings.</p>
   */
  public updateMalwareScanSettings(
    args: UpdateMalwareScanSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateMalwareScanSettingsCommandOutput>;
  public updateMalwareScanSettings(
    args: UpdateMalwareScanSettingsCommandInput,
    cb: (err: any, data?: UpdateMalwareScanSettingsCommandOutput) => void
  ): void;
  public updateMalwareScanSettings(
    args: UpdateMalwareScanSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateMalwareScanSettingsCommandOutput) => void
  ): void;
  public updateMalwareScanSettings(
    args: UpdateMalwareScanSettingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateMalwareScanSettingsCommandOutput) => void),
    cb?: (err: any, data?: UpdateMalwareScanSettingsCommandOutput) => void
  ): Promise<UpdateMalwareScanSettingsCommandOutput> | void {
    const command = new UpdateMalwareScanSettingsCommand(args);
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
   * <p>Contains information on member accounts to be updated.</p>
   */
  public updateMemberDetectors(
    args: UpdateMemberDetectorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateMemberDetectorsCommandOutput>;
  public updateMemberDetectors(
    args: UpdateMemberDetectorsCommandInput,
    cb: (err: any, data?: UpdateMemberDetectorsCommandOutput) => void
  ): void;
  public updateMemberDetectors(
    args: UpdateMemberDetectorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateMemberDetectorsCommandOutput) => void
  ): void;
  public updateMemberDetectors(
    args: UpdateMemberDetectorsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateMemberDetectorsCommandOutput) => void),
    cb?: (err: any, data?: UpdateMemberDetectorsCommandOutput) => void
  ): Promise<UpdateMemberDetectorsCommandOutput> | void {
    const command = new UpdateMemberDetectorsCommand(args);
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
   * <p>Updates the delegated administrator account with the values provided.</p>
   */
  public updateOrganizationConfiguration(
    args: UpdateOrganizationConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateOrganizationConfigurationCommandOutput>;
  public updateOrganizationConfiguration(
    args: UpdateOrganizationConfigurationCommandInput,
    cb: (err: any, data?: UpdateOrganizationConfigurationCommandOutput) => void
  ): void;
  public updateOrganizationConfiguration(
    args: UpdateOrganizationConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateOrganizationConfigurationCommandOutput) => void
  ): void;
  public updateOrganizationConfiguration(
    args: UpdateOrganizationConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateOrganizationConfigurationCommandOutput) => void),
    cb?: (err: any, data?: UpdateOrganizationConfigurationCommandOutput) => void
  ): Promise<UpdateOrganizationConfigurationCommandOutput> | void {
    const command = new UpdateOrganizationConfigurationCommand(args);
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
   * <p>Updates information about the publishing destination specified by the
   *         <code>destinationId</code>.</p>
   */
  public updatePublishingDestination(
    args: UpdatePublishingDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePublishingDestinationCommandOutput>;
  public updatePublishingDestination(
    args: UpdatePublishingDestinationCommandInput,
    cb: (err: any, data?: UpdatePublishingDestinationCommandOutput) => void
  ): void;
  public updatePublishingDestination(
    args: UpdatePublishingDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePublishingDestinationCommandOutput) => void
  ): void;
  public updatePublishingDestination(
    args: UpdatePublishingDestinationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdatePublishingDestinationCommandOutput) => void),
    cb?: (err: any, data?: UpdatePublishingDestinationCommandOutput) => void
  ): Promise<UpdatePublishingDestinationCommandOutput> | void {
    const command = new UpdatePublishingDestinationCommand(args);
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
   * <p>Updates the ThreatIntelSet specified by the ThreatIntelSet ID.</p>
   */
  public updateThreatIntelSet(
    args: UpdateThreatIntelSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateThreatIntelSetCommandOutput>;
  public updateThreatIntelSet(
    args: UpdateThreatIntelSetCommandInput,
    cb: (err: any, data?: UpdateThreatIntelSetCommandOutput) => void
  ): void;
  public updateThreatIntelSet(
    args: UpdateThreatIntelSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateThreatIntelSetCommandOutput) => void
  ): void;
  public updateThreatIntelSet(
    args: UpdateThreatIntelSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateThreatIntelSetCommandOutput) => void),
    cb?: (err: any, data?: UpdateThreatIntelSetCommandOutput) => void
  ): Promise<UpdateThreatIntelSetCommandOutput> | void {
    const command = new UpdateThreatIntelSetCommand(args);
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
