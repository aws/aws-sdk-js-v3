import { GuardDutyClient } from "./GuardDutyClient";
import { AcceptInvitationInput } from "./types/AcceptInvitationInput";
import { AcceptInvitationOutput } from "./types/AcceptInvitationOutput";
import { ArchiveFindingsInput } from "./types/ArchiveFindingsInput";
import { ArchiveFindingsOutput } from "./types/ArchiveFindingsOutput";
import { BadRequestException } from "./types/BadRequestException";
import { CreateDetectorInput } from "./types/CreateDetectorInput";
import { CreateDetectorOutput } from "./types/CreateDetectorOutput";
import { CreateFilterInput } from "./types/CreateFilterInput";
import { CreateFilterOutput } from "./types/CreateFilterOutput";
import { CreateIPSetInput } from "./types/CreateIPSetInput";
import { CreateIPSetOutput } from "./types/CreateIPSetOutput";
import { CreateMembersInput } from "./types/CreateMembersInput";
import { CreateMembersOutput } from "./types/CreateMembersOutput";
import { CreateSampleFindingsInput } from "./types/CreateSampleFindingsInput";
import { CreateSampleFindingsOutput } from "./types/CreateSampleFindingsOutput";
import { CreateThreatIntelSetInput } from "./types/CreateThreatIntelSetInput";
import { CreateThreatIntelSetOutput } from "./types/CreateThreatIntelSetOutput";
import { DeclineInvitationsInput } from "./types/DeclineInvitationsInput";
import { DeclineInvitationsOutput } from "./types/DeclineInvitationsOutput";
import { DeleteDetectorInput } from "./types/DeleteDetectorInput";
import { DeleteDetectorOutput } from "./types/DeleteDetectorOutput";
import { DeleteFilterInput } from "./types/DeleteFilterInput";
import { DeleteFilterOutput } from "./types/DeleteFilterOutput";
import { DeleteIPSetInput } from "./types/DeleteIPSetInput";
import { DeleteIPSetOutput } from "./types/DeleteIPSetOutput";
import { DeleteInvitationsInput } from "./types/DeleteInvitationsInput";
import { DeleteInvitationsOutput } from "./types/DeleteInvitationsOutput";
import { DeleteMembersInput } from "./types/DeleteMembersInput";
import { DeleteMembersOutput } from "./types/DeleteMembersOutput";
import { DeleteThreatIntelSetInput } from "./types/DeleteThreatIntelSetInput";
import { DeleteThreatIntelSetOutput } from "./types/DeleteThreatIntelSetOutput";
import { DisassociateFromMasterAccountInput } from "./types/DisassociateFromMasterAccountInput";
import { DisassociateFromMasterAccountOutput } from "./types/DisassociateFromMasterAccountOutput";
import { DisassociateMembersInput } from "./types/DisassociateMembersInput";
import { DisassociateMembersOutput } from "./types/DisassociateMembersOutput";
import { GetDetectorInput } from "./types/GetDetectorInput";
import { GetDetectorOutput } from "./types/GetDetectorOutput";
import { GetFilterInput } from "./types/GetFilterInput";
import { GetFilterOutput } from "./types/GetFilterOutput";
import { GetFindingsInput } from "./types/GetFindingsInput";
import { GetFindingsOutput } from "./types/GetFindingsOutput";
import { GetFindingsStatisticsInput } from "./types/GetFindingsStatisticsInput";
import { GetFindingsStatisticsOutput } from "./types/GetFindingsStatisticsOutput";
import { GetIPSetInput } from "./types/GetIPSetInput";
import { GetIPSetOutput } from "./types/GetIPSetOutput";
import { GetInvitationsCountInput } from "./types/GetInvitationsCountInput";
import { GetInvitationsCountOutput } from "./types/GetInvitationsCountOutput";
import { GetMasterAccountInput } from "./types/GetMasterAccountInput";
import { GetMasterAccountOutput } from "./types/GetMasterAccountOutput";
import { GetMembersInput } from "./types/GetMembersInput";
import { GetMembersOutput } from "./types/GetMembersOutput";
import { GetThreatIntelSetInput } from "./types/GetThreatIntelSetInput";
import { GetThreatIntelSetOutput } from "./types/GetThreatIntelSetOutput";
import { InternalServerErrorException } from "./types/InternalServerErrorException";
import { InviteMembersInput } from "./types/InviteMembersInput";
import { InviteMembersOutput } from "./types/InviteMembersOutput";
import { ListDetectorsInput } from "./types/ListDetectorsInput";
import { ListDetectorsOutput } from "./types/ListDetectorsOutput";
import { ListFiltersInput } from "./types/ListFiltersInput";
import { ListFiltersOutput } from "./types/ListFiltersOutput";
import { ListFindingsInput } from "./types/ListFindingsInput";
import { ListFindingsOutput } from "./types/ListFindingsOutput";
import { ListIPSetsInput } from "./types/ListIPSetsInput";
import { ListIPSetsOutput } from "./types/ListIPSetsOutput";
import { ListInvitationsInput } from "./types/ListInvitationsInput";
import { ListInvitationsOutput } from "./types/ListInvitationsOutput";
import { ListMembersInput } from "./types/ListMembersInput";
import { ListMembersOutput } from "./types/ListMembersOutput";
import { ListTagsForResourceInput } from "./types/ListTagsForResourceInput";
import { ListTagsForResourceOutput } from "./types/ListTagsForResourceOutput";
import { ListThreatIntelSetsInput } from "./types/ListThreatIntelSetsInput";
import { ListThreatIntelSetsOutput } from "./types/ListThreatIntelSetsOutput";
import { StartMonitoringMembersInput } from "./types/StartMonitoringMembersInput";
import { StartMonitoringMembersOutput } from "./types/StartMonitoringMembersOutput";
import { StopMonitoringMembersInput } from "./types/StopMonitoringMembersInput";
import { StopMonitoringMembersOutput } from "./types/StopMonitoringMembersOutput";
import { TagResourceInput } from "./types/TagResourceInput";
import { TagResourceOutput } from "./types/TagResourceOutput";
import { UnarchiveFindingsInput } from "./types/UnarchiveFindingsInput";
import { UnarchiveFindingsOutput } from "./types/UnarchiveFindingsOutput";
import { UntagResourceInput } from "./types/UntagResourceInput";
import { UntagResourceOutput } from "./types/UntagResourceOutput";
import { UpdateDetectorInput } from "./types/UpdateDetectorInput";
import { UpdateDetectorOutput } from "./types/UpdateDetectorOutput";
import { UpdateFilterInput } from "./types/UpdateFilterInput";
import { UpdateFilterOutput } from "./types/UpdateFilterOutput";
import { UpdateFindingsFeedbackInput } from "./types/UpdateFindingsFeedbackInput";
import { UpdateFindingsFeedbackOutput } from "./types/UpdateFindingsFeedbackOutput";
import { UpdateIPSetInput } from "./types/UpdateIPSetInput";
import { UpdateIPSetOutput } from "./types/UpdateIPSetOutput";
import { UpdateThreatIntelSetInput } from "./types/UpdateThreatIntelSetInput";
import { UpdateThreatIntelSetOutput } from "./types/UpdateThreatIntelSetOutput";
import { AcceptInvitationCommand } from "./commands/AcceptInvitationCommand";
import { ArchiveFindingsCommand } from "./commands/ArchiveFindingsCommand";
import { CreateDetectorCommand } from "./commands/CreateDetectorCommand";
import { CreateFilterCommand } from "./commands/CreateFilterCommand";
import { CreateIPSetCommand } from "./commands/CreateIPSetCommand";
import { CreateMembersCommand } from "./commands/CreateMembersCommand";
import { CreateSampleFindingsCommand } from "./commands/CreateSampleFindingsCommand";
import { CreateThreatIntelSetCommand } from "./commands/CreateThreatIntelSetCommand";
import { DeclineInvitationsCommand } from "./commands/DeclineInvitationsCommand";
import { DeleteDetectorCommand } from "./commands/DeleteDetectorCommand";
import { DeleteFilterCommand } from "./commands/DeleteFilterCommand";
import { DeleteIPSetCommand } from "./commands/DeleteIPSetCommand";
import { DeleteInvitationsCommand } from "./commands/DeleteInvitationsCommand";
import { DeleteMembersCommand } from "./commands/DeleteMembersCommand";
import { DeleteThreatIntelSetCommand } from "./commands/DeleteThreatIntelSetCommand";
import { DisassociateFromMasterAccountCommand } from "./commands/DisassociateFromMasterAccountCommand";
import { DisassociateMembersCommand } from "./commands/DisassociateMembersCommand";
import { GetDetectorCommand } from "./commands/GetDetectorCommand";
import { GetFilterCommand } from "./commands/GetFilterCommand";
import { GetFindingsCommand } from "./commands/GetFindingsCommand";
import { GetFindingsStatisticsCommand } from "./commands/GetFindingsStatisticsCommand";
import { GetIPSetCommand } from "./commands/GetIPSetCommand";
import { GetInvitationsCountCommand } from "./commands/GetInvitationsCountCommand";
import { GetMasterAccountCommand } from "./commands/GetMasterAccountCommand";
import { GetMembersCommand } from "./commands/GetMembersCommand";
import { GetThreatIntelSetCommand } from "./commands/GetThreatIntelSetCommand";
import { InviteMembersCommand } from "./commands/InviteMembersCommand";
import { ListDetectorsCommand } from "./commands/ListDetectorsCommand";
import { ListFiltersCommand } from "./commands/ListFiltersCommand";
import { ListFindingsCommand } from "./commands/ListFindingsCommand";
import { ListIPSetsCommand } from "./commands/ListIPSetsCommand";
import { ListInvitationsCommand } from "./commands/ListInvitationsCommand";
import { ListMembersCommand } from "./commands/ListMembersCommand";
import { ListTagsForResourceCommand } from "./commands/ListTagsForResourceCommand";
import { ListThreatIntelSetsCommand } from "./commands/ListThreatIntelSetsCommand";
import { StartMonitoringMembersCommand } from "./commands/StartMonitoringMembersCommand";
import { StopMonitoringMembersCommand } from "./commands/StopMonitoringMembersCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UnarchiveFindingsCommand } from "./commands/UnarchiveFindingsCommand";
import { UntagResourceCommand } from "./commands/UntagResourceCommand";
import { UpdateDetectorCommand } from "./commands/UpdateDetectorCommand";
import { UpdateFilterCommand } from "./commands/UpdateFilterCommand";
import { UpdateFindingsFeedbackCommand } from "./commands/UpdateFindingsFeedbackCommand";
import { UpdateIPSetCommand } from "./commands/UpdateIPSetCommand";
import { UpdateThreatIntelSetCommand } from "./commands/UpdateThreatIntelSetCommand";

export class GuardDuty extends GuardDutyClient {
  /**
   * <p>Accepts the invitation to be monitored by a master GuardDuty account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Bad request exception object.</p>
   *   - {InternalServerErrorException} <p>Internal server error exception object.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public acceptInvitation(
    args: AcceptInvitationInput
  ): Promise<AcceptInvitationOutput>;
  public acceptInvitation(
    args: AcceptInvitationInput,
    cb: (err: any, data?: AcceptInvitationOutput) => void
  ): void;
  public acceptInvitation(
    args: AcceptInvitationInput,
    cb?: (err: any, data?: AcceptInvitationOutput) => void
  ): Promise<AcceptInvitationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AcceptInvitationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Archives Amazon GuardDuty findings specified by the list of finding IDs.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Bad request exception object.</p>
   *   - {InternalServerErrorException} <p>Internal server error exception object.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public archiveFindings(
    args: ArchiveFindingsInput
  ): Promise<ArchiveFindingsOutput>;
  public archiveFindings(
    args: ArchiveFindingsInput,
    cb: (err: any, data?: ArchiveFindingsOutput) => void
  ): void;
  public archiveFindings(
    args: ArchiveFindingsInput,
    cb?: (err: any, data?: ArchiveFindingsOutput) => void
  ): Promise<ArchiveFindingsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ArchiveFindingsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a single Amazon GuardDuty detector. A detector is an object that represents the GuardDuty service. A detector must be created in order for GuardDuty to become operational.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Bad request exception object.</p>
   *   - {InternalServerErrorException} <p>Internal server error exception object.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createDetector(
    args: CreateDetectorInput
  ): Promise<CreateDetectorOutput>;
  public createDetector(
    args: CreateDetectorInput,
    cb: (err: any, data?: CreateDetectorOutput) => void
  ): void;
  public createDetector(
    args: CreateDetectorInput,
    cb?: (err: any, data?: CreateDetectorOutput) => void
  ): Promise<CreateDetectorOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateDetectorCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a filter using the specified finding criteria.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Bad request exception object.</p>
   *   - {InternalServerErrorException} <p>Internal server error exception object.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createFilter(args: CreateFilterInput): Promise<CreateFilterOutput>;
  public createFilter(
    args: CreateFilterInput,
    cb: (err: any, data?: CreateFilterOutput) => void
  ): void;
  public createFilter(
    args: CreateFilterInput,
    cb?: (err: any, data?: CreateFilterOutput) => void
  ): Promise<CreateFilterOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateFilterCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new IPSet - a list of trusted IP addresses that have been whitelisted for secure communication with AWS infrastructure and applications.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Bad request exception object.</p>
   *   - {InternalServerErrorException} <p>Internal server error exception object.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createIPSet(args: CreateIPSetInput): Promise<CreateIPSetOutput>;
  public createIPSet(
    args: CreateIPSetInput,
    cb: (err: any, data?: CreateIPSetOutput) => void
  ): void;
  public createIPSet(
    args: CreateIPSetInput,
    cb?: (err: any, data?: CreateIPSetOutput) => void
  ): Promise<CreateIPSetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateIPSetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates member accounts of the current AWS account by specifying a list of AWS account IDs. The current AWS account can then invite these members to manage GuardDuty in their accounts.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Bad request exception object.</p>
   *   - {InternalServerErrorException} <p>Internal server error exception object.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createMembers(args: CreateMembersInput): Promise<CreateMembersOutput>;
  public createMembers(
    args: CreateMembersInput,
    cb: (err: any, data?: CreateMembersOutput) => void
  ): void;
  public createMembers(
    args: CreateMembersInput,
    cb?: (err: any, data?: CreateMembersOutput) => void
  ): Promise<CreateMembersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateMembersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Generates example findings of types specified by the list of finding types. If 'NULL' is specified for findingTypes, the API generates example findings of all supported finding types.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Bad request exception object.</p>
   *   - {InternalServerErrorException} <p>Internal server error exception object.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createSampleFindings(
    args: CreateSampleFindingsInput
  ): Promise<CreateSampleFindingsOutput>;
  public createSampleFindings(
    args: CreateSampleFindingsInput,
    cb: (err: any, data?: CreateSampleFindingsOutput) => void
  ): void;
  public createSampleFindings(
    args: CreateSampleFindingsInput,
    cb?: (err: any, data?: CreateSampleFindingsOutput) => void
  ): Promise<CreateSampleFindingsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateSampleFindingsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Create a new ThreatIntelSet. ThreatIntelSets consist of known malicious IP addresses. GuardDuty generates findings based on ThreatIntelSets.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Bad request exception object.</p>
   *   - {InternalServerErrorException} <p>Internal server error exception object.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createThreatIntelSet(
    args: CreateThreatIntelSetInput
  ): Promise<CreateThreatIntelSetOutput>;
  public createThreatIntelSet(
    args: CreateThreatIntelSetInput,
    cb: (err: any, data?: CreateThreatIntelSetOutput) => void
  ): void;
  public createThreatIntelSet(
    args: CreateThreatIntelSetInput,
    cb?: (err: any, data?: CreateThreatIntelSetOutput) => void
  ): Promise<CreateThreatIntelSetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateThreatIntelSetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Declines invitations sent to the current member account by AWS account specified by their account IDs.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Bad request exception object.</p>
   *   - {InternalServerErrorException} <p>Internal server error exception object.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public declineInvitations(
    args: DeclineInvitationsInput
  ): Promise<DeclineInvitationsOutput>;
  public declineInvitations(
    args: DeclineInvitationsInput,
    cb: (err: any, data?: DeclineInvitationsOutput) => void
  ): void;
  public declineInvitations(
    args: DeclineInvitationsInput,
    cb?: (err: any, data?: DeclineInvitationsOutput) => void
  ): Promise<DeclineInvitationsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeclineInvitationsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a Amazon GuardDuty detector specified by the detector ID.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Bad request exception object.</p>
   *   - {InternalServerErrorException} <p>Internal server error exception object.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteDetector(
    args: DeleteDetectorInput
  ): Promise<DeleteDetectorOutput>;
  public deleteDetector(
    args: DeleteDetectorInput,
    cb: (err: any, data?: DeleteDetectorOutput) => void
  ): void;
  public deleteDetector(
    args: DeleteDetectorInput,
    cb?: (err: any, data?: DeleteDetectorOutput) => void
  ): Promise<DeleteDetectorOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteDetectorCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the filter specified by the filter name.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Bad request exception object.</p>
   *   - {InternalServerErrorException} <p>Internal server error exception object.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteFilter(args: DeleteFilterInput): Promise<DeleteFilterOutput>;
  public deleteFilter(
    args: DeleteFilterInput,
    cb: (err: any, data?: DeleteFilterOutput) => void
  ): void;
  public deleteFilter(
    args: DeleteFilterInput,
    cb?: (err: any, data?: DeleteFilterOutput) => void
  ): Promise<DeleteFilterOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteFilterCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the IPSet specified by the IPSet ID.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Bad request exception object.</p>
   *   - {InternalServerErrorException} <p>Internal server error exception object.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteIPSet(args: DeleteIPSetInput): Promise<DeleteIPSetOutput>;
  public deleteIPSet(
    args: DeleteIPSetInput,
    cb: (err: any, data?: DeleteIPSetOutput) => void
  ): void;
  public deleteIPSet(
    args: DeleteIPSetInput,
    cb?: (err: any, data?: DeleteIPSetOutput) => void
  ): Promise<DeleteIPSetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteIPSetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes invitations sent to the current member account by AWS accounts specified by their account IDs.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Bad request exception object.</p>
   *   - {InternalServerErrorException} <p>Internal server error exception object.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteInvitations(
    args: DeleteInvitationsInput
  ): Promise<DeleteInvitationsOutput>;
  public deleteInvitations(
    args: DeleteInvitationsInput,
    cb: (err: any, data?: DeleteInvitationsOutput) => void
  ): void;
  public deleteInvitations(
    args: DeleteInvitationsInput,
    cb?: (err: any, data?: DeleteInvitationsOutput) => void
  ): Promise<DeleteInvitationsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteInvitationsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes GuardDuty member accounts (to the current GuardDuty master account) specified by the account IDs.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Bad request exception object.</p>
   *   - {InternalServerErrorException} <p>Internal server error exception object.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteMembers(args: DeleteMembersInput): Promise<DeleteMembersOutput>;
  public deleteMembers(
    args: DeleteMembersInput,
    cb: (err: any, data?: DeleteMembersOutput) => void
  ): void;
  public deleteMembers(
    args: DeleteMembersInput,
    cb?: (err: any, data?: DeleteMembersOutput) => void
  ): Promise<DeleteMembersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteMembersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes ThreatIntelSet specified by the ThreatIntelSet ID.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Bad request exception object.</p>
   *   - {InternalServerErrorException} <p>Internal server error exception object.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteThreatIntelSet(
    args: DeleteThreatIntelSetInput
  ): Promise<DeleteThreatIntelSetOutput>;
  public deleteThreatIntelSet(
    args: DeleteThreatIntelSetInput,
    cb: (err: any, data?: DeleteThreatIntelSetOutput) => void
  ): void;
  public deleteThreatIntelSet(
    args: DeleteThreatIntelSetInput,
    cb?: (err: any, data?: DeleteThreatIntelSetOutput) => void
  ): Promise<DeleteThreatIntelSetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteThreatIntelSetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Disassociates the current GuardDuty member account from its master account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Bad request exception object.</p>
   *   - {InternalServerErrorException} <p>Internal server error exception object.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public disassociateFromMasterAccount(
    args: DisassociateFromMasterAccountInput
  ): Promise<DisassociateFromMasterAccountOutput>;
  public disassociateFromMasterAccount(
    args: DisassociateFromMasterAccountInput,
    cb: (err: any, data?: DisassociateFromMasterAccountOutput) => void
  ): void;
  public disassociateFromMasterAccount(
    args: DisassociateFromMasterAccountInput,
    cb?: (err: any, data?: DisassociateFromMasterAccountOutput) => void
  ): Promise<DisassociateFromMasterAccountOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DisassociateFromMasterAccountCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Disassociates GuardDuty member accounts (to the current GuardDuty master account) specified by the account IDs.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Bad request exception object.</p>
   *   - {InternalServerErrorException} <p>Internal server error exception object.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public disassociateMembers(
    args: DisassociateMembersInput
  ): Promise<DisassociateMembersOutput>;
  public disassociateMembers(
    args: DisassociateMembersInput,
    cb: (err: any, data?: DisassociateMembersOutput) => void
  ): void;
  public disassociateMembers(
    args: DisassociateMembersInput,
    cb?: (err: any, data?: DisassociateMembersOutput) => void
  ): Promise<DisassociateMembersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DisassociateMembersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves an Amazon GuardDuty detector specified by the detectorId.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Bad request exception object.</p>
   *   - {InternalServerErrorException} <p>Internal server error exception object.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getDetector(args: GetDetectorInput): Promise<GetDetectorOutput>;
  public getDetector(
    args: GetDetectorInput,
    cb: (err: any, data?: GetDetectorOutput) => void
  ): void;
  public getDetector(
    args: GetDetectorInput,
    cb?: (err: any, data?: GetDetectorOutput) => void
  ): Promise<GetDetectorOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetDetectorCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the details of the filter specified by the filter name.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Bad request exception object.</p>
   *   - {InternalServerErrorException} <p>Internal server error exception object.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getFilter(args: GetFilterInput): Promise<GetFilterOutput>;
  public getFilter(
    args: GetFilterInput,
    cb: (err: any, data?: GetFilterOutput) => void
  ): void;
  public getFilter(
    args: GetFilterInput,
    cb?: (err: any, data?: GetFilterOutput) => void
  ): Promise<GetFilterOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetFilterCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes Amazon GuardDuty findings specified by finding IDs.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Bad request exception object.</p>
   *   - {InternalServerErrorException} <p>Internal server error exception object.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getFindings(args: GetFindingsInput): Promise<GetFindingsOutput>;
  public getFindings(
    args: GetFindingsInput,
    cb: (err: any, data?: GetFindingsOutput) => void
  ): void;
  public getFindings(
    args: GetFindingsInput,
    cb?: (err: any, data?: GetFindingsOutput) => void
  ): Promise<GetFindingsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetFindingsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists Amazon GuardDuty findings' statistics for the specified detector ID.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Bad request exception object.</p>
   *   - {InternalServerErrorException} <p>Internal server error exception object.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getFindingsStatistics(
    args: GetFindingsStatisticsInput
  ): Promise<GetFindingsStatisticsOutput>;
  public getFindingsStatistics(
    args: GetFindingsStatisticsInput,
    cb: (err: any, data?: GetFindingsStatisticsOutput) => void
  ): void;
  public getFindingsStatistics(
    args: GetFindingsStatisticsInput,
    cb?: (err: any, data?: GetFindingsStatisticsOutput) => void
  ): Promise<GetFindingsStatisticsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetFindingsStatisticsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves the IPSet specified by the IPSet ID.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Bad request exception object.</p>
   *   - {InternalServerErrorException} <p>Internal server error exception object.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getIPSet(args: GetIPSetInput): Promise<GetIPSetOutput>;
  public getIPSet(
    args: GetIPSetInput,
    cb: (err: any, data?: GetIPSetOutput) => void
  ): void;
  public getIPSet(
    args: GetIPSetInput,
    cb?: (err: any, data?: GetIPSetOutput) => void
  ): Promise<GetIPSetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetIPSetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the count of all GuardDuty membership invitations that were sent to the current member account except the currently accepted invitation.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Bad request exception object.</p>
   *   - {InternalServerErrorException} <p>Internal server error exception object.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getInvitationsCount(
    args: GetInvitationsCountInput
  ): Promise<GetInvitationsCountOutput>;
  public getInvitationsCount(
    args: GetInvitationsCountInput,
    cb: (err: any, data?: GetInvitationsCountOutput) => void
  ): void;
  public getInvitationsCount(
    args: GetInvitationsCountInput,
    cb?: (err: any, data?: GetInvitationsCountOutput) => void
  ): Promise<GetInvitationsCountOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetInvitationsCountCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Provides the details for the GuardDuty master account to the current GuardDuty member account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Bad request exception object.</p>
   *   - {InternalServerErrorException} <p>Internal server error exception object.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getMasterAccount(
    args: GetMasterAccountInput
  ): Promise<GetMasterAccountOutput>;
  public getMasterAccount(
    args: GetMasterAccountInput,
    cb: (err: any, data?: GetMasterAccountOutput) => void
  ): void;
  public getMasterAccount(
    args: GetMasterAccountInput,
    cb?: (err: any, data?: GetMasterAccountOutput) => void
  ): Promise<GetMasterAccountOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetMasterAccountCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves GuardDuty member accounts (to the current GuardDuty master account) specified by the account IDs.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Bad request exception object.</p>
   *   - {InternalServerErrorException} <p>Internal server error exception object.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getMembers(args: GetMembersInput): Promise<GetMembersOutput>;
  public getMembers(
    args: GetMembersInput,
    cb: (err: any, data?: GetMembersOutput) => void
  ): void;
  public getMembers(
    args: GetMembersInput,
    cb?: (err: any, data?: GetMembersOutput) => void
  ): Promise<GetMembersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetMembersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves the ThreatIntelSet that is specified by the ThreatIntelSet ID.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Bad request exception object.</p>
   *   - {InternalServerErrorException} <p>Internal server error exception object.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getThreatIntelSet(
    args: GetThreatIntelSetInput
  ): Promise<GetThreatIntelSetOutput>;
  public getThreatIntelSet(
    args: GetThreatIntelSetInput,
    cb: (err: any, data?: GetThreatIntelSetOutput) => void
  ): void;
  public getThreatIntelSet(
    args: GetThreatIntelSetInput,
    cb?: (err: any, data?: GetThreatIntelSetOutput) => void
  ): Promise<GetThreatIntelSetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetThreatIntelSetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Invites other AWS accounts (created as members of the current AWS account by CreateMembers) to enable GuardDuty and allow the current AWS account to view and manage these accounts' GuardDuty findings on their behalf as the master account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Bad request exception object.</p>
   *   - {InternalServerErrorException} <p>Internal server error exception object.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public inviteMembers(args: InviteMembersInput): Promise<InviteMembersOutput>;
  public inviteMembers(
    args: InviteMembersInput,
    cb: (err: any, data?: InviteMembersOutput) => void
  ): void;
  public inviteMembers(
    args: InviteMembersInput,
    cb?: (err: any, data?: InviteMembersOutput) => void
  ): Promise<InviteMembersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new InviteMembersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists detectorIds of all the existing Amazon GuardDuty detector resources.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Bad request exception object.</p>
   *   - {InternalServerErrorException} <p>Internal server error exception object.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listDetectors(args: ListDetectorsInput): Promise<ListDetectorsOutput>;
  public listDetectors(
    args: ListDetectorsInput,
    cb: (err: any, data?: ListDetectorsOutput) => void
  ): void;
  public listDetectors(
    args: ListDetectorsInput,
    cb?: (err: any, data?: ListDetectorsOutput) => void
  ): Promise<ListDetectorsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListDetectorsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a paginated list of the current filters.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Bad request exception object.</p>
   *   - {InternalServerErrorException} <p>Internal server error exception object.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listFilters(args: ListFiltersInput): Promise<ListFiltersOutput>;
  public listFilters(
    args: ListFiltersInput,
    cb: (err: any, data?: ListFiltersOutput) => void
  ): void;
  public listFilters(
    args: ListFiltersInput,
    cb?: (err: any, data?: ListFiltersOutput) => void
  ): Promise<ListFiltersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListFiltersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists Amazon GuardDuty findings for the specified detector ID.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Bad request exception object.</p>
   *   - {InternalServerErrorException} <p>Internal server error exception object.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listFindings(args: ListFindingsInput): Promise<ListFindingsOutput>;
  public listFindings(
    args: ListFindingsInput,
    cb: (err: any, data?: ListFindingsOutput) => void
  ): void;
  public listFindings(
    args: ListFindingsInput,
    cb?: (err: any, data?: ListFindingsOutput) => void
  ): Promise<ListFindingsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListFindingsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the IPSets of the GuardDuty service specified by the detector ID.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Bad request exception object.</p>
   *   - {InternalServerErrorException} <p>Internal server error exception object.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listIPSets(args: ListIPSetsInput): Promise<ListIPSetsOutput>;
  public listIPSets(
    args: ListIPSetsInput,
    cb: (err: any, data?: ListIPSetsOutput) => void
  ): void;
  public listIPSets(
    args: ListIPSetsInput,
    cb?: (err: any, data?: ListIPSetsOutput) => void
  ): Promise<ListIPSetsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListIPSetsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists all GuardDuty membership invitations that were sent to the current AWS account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Bad request exception object.</p>
   *   - {InternalServerErrorException} <p>Internal server error exception object.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listInvitations(
    args: ListInvitationsInput
  ): Promise<ListInvitationsOutput>;
  public listInvitations(
    args: ListInvitationsInput,
    cb: (err: any, data?: ListInvitationsOutput) => void
  ): void;
  public listInvitations(
    args: ListInvitationsInput,
    cb?: (err: any, data?: ListInvitationsOutput) => void
  ): Promise<ListInvitationsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListInvitationsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists details about all member accounts for the current GuardDuty master account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Bad request exception object.</p>
   *   - {InternalServerErrorException} <p>Internal server error exception object.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listMembers(args: ListMembersInput): Promise<ListMembersOutput>;
  public listMembers(
    args: ListMembersInput,
    cb: (err: any, data?: ListMembersOutput) => void
  ): void;
  public listMembers(
    args: ListMembersInput,
    cb?: (err: any, data?: ListMembersOutput) => void
  ): Promise<ListMembersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListMembersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists tags for a resource. Tagging is currently supported for detectors, finding filters, IP sets, and Threat Intel sets, with a limit of 50 tags per resource. When invoked, this operation returns all assigned tags for a given resource..</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Bad request exception object.</p>
   *   - {InternalServerErrorException} <p>Internal server error exception object.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listTagsForResource(
    args: ListTagsForResourceInput
  ): Promise<ListTagsForResourceOutput>;
  public listTagsForResource(
    args: ListTagsForResourceInput,
    cb: (err: any, data?: ListTagsForResourceOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceInput,
    cb?: (err: any, data?: ListTagsForResourceOutput) => void
  ): Promise<ListTagsForResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListTagsForResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the ThreatIntelSets of the GuardDuty service specified by the detector ID.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Bad request exception object.</p>
   *   - {InternalServerErrorException} <p>Internal server error exception object.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listThreatIntelSets(
    args: ListThreatIntelSetsInput
  ): Promise<ListThreatIntelSetsOutput>;
  public listThreatIntelSets(
    args: ListThreatIntelSetsInput,
    cb: (err: any, data?: ListThreatIntelSetsOutput) => void
  ): void;
  public listThreatIntelSets(
    args: ListThreatIntelSetsInput,
    cb?: (err: any, data?: ListThreatIntelSetsOutput) => void
  ): Promise<ListThreatIntelSetsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListThreatIntelSetsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Re-enables GuardDuty to monitor findings of the member accounts specified by the account IDs. A master GuardDuty account can run this command after disabling GuardDuty from monitoring these members' findings by running StopMonitoringMembers.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Bad request exception object.</p>
   *   - {InternalServerErrorException} <p>Internal server error exception object.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public startMonitoringMembers(
    args: StartMonitoringMembersInput
  ): Promise<StartMonitoringMembersOutput>;
  public startMonitoringMembers(
    args: StartMonitoringMembersInput,
    cb: (err: any, data?: StartMonitoringMembersOutput) => void
  ): void;
  public startMonitoringMembers(
    args: StartMonitoringMembersInput,
    cb?: (err: any, data?: StartMonitoringMembersOutput) => void
  ): Promise<StartMonitoringMembersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StartMonitoringMembersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Disables GuardDuty from monitoring findings of the member accounts specified by the account IDs. After running this command, a master GuardDuty account can run StartMonitoringMembers to re-enable GuardDuty to monitor these members’ findings.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Bad request exception object.</p>
   *   - {InternalServerErrorException} <p>Internal server error exception object.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public stopMonitoringMembers(
    args: StopMonitoringMembersInput
  ): Promise<StopMonitoringMembersOutput>;
  public stopMonitoringMembers(
    args: StopMonitoringMembersInput,
    cb: (err: any, data?: StopMonitoringMembersOutput) => void
  ): void;
  public stopMonitoringMembers(
    args: StopMonitoringMembersInput,
    cb?: (err: any, data?: StopMonitoringMembersOutput) => void
  ): Promise<StopMonitoringMembersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StopMonitoringMembersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Adds tags to a resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Bad request exception object.</p>
   *   - {InternalServerErrorException} <p>Internal server error exception object.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public tagResource(args: TagResourceInput): Promise<TagResourceOutput>;
  public tagResource(
    args: TagResourceInput,
    cb: (err: any, data?: TagResourceOutput) => void
  ): void;
  public tagResource(
    args: TagResourceInput,
    cb?: (err: any, data?: TagResourceOutput) => void
  ): Promise<TagResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new TagResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Unarchives Amazon GuardDuty findings specified by the list of finding IDs.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Bad request exception object.</p>
   *   - {InternalServerErrorException} <p>Internal server error exception object.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public unarchiveFindings(
    args: UnarchiveFindingsInput
  ): Promise<UnarchiveFindingsOutput>;
  public unarchiveFindings(
    args: UnarchiveFindingsInput,
    cb: (err: any, data?: UnarchiveFindingsOutput) => void
  ): void;
  public unarchiveFindings(
    args: UnarchiveFindingsInput,
    cb?: (err: any, data?: UnarchiveFindingsOutput) => void
  ): Promise<UnarchiveFindingsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UnarchiveFindingsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes tags from a resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Bad request exception object.</p>
   *   - {InternalServerErrorException} <p>Internal server error exception object.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public untagResource(args: UntagResourceInput): Promise<UntagResourceOutput>;
  public untagResource(
    args: UntagResourceInput,
    cb: (err: any, data?: UntagResourceOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceInput,
    cb?: (err: any, data?: UntagResourceOutput) => void
  ): Promise<UntagResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UntagResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates an Amazon GuardDuty detector specified by the detectorId.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Bad request exception object.</p>
   *   - {InternalServerErrorException} <p>Internal server error exception object.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateDetector(
    args: UpdateDetectorInput
  ): Promise<UpdateDetectorOutput>;
  public updateDetector(
    args: UpdateDetectorInput,
    cb: (err: any, data?: UpdateDetectorOutput) => void
  ): void;
  public updateDetector(
    args: UpdateDetectorInput,
    cb?: (err: any, data?: UpdateDetectorOutput) => void
  ): Promise<UpdateDetectorOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateDetectorCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the filter specified by the filter name.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Bad request exception object.</p>
   *   - {InternalServerErrorException} <p>Internal server error exception object.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateFilter(args: UpdateFilterInput): Promise<UpdateFilterOutput>;
  public updateFilter(
    args: UpdateFilterInput,
    cb: (err: any, data?: UpdateFilterOutput) => void
  ): void;
  public updateFilter(
    args: UpdateFilterInput,
    cb?: (err: any, data?: UpdateFilterOutput) => void
  ): Promise<UpdateFilterOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateFilterCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Marks specified Amazon GuardDuty findings as useful or not useful.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Bad request exception object.</p>
   *   - {InternalServerErrorException} <p>Internal server error exception object.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateFindingsFeedback(
    args: UpdateFindingsFeedbackInput
  ): Promise<UpdateFindingsFeedbackOutput>;
  public updateFindingsFeedback(
    args: UpdateFindingsFeedbackInput,
    cb: (err: any, data?: UpdateFindingsFeedbackOutput) => void
  ): void;
  public updateFindingsFeedback(
    args: UpdateFindingsFeedbackInput,
    cb?: (err: any, data?: UpdateFindingsFeedbackOutput) => void
  ): Promise<UpdateFindingsFeedbackOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateFindingsFeedbackCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the IPSet specified by the IPSet ID.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Bad request exception object.</p>
   *   - {InternalServerErrorException} <p>Internal server error exception object.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateIPSet(args: UpdateIPSetInput): Promise<UpdateIPSetOutput>;
  public updateIPSet(
    args: UpdateIPSetInput,
    cb: (err: any, data?: UpdateIPSetOutput) => void
  ): void;
  public updateIPSet(
    args: UpdateIPSetInput,
    cb?: (err: any, data?: UpdateIPSetOutput) => void
  ): Promise<UpdateIPSetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateIPSetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the ThreatIntelSet specified by ThreatIntelSet ID.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Bad request exception object.</p>
   *   - {InternalServerErrorException} <p>Internal server error exception object.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateThreatIntelSet(
    args: UpdateThreatIntelSetInput
  ): Promise<UpdateThreatIntelSetOutput>;
  public updateThreatIntelSet(
    args: UpdateThreatIntelSetInput,
    cb: (err: any, data?: UpdateThreatIntelSetOutput) => void
  ): void;
  public updateThreatIntelSet(
    args: UpdateThreatIntelSetInput,
    cb?: (err: any, data?: UpdateThreatIntelSetOutput) => void
  ): Promise<UpdateThreatIntelSetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateThreatIntelSetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
