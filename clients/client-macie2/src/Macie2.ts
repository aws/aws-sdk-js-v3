import { Macie2Client } from "./Macie2Client";
import {
  AcceptInvitationCommand,
  AcceptInvitationCommandInput,
  AcceptInvitationCommandOutput,
} from "./commands/AcceptInvitationCommand";
import {
  BatchGetCustomDataIdentifiersCommand,
  BatchGetCustomDataIdentifiersCommandInput,
  BatchGetCustomDataIdentifiersCommandOutput,
} from "./commands/BatchGetCustomDataIdentifiersCommand";
import {
  CreateClassificationJobCommand,
  CreateClassificationJobCommandInput,
  CreateClassificationJobCommandOutput,
} from "./commands/CreateClassificationJobCommand";
import {
  CreateCustomDataIdentifierCommand,
  CreateCustomDataIdentifierCommandInput,
  CreateCustomDataIdentifierCommandOutput,
} from "./commands/CreateCustomDataIdentifierCommand";
import {
  CreateFindingsFilterCommand,
  CreateFindingsFilterCommandInput,
  CreateFindingsFilterCommandOutput,
} from "./commands/CreateFindingsFilterCommand";
import {
  CreateInvitationsCommand,
  CreateInvitationsCommandInput,
  CreateInvitationsCommandOutput,
} from "./commands/CreateInvitationsCommand";
import {
  CreateMemberCommand,
  CreateMemberCommandInput,
  CreateMemberCommandOutput,
} from "./commands/CreateMemberCommand";
import {
  CreateSampleFindingsCommand,
  CreateSampleFindingsCommandInput,
  CreateSampleFindingsCommandOutput,
} from "./commands/CreateSampleFindingsCommand";
import {
  DeclineInvitationsCommand,
  DeclineInvitationsCommandInput,
  DeclineInvitationsCommandOutput,
} from "./commands/DeclineInvitationsCommand";
import {
  DeleteCustomDataIdentifierCommand,
  DeleteCustomDataIdentifierCommandInput,
  DeleteCustomDataIdentifierCommandOutput,
} from "./commands/DeleteCustomDataIdentifierCommand";
import {
  DeleteFindingsFilterCommand,
  DeleteFindingsFilterCommandInput,
  DeleteFindingsFilterCommandOutput,
} from "./commands/DeleteFindingsFilterCommand";
import {
  DeleteInvitationsCommand,
  DeleteInvitationsCommandInput,
  DeleteInvitationsCommandOutput,
} from "./commands/DeleteInvitationsCommand";
import {
  DeleteMemberCommand,
  DeleteMemberCommandInput,
  DeleteMemberCommandOutput,
} from "./commands/DeleteMemberCommand";
import {
  DescribeBucketsCommand,
  DescribeBucketsCommandInput,
  DescribeBucketsCommandOutput,
} from "./commands/DescribeBucketsCommand";
import {
  DescribeClassificationJobCommand,
  DescribeClassificationJobCommandInput,
  DescribeClassificationJobCommandOutput,
} from "./commands/DescribeClassificationJobCommand";
import {
  DescribeOrganizationConfigurationCommand,
  DescribeOrganizationConfigurationCommandInput,
  DescribeOrganizationConfigurationCommandOutput,
} from "./commands/DescribeOrganizationConfigurationCommand";
import {
  DisableMacieCommand,
  DisableMacieCommandInput,
  DisableMacieCommandOutput,
} from "./commands/DisableMacieCommand";
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
  DisassociateMemberCommand,
  DisassociateMemberCommandInput,
  DisassociateMemberCommandOutput,
} from "./commands/DisassociateMemberCommand";
import { EnableMacieCommand, EnableMacieCommandInput, EnableMacieCommandOutput } from "./commands/EnableMacieCommand";
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
import {
  GetBucketStatisticsCommand,
  GetBucketStatisticsCommandInput,
  GetBucketStatisticsCommandOutput,
} from "./commands/GetBucketStatisticsCommand";
import {
  GetClassificationExportConfigurationCommand,
  GetClassificationExportConfigurationCommandInput,
  GetClassificationExportConfigurationCommandOutput,
} from "./commands/GetClassificationExportConfigurationCommand";
import {
  GetCustomDataIdentifierCommand,
  GetCustomDataIdentifierCommandInput,
  GetCustomDataIdentifierCommandOutput,
} from "./commands/GetCustomDataIdentifierCommand";
import {
  GetFindingStatisticsCommand,
  GetFindingStatisticsCommandInput,
  GetFindingStatisticsCommandOutput,
} from "./commands/GetFindingStatisticsCommand";
import { GetFindingsCommand, GetFindingsCommandInput, GetFindingsCommandOutput } from "./commands/GetFindingsCommand";
import {
  GetFindingsFilterCommand,
  GetFindingsFilterCommandInput,
  GetFindingsFilterCommandOutput,
} from "./commands/GetFindingsFilterCommand";
import {
  GetFindingsPublicationConfigurationCommand,
  GetFindingsPublicationConfigurationCommandInput,
  GetFindingsPublicationConfigurationCommandOutput,
} from "./commands/GetFindingsPublicationConfigurationCommand";
import {
  GetInvitationsCountCommand,
  GetInvitationsCountCommandInput,
  GetInvitationsCountCommandOutput,
} from "./commands/GetInvitationsCountCommand";
import {
  GetMacieSessionCommand,
  GetMacieSessionCommandInput,
  GetMacieSessionCommandOutput,
} from "./commands/GetMacieSessionCommand";
import {
  GetMasterAccountCommand,
  GetMasterAccountCommandInput,
  GetMasterAccountCommandOutput,
} from "./commands/GetMasterAccountCommand";
import { GetMemberCommand, GetMemberCommandInput, GetMemberCommandOutput } from "./commands/GetMemberCommand";
import {
  GetUsageStatisticsCommand,
  GetUsageStatisticsCommandInput,
  GetUsageStatisticsCommandOutput,
} from "./commands/GetUsageStatisticsCommand";
import {
  GetUsageTotalsCommand,
  GetUsageTotalsCommandInput,
  GetUsageTotalsCommandOutput,
} from "./commands/GetUsageTotalsCommand";
import {
  ListClassificationJobsCommand,
  ListClassificationJobsCommandInput,
  ListClassificationJobsCommandOutput,
} from "./commands/ListClassificationJobsCommand";
import {
  ListCustomDataIdentifiersCommand,
  ListCustomDataIdentifiersCommandInput,
  ListCustomDataIdentifiersCommandOutput,
} from "./commands/ListCustomDataIdentifiersCommand";
import {
  ListFindingsCommand,
  ListFindingsCommandInput,
  ListFindingsCommandOutput,
} from "./commands/ListFindingsCommand";
import {
  ListFindingsFiltersCommand,
  ListFindingsFiltersCommandInput,
  ListFindingsFiltersCommandOutput,
} from "./commands/ListFindingsFiltersCommand";
import {
  ListInvitationsCommand,
  ListInvitationsCommandInput,
  ListInvitationsCommandOutput,
} from "./commands/ListInvitationsCommand";
import {
  ListManagedDataIdentifiersCommand,
  ListManagedDataIdentifiersCommandInput,
  ListManagedDataIdentifiersCommandOutput,
} from "./commands/ListManagedDataIdentifiersCommand";
import { ListMembersCommand, ListMembersCommandInput, ListMembersCommandOutput } from "./commands/ListMembersCommand";
import {
  ListOrganizationAdminAccountsCommand,
  ListOrganizationAdminAccountsCommandInput,
  ListOrganizationAdminAccountsCommandOutput,
} from "./commands/ListOrganizationAdminAccountsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  PutClassificationExportConfigurationCommand,
  PutClassificationExportConfigurationCommandInput,
  PutClassificationExportConfigurationCommandOutput,
} from "./commands/PutClassificationExportConfigurationCommand";
import {
  PutFindingsPublicationConfigurationCommand,
  PutFindingsPublicationConfigurationCommandInput,
  PutFindingsPublicationConfigurationCommandOutput,
} from "./commands/PutFindingsPublicationConfigurationCommand";
import {
  SearchResourcesCommand,
  SearchResourcesCommandInput,
  SearchResourcesCommandOutput,
} from "./commands/SearchResourcesCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  TestCustomDataIdentifierCommand,
  TestCustomDataIdentifierCommandInput,
  TestCustomDataIdentifierCommandOutput,
} from "./commands/TestCustomDataIdentifierCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateClassificationJobCommand,
  UpdateClassificationJobCommandInput,
  UpdateClassificationJobCommandOutput,
} from "./commands/UpdateClassificationJobCommand";
import {
  UpdateFindingsFilterCommand,
  UpdateFindingsFilterCommandInput,
  UpdateFindingsFilterCommandOutput,
} from "./commands/UpdateFindingsFilterCommand";
import {
  UpdateMacieSessionCommand,
  UpdateMacieSessionCommandInput,
  UpdateMacieSessionCommandOutput,
} from "./commands/UpdateMacieSessionCommand";
import {
  UpdateMemberSessionCommand,
  UpdateMemberSessionCommandInput,
  UpdateMemberSessionCommandOutput,
} from "./commands/UpdateMemberSessionCommand";
import {
  UpdateOrganizationConfigurationCommand,
  UpdateOrganizationConfigurationCommandInput,
  UpdateOrganizationConfigurationCommandOutput,
} from "./commands/UpdateOrganizationConfigurationCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <p>Amazon Macie is a fully managed data security and data privacy service that uses machine learning and pattern matching to discover and protect your sensitive data in AWS. Macie automates the discovery of sensitive data, such as PII and intellectual property, to provide you with insight into the data that your organization stores in AWS. Macie also provides an inventory of your Amazon S3 buckets, which it continually monitors for you. If Macie detects sensitive data or potential data access issues, it generates detailed findings for you to review and act upon as necessary.</p>
 */
export class Macie2 extends Macie2Client {
  /**
   * <p>Accepts an Amazon Macie membership invitation that was received from a specific account.</p>
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
   * <p>Retrieves information about one or more custom data identifiers.</p>
   */
  public batchGetCustomDataIdentifiers(
    args: BatchGetCustomDataIdentifiersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetCustomDataIdentifiersCommandOutput>;
  public batchGetCustomDataIdentifiers(
    args: BatchGetCustomDataIdentifiersCommandInput,
    cb: (err: any, data?: BatchGetCustomDataIdentifiersCommandOutput) => void
  ): void;
  public batchGetCustomDataIdentifiers(
    args: BatchGetCustomDataIdentifiersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetCustomDataIdentifiersCommandOutput) => void
  ): void;
  public batchGetCustomDataIdentifiers(
    args: BatchGetCustomDataIdentifiersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchGetCustomDataIdentifiersCommandOutput) => void),
    cb?: (err: any, data?: BatchGetCustomDataIdentifiersCommandOutput) => void
  ): Promise<BatchGetCustomDataIdentifiersCommandOutput> | void {
    const command = new BatchGetCustomDataIdentifiersCommand(args);
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
   * <p>Creates and defines the settings for a classification job.</p>
   */
  public createClassificationJob(
    args: CreateClassificationJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateClassificationJobCommandOutput>;
  public createClassificationJob(
    args: CreateClassificationJobCommandInput,
    cb: (err: any, data?: CreateClassificationJobCommandOutput) => void
  ): void;
  public createClassificationJob(
    args: CreateClassificationJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateClassificationJobCommandOutput) => void
  ): void;
  public createClassificationJob(
    args: CreateClassificationJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateClassificationJobCommandOutput) => void),
    cb?: (err: any, data?: CreateClassificationJobCommandOutput) => void
  ): Promise<CreateClassificationJobCommandOutput> | void {
    const command = new CreateClassificationJobCommand(args);
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
   * <p>Creates and defines the criteria and other settings for a custom data identifier.</p>
   */
  public createCustomDataIdentifier(
    args: CreateCustomDataIdentifierCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCustomDataIdentifierCommandOutput>;
  public createCustomDataIdentifier(
    args: CreateCustomDataIdentifierCommandInput,
    cb: (err: any, data?: CreateCustomDataIdentifierCommandOutput) => void
  ): void;
  public createCustomDataIdentifier(
    args: CreateCustomDataIdentifierCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCustomDataIdentifierCommandOutput) => void
  ): void;
  public createCustomDataIdentifier(
    args: CreateCustomDataIdentifierCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateCustomDataIdentifierCommandOutput) => void),
    cb?: (err: any, data?: CreateCustomDataIdentifierCommandOutput) => void
  ): Promise<CreateCustomDataIdentifierCommandOutput> | void {
    const command = new CreateCustomDataIdentifierCommand(args);
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
   * <p>Creates and defines the criteria and other settings for a findings filter.</p>
   */
  public createFindingsFilter(
    args: CreateFindingsFilterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateFindingsFilterCommandOutput>;
  public createFindingsFilter(
    args: CreateFindingsFilterCommandInput,
    cb: (err: any, data?: CreateFindingsFilterCommandOutput) => void
  ): void;
  public createFindingsFilter(
    args: CreateFindingsFilterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFindingsFilterCommandOutput) => void
  ): void;
  public createFindingsFilter(
    args: CreateFindingsFilterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateFindingsFilterCommandOutput) => void),
    cb?: (err: any, data?: CreateFindingsFilterCommandOutput) => void
  ): Promise<CreateFindingsFilterCommandOutput> | void {
    const command = new CreateFindingsFilterCommand(args);
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
   * <p>Sends an Amazon Macie membership invitation to one or more accounts.</p>
   */
  public createInvitations(
    args: CreateInvitationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateInvitationsCommandOutput>;
  public createInvitations(
    args: CreateInvitationsCommandInput,
    cb: (err: any, data?: CreateInvitationsCommandOutput) => void
  ): void;
  public createInvitations(
    args: CreateInvitationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateInvitationsCommandOutput) => void
  ): void;
  public createInvitations(
    args: CreateInvitationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateInvitationsCommandOutput) => void),
    cb?: (err: any, data?: CreateInvitationsCommandOutput) => void
  ): Promise<CreateInvitationsCommandOutput> | void {
    const command = new CreateInvitationsCommand(args);
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
   * <p>Associates an account with an Amazon Macie administrator account.</p>
   */
  public createMember(
    args: CreateMemberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateMemberCommandOutput>;
  public createMember(args: CreateMemberCommandInput, cb: (err: any, data?: CreateMemberCommandOutput) => void): void;
  public createMember(
    args: CreateMemberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMemberCommandOutput) => void
  ): void;
  public createMember(
    args: CreateMemberCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateMemberCommandOutput) => void),
    cb?: (err: any, data?: CreateMemberCommandOutput) => void
  ): Promise<CreateMemberCommandOutput> | void {
    const command = new CreateMemberCommand(args);
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
   * <p>Creates sample findings.</p>
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
   * <p>Declines Amazon Macie membership invitations that were received from specific accounts.</p>
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
   * <p>Soft deletes a custom data identifier.</p>
   */
  public deleteCustomDataIdentifier(
    args: DeleteCustomDataIdentifierCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCustomDataIdentifierCommandOutput>;
  public deleteCustomDataIdentifier(
    args: DeleteCustomDataIdentifierCommandInput,
    cb: (err: any, data?: DeleteCustomDataIdentifierCommandOutput) => void
  ): void;
  public deleteCustomDataIdentifier(
    args: DeleteCustomDataIdentifierCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCustomDataIdentifierCommandOutput) => void
  ): void;
  public deleteCustomDataIdentifier(
    args: DeleteCustomDataIdentifierCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteCustomDataIdentifierCommandOutput) => void),
    cb?: (err: any, data?: DeleteCustomDataIdentifierCommandOutput) => void
  ): Promise<DeleteCustomDataIdentifierCommandOutput> | void {
    const command = new DeleteCustomDataIdentifierCommand(args);
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
   * <p>Deletes a findings filter.</p>
   */
  public deleteFindingsFilter(
    args: DeleteFindingsFilterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteFindingsFilterCommandOutput>;
  public deleteFindingsFilter(
    args: DeleteFindingsFilterCommandInput,
    cb: (err: any, data?: DeleteFindingsFilterCommandOutput) => void
  ): void;
  public deleteFindingsFilter(
    args: DeleteFindingsFilterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFindingsFilterCommandOutput) => void
  ): void;
  public deleteFindingsFilter(
    args: DeleteFindingsFilterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteFindingsFilterCommandOutput) => void),
    cb?: (err: any, data?: DeleteFindingsFilterCommandOutput) => void
  ): Promise<DeleteFindingsFilterCommandOutput> | void {
    const command = new DeleteFindingsFilterCommand(args);
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
   * <p>Deletes Amazon Macie membership invitations that were received from specific accounts.</p>
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
   * <p>Deletes the association between an Amazon Macie administrator account and an account.</p>
   */
  public deleteMember(
    args: DeleteMemberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteMemberCommandOutput>;
  public deleteMember(args: DeleteMemberCommandInput, cb: (err: any, data?: DeleteMemberCommandOutput) => void): void;
  public deleteMember(
    args: DeleteMemberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMemberCommandOutput) => void
  ): void;
  public deleteMember(
    args: DeleteMemberCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteMemberCommandOutput) => void),
    cb?: (err: any, data?: DeleteMemberCommandOutput) => void
  ): Promise<DeleteMemberCommandOutput> | void {
    const command = new DeleteMemberCommand(args);
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
   * <p>Retrieves (queries) statistical data and other information about one or more S3 buckets that Amazon Macie monitors and analyzes.</p>
   */
  public describeBuckets(
    args: DescribeBucketsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeBucketsCommandOutput>;
  public describeBuckets(
    args: DescribeBucketsCommandInput,
    cb: (err: any, data?: DescribeBucketsCommandOutput) => void
  ): void;
  public describeBuckets(
    args: DescribeBucketsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeBucketsCommandOutput) => void
  ): void;
  public describeBuckets(
    args: DescribeBucketsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeBucketsCommandOutput) => void),
    cb?: (err: any, data?: DescribeBucketsCommandOutput) => void
  ): Promise<DescribeBucketsCommandOutput> | void {
    const command = new DescribeBucketsCommand(args);
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
   * <p>Retrieves the status and settings for a classification job.</p>
   */
  public describeClassificationJob(
    args: DescribeClassificationJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeClassificationJobCommandOutput>;
  public describeClassificationJob(
    args: DescribeClassificationJobCommandInput,
    cb: (err: any, data?: DescribeClassificationJobCommandOutput) => void
  ): void;
  public describeClassificationJob(
    args: DescribeClassificationJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeClassificationJobCommandOutput) => void
  ): void;
  public describeClassificationJob(
    args: DescribeClassificationJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeClassificationJobCommandOutput) => void),
    cb?: (err: any, data?: DescribeClassificationJobCommandOutput) => void
  ): Promise<DescribeClassificationJobCommandOutput> | void {
    const command = new DescribeClassificationJobCommand(args);
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
   * <p>Retrieves the Amazon Macie configuration settings for an Amazon Web Services organization.</p>
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
   * <p>Disables an Amazon Macie account and deletes Macie resources for the account.</p>
   */
  public disableMacie(
    args: DisableMacieCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisableMacieCommandOutput>;
  public disableMacie(args: DisableMacieCommandInput, cb: (err: any, data?: DisableMacieCommandOutput) => void): void;
  public disableMacie(
    args: DisableMacieCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableMacieCommandOutput) => void
  ): void;
  public disableMacie(
    args: DisableMacieCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisableMacieCommandOutput) => void),
    cb?: (err: any, data?: DisableMacieCommandOutput) => void
  ): Promise<DisableMacieCommandOutput> | void {
    const command = new DisableMacieCommand(args);
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
   * <p>Disables an account as the delegated Amazon Macie administrator account for an Amazon Web Services organization.</p>
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
   * <p>Disassociates a member account from its Amazon Macie administrator account.</p>
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
   * <p>(Deprecated) Disassociates a member account from its Amazon Macie administrator account. This operation has been replaced by the <link  linkend="DisassociateFromAdministratorAccount">DisassociateFromAdministratorAccount</link> operation.</p>
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
   * <p>Disassociates an Amazon Macie administrator account from a member account.</p>
   */
  public disassociateMember(
    args: DisassociateMemberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateMemberCommandOutput>;
  public disassociateMember(
    args: DisassociateMemberCommandInput,
    cb: (err: any, data?: DisassociateMemberCommandOutput) => void
  ): void;
  public disassociateMember(
    args: DisassociateMemberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateMemberCommandOutput) => void
  ): void;
  public disassociateMember(
    args: DisassociateMemberCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisassociateMemberCommandOutput) => void),
    cb?: (err: any, data?: DisassociateMemberCommandOutput) => void
  ): Promise<DisassociateMemberCommandOutput> | void {
    const command = new DisassociateMemberCommand(args);
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
   * <p>Enables Amazon Macie and specifies the configuration settings for a Macie account.</p>
   */
  public enableMacie(args: EnableMacieCommandInput, options?: __HttpHandlerOptions): Promise<EnableMacieCommandOutput>;
  public enableMacie(args: EnableMacieCommandInput, cb: (err: any, data?: EnableMacieCommandOutput) => void): void;
  public enableMacie(
    args: EnableMacieCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableMacieCommandOutput) => void
  ): void;
  public enableMacie(
    args: EnableMacieCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: EnableMacieCommandOutput) => void),
    cb?: (err: any, data?: EnableMacieCommandOutput) => void
  ): Promise<EnableMacieCommandOutput> | void {
    const command = new EnableMacieCommand(args);
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
   * <p>Designates an account as the delegated Amazon Macie administrator account for an Amazon Web Services organization.</p>
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
   * <p>Retrieves information about the Amazon Macie administrator account for an account.</p>
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
   * <p>Retrieves (queries) aggregated statistical data for all the S3 buckets that Amazon Macie monitors and analyzes.</p>
   */
  public getBucketStatistics(
    args: GetBucketStatisticsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBucketStatisticsCommandOutput>;
  public getBucketStatistics(
    args: GetBucketStatisticsCommandInput,
    cb: (err: any, data?: GetBucketStatisticsCommandOutput) => void
  ): void;
  public getBucketStatistics(
    args: GetBucketStatisticsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBucketStatisticsCommandOutput) => void
  ): void;
  public getBucketStatistics(
    args: GetBucketStatisticsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetBucketStatisticsCommandOutput) => void),
    cb?: (err: any, data?: GetBucketStatisticsCommandOutput) => void
  ): Promise<GetBucketStatisticsCommandOutput> | void {
    const command = new GetBucketStatisticsCommand(args);
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
   * <p>Retrieves the configuration settings for storing data classification results.</p>
   */
  public getClassificationExportConfiguration(
    args: GetClassificationExportConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetClassificationExportConfigurationCommandOutput>;
  public getClassificationExportConfiguration(
    args: GetClassificationExportConfigurationCommandInput,
    cb: (err: any, data?: GetClassificationExportConfigurationCommandOutput) => void
  ): void;
  public getClassificationExportConfiguration(
    args: GetClassificationExportConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetClassificationExportConfigurationCommandOutput) => void
  ): void;
  public getClassificationExportConfiguration(
    args: GetClassificationExportConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetClassificationExportConfigurationCommandOutput) => void),
    cb?: (err: any, data?: GetClassificationExportConfigurationCommandOutput) => void
  ): Promise<GetClassificationExportConfigurationCommandOutput> | void {
    const command = new GetClassificationExportConfigurationCommand(args);
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
   * <p>Retrieves the criteria and other settings for a custom data identifier.</p>
   */
  public getCustomDataIdentifier(
    args: GetCustomDataIdentifierCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCustomDataIdentifierCommandOutput>;
  public getCustomDataIdentifier(
    args: GetCustomDataIdentifierCommandInput,
    cb: (err: any, data?: GetCustomDataIdentifierCommandOutput) => void
  ): void;
  public getCustomDataIdentifier(
    args: GetCustomDataIdentifierCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCustomDataIdentifierCommandOutput) => void
  ): void;
  public getCustomDataIdentifier(
    args: GetCustomDataIdentifierCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetCustomDataIdentifierCommandOutput) => void),
    cb?: (err: any, data?: GetCustomDataIdentifierCommandOutput) => void
  ): Promise<GetCustomDataIdentifierCommandOutput> | void {
    const command = new GetCustomDataIdentifierCommand(args);
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
   * <p>Retrieves the details of one or more findings.</p>
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
   * <p>Retrieves the criteria and other settings for a findings filter.</p>
   */
  public getFindingsFilter(
    args: GetFindingsFilterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetFindingsFilterCommandOutput>;
  public getFindingsFilter(
    args: GetFindingsFilterCommandInput,
    cb: (err: any, data?: GetFindingsFilterCommandOutput) => void
  ): void;
  public getFindingsFilter(
    args: GetFindingsFilterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFindingsFilterCommandOutput) => void
  ): void;
  public getFindingsFilter(
    args: GetFindingsFilterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetFindingsFilterCommandOutput) => void),
    cb?: (err: any, data?: GetFindingsFilterCommandOutput) => void
  ): Promise<GetFindingsFilterCommandOutput> | void {
    const command = new GetFindingsFilterCommand(args);
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
   * <p>Retrieves the configuration settings for publishing findings to Security Hub.</p>
   */
  public getFindingsPublicationConfiguration(
    args: GetFindingsPublicationConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetFindingsPublicationConfigurationCommandOutput>;
  public getFindingsPublicationConfiguration(
    args: GetFindingsPublicationConfigurationCommandInput,
    cb: (err: any, data?: GetFindingsPublicationConfigurationCommandOutput) => void
  ): void;
  public getFindingsPublicationConfiguration(
    args: GetFindingsPublicationConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFindingsPublicationConfigurationCommandOutput) => void
  ): void;
  public getFindingsPublicationConfiguration(
    args: GetFindingsPublicationConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetFindingsPublicationConfigurationCommandOutput) => void),
    cb?: (err: any, data?: GetFindingsPublicationConfigurationCommandOutput) => void
  ): Promise<GetFindingsPublicationConfigurationCommandOutput> | void {
    const command = new GetFindingsPublicationConfigurationCommand(args);
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
   * <p>Retrieves (queries) aggregated statistical data about findings.</p>
   */
  public getFindingStatistics(
    args: GetFindingStatisticsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetFindingStatisticsCommandOutput>;
  public getFindingStatistics(
    args: GetFindingStatisticsCommandInput,
    cb: (err: any, data?: GetFindingStatisticsCommandOutput) => void
  ): void;
  public getFindingStatistics(
    args: GetFindingStatisticsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFindingStatisticsCommandOutput) => void
  ): void;
  public getFindingStatistics(
    args: GetFindingStatisticsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetFindingStatisticsCommandOutput) => void),
    cb?: (err: any, data?: GetFindingStatisticsCommandOutput) => void
  ): Promise<GetFindingStatisticsCommandOutput> | void {
    const command = new GetFindingStatisticsCommand(args);
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
   * <p>Retrieves the count of Amazon Macie membership invitations that were received by an account.</p>
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
   * <p>Retrieves the current status and configuration settings for an Amazon Macie account.</p>
   */
  public getMacieSession(
    args: GetMacieSessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMacieSessionCommandOutput>;
  public getMacieSession(
    args: GetMacieSessionCommandInput,
    cb: (err: any, data?: GetMacieSessionCommandOutput) => void
  ): void;
  public getMacieSession(
    args: GetMacieSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMacieSessionCommandOutput) => void
  ): void;
  public getMacieSession(
    args: GetMacieSessionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetMacieSessionCommandOutput) => void),
    cb?: (err: any, data?: GetMacieSessionCommandOutput) => void
  ): Promise<GetMacieSessionCommandOutput> | void {
    const command = new GetMacieSessionCommand(args);
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
   * <p>(Deprecated) Retrieves information about the Amazon Macie administrator account for an account. This operation has been replaced by the <link  linkend="GetAdministratorAccount">GetAdministratorAccount</link> operation.</p>
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
   * <p>Retrieves information about an account that's associated with an Amazon Macie administrator account.</p>
   */
  public getMember(args: GetMemberCommandInput, options?: __HttpHandlerOptions): Promise<GetMemberCommandOutput>;
  public getMember(args: GetMemberCommandInput, cb: (err: any, data?: GetMemberCommandOutput) => void): void;
  public getMember(
    args: GetMemberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMemberCommandOutput) => void
  ): void;
  public getMember(
    args: GetMemberCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetMemberCommandOutput) => void),
    cb?: (err: any, data?: GetMemberCommandOutput) => void
  ): Promise<GetMemberCommandOutput> | void {
    const command = new GetMemberCommand(args);
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
   * <p>Retrieves (queries) quotas and aggregated usage data for one or more accounts.</p>
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
   * <p>Retrieves (queries) aggregated usage data for an account.</p>
   */
  public getUsageTotals(
    args: GetUsageTotalsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetUsageTotalsCommandOutput>;
  public getUsageTotals(
    args: GetUsageTotalsCommandInput,
    cb: (err: any, data?: GetUsageTotalsCommandOutput) => void
  ): void;
  public getUsageTotals(
    args: GetUsageTotalsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetUsageTotalsCommandOutput) => void
  ): void;
  public getUsageTotals(
    args: GetUsageTotalsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetUsageTotalsCommandOutput) => void),
    cb?: (err: any, data?: GetUsageTotalsCommandOutput) => void
  ): Promise<GetUsageTotalsCommandOutput> | void {
    const command = new GetUsageTotalsCommand(args);
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
   * <p>Retrieves a subset of information about one or more classification jobs.</p>
   */
  public listClassificationJobs(
    args: ListClassificationJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListClassificationJobsCommandOutput>;
  public listClassificationJobs(
    args: ListClassificationJobsCommandInput,
    cb: (err: any, data?: ListClassificationJobsCommandOutput) => void
  ): void;
  public listClassificationJobs(
    args: ListClassificationJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListClassificationJobsCommandOutput) => void
  ): void;
  public listClassificationJobs(
    args: ListClassificationJobsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListClassificationJobsCommandOutput) => void),
    cb?: (err: any, data?: ListClassificationJobsCommandOutput) => void
  ): Promise<ListClassificationJobsCommandOutput> | void {
    const command = new ListClassificationJobsCommand(args);
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
   * <p>Retrieves a subset of information about all the custom data identifiers for an account.</p>
   */
  public listCustomDataIdentifiers(
    args: ListCustomDataIdentifiersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCustomDataIdentifiersCommandOutput>;
  public listCustomDataIdentifiers(
    args: ListCustomDataIdentifiersCommandInput,
    cb: (err: any, data?: ListCustomDataIdentifiersCommandOutput) => void
  ): void;
  public listCustomDataIdentifiers(
    args: ListCustomDataIdentifiersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCustomDataIdentifiersCommandOutput) => void
  ): void;
  public listCustomDataIdentifiers(
    args: ListCustomDataIdentifiersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListCustomDataIdentifiersCommandOutput) => void),
    cb?: (err: any, data?: ListCustomDataIdentifiersCommandOutput) => void
  ): Promise<ListCustomDataIdentifiersCommandOutput> | void {
    const command = new ListCustomDataIdentifiersCommand(args);
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
   * <p>Retrieves a subset of information about one or more findings.</p>
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
   * <p>Retrieves a subset of information about all the findings filters for an account.</p>
   */
  public listFindingsFilters(
    args: ListFindingsFiltersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFindingsFiltersCommandOutput>;
  public listFindingsFilters(
    args: ListFindingsFiltersCommandInput,
    cb: (err: any, data?: ListFindingsFiltersCommandOutput) => void
  ): void;
  public listFindingsFilters(
    args: ListFindingsFiltersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFindingsFiltersCommandOutput) => void
  ): void;
  public listFindingsFilters(
    args: ListFindingsFiltersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListFindingsFiltersCommandOutput) => void),
    cb?: (err: any, data?: ListFindingsFiltersCommandOutput) => void
  ): Promise<ListFindingsFiltersCommandOutput> | void {
    const command = new ListFindingsFiltersCommand(args);
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
   * <p>Retrieves information about the Amazon Macie membership invitations that were received by an account.</p>
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
   * <p>Retrieves information about all the managed data identifiers that Amazon Macie currently provides.</p>
   */
  public listManagedDataIdentifiers(
    args: ListManagedDataIdentifiersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListManagedDataIdentifiersCommandOutput>;
  public listManagedDataIdentifiers(
    args: ListManagedDataIdentifiersCommandInput,
    cb: (err: any, data?: ListManagedDataIdentifiersCommandOutput) => void
  ): void;
  public listManagedDataIdentifiers(
    args: ListManagedDataIdentifiersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListManagedDataIdentifiersCommandOutput) => void
  ): void;
  public listManagedDataIdentifiers(
    args: ListManagedDataIdentifiersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListManagedDataIdentifiersCommandOutput) => void),
    cb?: (err: any, data?: ListManagedDataIdentifiersCommandOutput) => void
  ): Promise<ListManagedDataIdentifiersCommandOutput> | void {
    const command = new ListManagedDataIdentifiersCommand(args);
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
   * <p>Retrieves information about the accounts that are associated with an Amazon Macie administrator account.</p>
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
   * <p>Retrieves information about the delegated Amazon Macie administrator account for an Amazon Web Services organization.</p>
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
   * <p>Retrieves the tags (keys and values) that are associated with a classification job, custom data identifier, findings filter, or member account.</p>
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
   * <p>Creates or updates the configuration settings for storing data classification results.</p>
   */
  public putClassificationExportConfiguration(
    args: PutClassificationExportConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutClassificationExportConfigurationCommandOutput>;
  public putClassificationExportConfiguration(
    args: PutClassificationExportConfigurationCommandInput,
    cb: (err: any, data?: PutClassificationExportConfigurationCommandOutput) => void
  ): void;
  public putClassificationExportConfiguration(
    args: PutClassificationExportConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutClassificationExportConfigurationCommandOutput) => void
  ): void;
  public putClassificationExportConfiguration(
    args: PutClassificationExportConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutClassificationExportConfigurationCommandOutput) => void),
    cb?: (err: any, data?: PutClassificationExportConfigurationCommandOutput) => void
  ): Promise<PutClassificationExportConfigurationCommandOutput> | void {
    const command = new PutClassificationExportConfigurationCommand(args);
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
   * <p>Updates the configuration settings for publishing findings to Security Hub.</p>
   */
  public putFindingsPublicationConfiguration(
    args: PutFindingsPublicationConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutFindingsPublicationConfigurationCommandOutput>;
  public putFindingsPublicationConfiguration(
    args: PutFindingsPublicationConfigurationCommandInput,
    cb: (err: any, data?: PutFindingsPublicationConfigurationCommandOutput) => void
  ): void;
  public putFindingsPublicationConfiguration(
    args: PutFindingsPublicationConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutFindingsPublicationConfigurationCommandOutput) => void
  ): void;
  public putFindingsPublicationConfiguration(
    args: PutFindingsPublicationConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutFindingsPublicationConfigurationCommandOutput) => void),
    cb?: (err: any, data?: PutFindingsPublicationConfigurationCommandOutput) => void
  ): Promise<PutFindingsPublicationConfigurationCommandOutput> | void {
    const command = new PutFindingsPublicationConfigurationCommand(args);
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
   * <p>Retrieves (queries) statistical data and other information about Amazon Web Services resources that Amazon Macie monitors and analyzes.</p>
   */
  public searchResources(
    args: SearchResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchResourcesCommandOutput>;
  public searchResources(
    args: SearchResourcesCommandInput,
    cb: (err: any, data?: SearchResourcesCommandOutput) => void
  ): void;
  public searchResources(
    args: SearchResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchResourcesCommandOutput) => void
  ): void;
  public searchResources(
    args: SearchResourcesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SearchResourcesCommandOutput) => void),
    cb?: (err: any, data?: SearchResourcesCommandOutput) => void
  ): Promise<SearchResourcesCommandOutput> | void {
    const command = new SearchResourcesCommand(args);
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
   * <p>Adds or updates one or more tags (keys and values) that are associated with a classification job, custom data identifier, findings filter, or member account.</p>
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
   * <p>Tests a custom data identifier.</p>
   */
  public testCustomDataIdentifier(
    args: TestCustomDataIdentifierCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TestCustomDataIdentifierCommandOutput>;
  public testCustomDataIdentifier(
    args: TestCustomDataIdentifierCommandInput,
    cb: (err: any, data?: TestCustomDataIdentifierCommandOutput) => void
  ): void;
  public testCustomDataIdentifier(
    args: TestCustomDataIdentifierCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TestCustomDataIdentifierCommandOutput) => void
  ): void;
  public testCustomDataIdentifier(
    args: TestCustomDataIdentifierCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TestCustomDataIdentifierCommandOutput) => void),
    cb?: (err: any, data?: TestCustomDataIdentifierCommandOutput) => void
  ): Promise<TestCustomDataIdentifierCommandOutput> | void {
    const command = new TestCustomDataIdentifierCommand(args);
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
   * <p>Removes one or more tags (keys and values) from a classification job, custom data identifier, findings filter, or member account.</p>
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
   * <p>Changes the status of a classification job.</p>
   */
  public updateClassificationJob(
    args: UpdateClassificationJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateClassificationJobCommandOutput>;
  public updateClassificationJob(
    args: UpdateClassificationJobCommandInput,
    cb: (err: any, data?: UpdateClassificationJobCommandOutput) => void
  ): void;
  public updateClassificationJob(
    args: UpdateClassificationJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateClassificationJobCommandOutput) => void
  ): void;
  public updateClassificationJob(
    args: UpdateClassificationJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateClassificationJobCommandOutput) => void),
    cb?: (err: any, data?: UpdateClassificationJobCommandOutput) => void
  ): Promise<UpdateClassificationJobCommandOutput> | void {
    const command = new UpdateClassificationJobCommand(args);
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
   * <p>Updates the criteria and other settings for a findings filter.</p>
   */
  public updateFindingsFilter(
    args: UpdateFindingsFilterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFindingsFilterCommandOutput>;
  public updateFindingsFilter(
    args: UpdateFindingsFilterCommandInput,
    cb: (err: any, data?: UpdateFindingsFilterCommandOutput) => void
  ): void;
  public updateFindingsFilter(
    args: UpdateFindingsFilterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFindingsFilterCommandOutput) => void
  ): void;
  public updateFindingsFilter(
    args: UpdateFindingsFilterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateFindingsFilterCommandOutput) => void),
    cb?: (err: any, data?: UpdateFindingsFilterCommandOutput) => void
  ): Promise<UpdateFindingsFilterCommandOutput> | void {
    const command = new UpdateFindingsFilterCommand(args);
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
   * <p>Suspends or re-enables an Amazon Macie account, or updates the configuration settings for a Macie account.</p>
   */
  public updateMacieSession(
    args: UpdateMacieSessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateMacieSessionCommandOutput>;
  public updateMacieSession(
    args: UpdateMacieSessionCommandInput,
    cb: (err: any, data?: UpdateMacieSessionCommandOutput) => void
  ): void;
  public updateMacieSession(
    args: UpdateMacieSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateMacieSessionCommandOutput) => void
  ): void;
  public updateMacieSession(
    args: UpdateMacieSessionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateMacieSessionCommandOutput) => void),
    cb?: (err: any, data?: UpdateMacieSessionCommandOutput) => void
  ): Promise<UpdateMacieSessionCommandOutput> | void {
    const command = new UpdateMacieSessionCommand(args);
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
   * <p>Enables an Amazon Macie administrator to suspend or re-enable a member account.</p>
   */
  public updateMemberSession(
    args: UpdateMemberSessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateMemberSessionCommandOutput>;
  public updateMemberSession(
    args: UpdateMemberSessionCommandInput,
    cb: (err: any, data?: UpdateMemberSessionCommandOutput) => void
  ): void;
  public updateMemberSession(
    args: UpdateMemberSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateMemberSessionCommandOutput) => void
  ): void;
  public updateMemberSession(
    args: UpdateMemberSessionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateMemberSessionCommandOutput) => void),
    cb?: (err: any, data?: UpdateMemberSessionCommandOutput) => void
  ): Promise<UpdateMemberSessionCommandOutput> | void {
    const command = new UpdateMemberSessionCommand(args);
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
   * <p>Updates the Amazon Macie configuration settings for an Amazon Web Services organization.</p>
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
}
