// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

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
  CreateAllowListCommand,
  CreateAllowListCommandInput,
  CreateAllowListCommandOutput,
} from "./commands/CreateAllowListCommand";
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
  DeleteAllowListCommand,
  DeleteAllowListCommandInput,
  DeleteAllowListCommandOutput,
} from "./commands/DeleteAllowListCommand";
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
  GetAllowListCommand,
  GetAllowListCommandInput,
  GetAllowListCommandOutput,
} from "./commands/GetAllowListCommand";
import {
  GetAutomatedDiscoveryConfigurationCommand,
  GetAutomatedDiscoveryConfigurationCommandInput,
  GetAutomatedDiscoveryConfigurationCommandOutput,
} from "./commands/GetAutomatedDiscoveryConfigurationCommand";
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
  GetClassificationScopeCommand,
  GetClassificationScopeCommandInput,
  GetClassificationScopeCommandOutput,
} from "./commands/GetClassificationScopeCommand";
import {
  GetCustomDataIdentifierCommand,
  GetCustomDataIdentifierCommandInput,
  GetCustomDataIdentifierCommandOutput,
} from "./commands/GetCustomDataIdentifierCommand";
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
  GetFindingStatisticsCommand,
  GetFindingStatisticsCommandInput,
  GetFindingStatisticsCommandOutput,
} from "./commands/GetFindingStatisticsCommand";
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
  GetResourceProfileCommand,
  GetResourceProfileCommandInput,
  GetResourceProfileCommandOutput,
} from "./commands/GetResourceProfileCommand";
import {
  GetRevealConfigurationCommand,
  GetRevealConfigurationCommandInput,
  GetRevealConfigurationCommandOutput,
} from "./commands/GetRevealConfigurationCommand";
import {
  GetSensitiveDataOccurrencesAvailabilityCommand,
  GetSensitiveDataOccurrencesAvailabilityCommandInput,
  GetSensitiveDataOccurrencesAvailabilityCommandOutput,
} from "./commands/GetSensitiveDataOccurrencesAvailabilityCommand";
import {
  GetSensitiveDataOccurrencesCommand,
  GetSensitiveDataOccurrencesCommandInput,
  GetSensitiveDataOccurrencesCommandOutput,
} from "./commands/GetSensitiveDataOccurrencesCommand";
import {
  GetSensitivityInspectionTemplateCommand,
  GetSensitivityInspectionTemplateCommandInput,
  GetSensitivityInspectionTemplateCommandOutput,
} from "./commands/GetSensitivityInspectionTemplateCommand";
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
  ListAllowListsCommand,
  ListAllowListsCommandInput,
  ListAllowListsCommandOutput,
} from "./commands/ListAllowListsCommand";
import {
  ListClassificationJobsCommand,
  ListClassificationJobsCommandInput,
  ListClassificationJobsCommandOutput,
} from "./commands/ListClassificationJobsCommand";
import {
  ListClassificationScopesCommand,
  ListClassificationScopesCommandInput,
  ListClassificationScopesCommandOutput,
} from "./commands/ListClassificationScopesCommand";
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
  ListResourceProfileArtifactsCommand,
  ListResourceProfileArtifactsCommandInput,
  ListResourceProfileArtifactsCommandOutput,
} from "./commands/ListResourceProfileArtifactsCommand";
import {
  ListResourceProfileDetectionsCommand,
  ListResourceProfileDetectionsCommandInput,
  ListResourceProfileDetectionsCommandOutput,
} from "./commands/ListResourceProfileDetectionsCommand";
import {
  ListSensitivityInspectionTemplatesCommand,
  ListSensitivityInspectionTemplatesCommandInput,
  ListSensitivityInspectionTemplatesCommandOutput,
} from "./commands/ListSensitivityInspectionTemplatesCommand";
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
  UpdateAllowListCommand,
  UpdateAllowListCommandInput,
  UpdateAllowListCommandOutput,
} from "./commands/UpdateAllowListCommand";
import {
  UpdateAutomatedDiscoveryConfigurationCommand,
  UpdateAutomatedDiscoveryConfigurationCommandInput,
  UpdateAutomatedDiscoveryConfigurationCommandOutput,
} from "./commands/UpdateAutomatedDiscoveryConfigurationCommand";
import {
  UpdateClassificationJobCommand,
  UpdateClassificationJobCommandInput,
  UpdateClassificationJobCommandOutput,
} from "./commands/UpdateClassificationJobCommand";
import {
  UpdateClassificationScopeCommand,
  UpdateClassificationScopeCommandInput,
  UpdateClassificationScopeCommandOutput,
} from "./commands/UpdateClassificationScopeCommand";
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
import {
  UpdateResourceProfileCommand,
  UpdateResourceProfileCommandInput,
  UpdateResourceProfileCommandOutput,
} from "./commands/UpdateResourceProfileCommand";
import {
  UpdateResourceProfileDetectionsCommand,
  UpdateResourceProfileDetectionsCommandInput,
  UpdateResourceProfileDetectionsCommandOutput,
} from "./commands/UpdateResourceProfileDetectionsCommand";
import {
  UpdateRevealConfigurationCommand,
  UpdateRevealConfigurationCommandInput,
  UpdateRevealConfigurationCommandOutput,
} from "./commands/UpdateRevealConfigurationCommand";
import {
  UpdateSensitivityInspectionTemplateCommand,
  UpdateSensitivityInspectionTemplateCommandInput,
  UpdateSensitivityInspectionTemplateCommandOutput,
} from "./commands/UpdateSensitivityInspectionTemplateCommand";
import { Macie2Client, Macie2ClientConfig } from "./Macie2Client";

const commands = {
  AcceptInvitationCommand,
  BatchGetCustomDataIdentifiersCommand,
  CreateAllowListCommand,
  CreateClassificationJobCommand,
  CreateCustomDataIdentifierCommand,
  CreateFindingsFilterCommand,
  CreateInvitationsCommand,
  CreateMemberCommand,
  CreateSampleFindingsCommand,
  DeclineInvitationsCommand,
  DeleteAllowListCommand,
  DeleteCustomDataIdentifierCommand,
  DeleteFindingsFilterCommand,
  DeleteInvitationsCommand,
  DeleteMemberCommand,
  DescribeBucketsCommand,
  DescribeClassificationJobCommand,
  DescribeOrganizationConfigurationCommand,
  DisableMacieCommand,
  DisableOrganizationAdminAccountCommand,
  DisassociateFromAdministratorAccountCommand,
  DisassociateFromMasterAccountCommand,
  DisassociateMemberCommand,
  EnableMacieCommand,
  EnableOrganizationAdminAccountCommand,
  GetAdministratorAccountCommand,
  GetAllowListCommand,
  GetAutomatedDiscoveryConfigurationCommand,
  GetBucketStatisticsCommand,
  GetClassificationExportConfigurationCommand,
  GetClassificationScopeCommand,
  GetCustomDataIdentifierCommand,
  GetFindingsCommand,
  GetFindingsFilterCommand,
  GetFindingsPublicationConfigurationCommand,
  GetFindingStatisticsCommand,
  GetInvitationsCountCommand,
  GetMacieSessionCommand,
  GetMasterAccountCommand,
  GetMemberCommand,
  GetResourceProfileCommand,
  GetRevealConfigurationCommand,
  GetSensitiveDataOccurrencesCommand,
  GetSensitiveDataOccurrencesAvailabilityCommand,
  GetSensitivityInspectionTemplateCommand,
  GetUsageStatisticsCommand,
  GetUsageTotalsCommand,
  ListAllowListsCommand,
  ListClassificationJobsCommand,
  ListClassificationScopesCommand,
  ListCustomDataIdentifiersCommand,
  ListFindingsCommand,
  ListFindingsFiltersCommand,
  ListInvitationsCommand,
  ListManagedDataIdentifiersCommand,
  ListMembersCommand,
  ListOrganizationAdminAccountsCommand,
  ListResourceProfileArtifactsCommand,
  ListResourceProfileDetectionsCommand,
  ListSensitivityInspectionTemplatesCommand,
  ListTagsForResourceCommand,
  PutClassificationExportConfigurationCommand,
  PutFindingsPublicationConfigurationCommand,
  SearchResourcesCommand,
  TagResourceCommand,
  TestCustomDataIdentifierCommand,
  UntagResourceCommand,
  UpdateAllowListCommand,
  UpdateAutomatedDiscoveryConfigurationCommand,
  UpdateClassificationJobCommand,
  UpdateClassificationScopeCommand,
  UpdateFindingsFilterCommand,
  UpdateMacieSessionCommand,
  UpdateMemberSessionCommand,
  UpdateOrganizationConfigurationCommand,
  UpdateResourceProfileCommand,
  UpdateResourceProfileDetectionsCommand,
  UpdateRevealConfigurationCommand,
  UpdateSensitivityInspectionTemplateCommand,
};

export interface Macie2 {
  /**
   * @see {@link AcceptInvitationCommand}
   */
  acceptInvitation(
    args: AcceptInvitationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AcceptInvitationCommandOutput>;
  acceptInvitation(
    args: AcceptInvitationCommandInput,
    cb: (err: any, data?: AcceptInvitationCommandOutput) => void
  ): void;
  acceptInvitation(
    args: AcceptInvitationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AcceptInvitationCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetCustomDataIdentifiersCommand}
   */
  batchGetCustomDataIdentifiers(
    args: BatchGetCustomDataIdentifiersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetCustomDataIdentifiersCommandOutput>;
  batchGetCustomDataIdentifiers(
    args: BatchGetCustomDataIdentifiersCommandInput,
    cb: (err: any, data?: BatchGetCustomDataIdentifiersCommandOutput) => void
  ): void;
  batchGetCustomDataIdentifiers(
    args: BatchGetCustomDataIdentifiersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetCustomDataIdentifiersCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAllowListCommand}
   */
  createAllowList(
    args: CreateAllowListCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAllowListCommandOutput>;
  createAllowList(args: CreateAllowListCommandInput, cb: (err: any, data?: CreateAllowListCommandOutput) => void): void;
  createAllowList(
    args: CreateAllowListCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAllowListCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateClassificationJobCommand}
   */
  createClassificationJob(
    args: CreateClassificationJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateClassificationJobCommandOutput>;
  createClassificationJob(
    args: CreateClassificationJobCommandInput,
    cb: (err: any, data?: CreateClassificationJobCommandOutput) => void
  ): void;
  createClassificationJob(
    args: CreateClassificationJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateClassificationJobCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateCustomDataIdentifierCommand}
   */
  createCustomDataIdentifier(
    args: CreateCustomDataIdentifierCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCustomDataIdentifierCommandOutput>;
  createCustomDataIdentifier(
    args: CreateCustomDataIdentifierCommandInput,
    cb: (err: any, data?: CreateCustomDataIdentifierCommandOutput) => void
  ): void;
  createCustomDataIdentifier(
    args: CreateCustomDataIdentifierCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCustomDataIdentifierCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateFindingsFilterCommand}
   */
  createFindingsFilter(
    args: CreateFindingsFilterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateFindingsFilterCommandOutput>;
  createFindingsFilter(
    args: CreateFindingsFilterCommandInput,
    cb: (err: any, data?: CreateFindingsFilterCommandOutput) => void
  ): void;
  createFindingsFilter(
    args: CreateFindingsFilterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFindingsFilterCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateInvitationsCommand}
   */
  createInvitations(
    args: CreateInvitationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateInvitationsCommandOutput>;
  createInvitations(
    args: CreateInvitationsCommandInput,
    cb: (err: any, data?: CreateInvitationsCommandOutput) => void
  ): void;
  createInvitations(
    args: CreateInvitationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateInvitationsCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateMemberCommand}
   */
  createMember(args: CreateMemberCommandInput, options?: __HttpHandlerOptions): Promise<CreateMemberCommandOutput>;
  createMember(args: CreateMemberCommandInput, cb: (err: any, data?: CreateMemberCommandOutput) => void): void;
  createMember(
    args: CreateMemberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMemberCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSampleFindingsCommand}
   */
  createSampleFindings(
    args: CreateSampleFindingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSampleFindingsCommandOutput>;
  createSampleFindings(
    args: CreateSampleFindingsCommandInput,
    cb: (err: any, data?: CreateSampleFindingsCommandOutput) => void
  ): void;
  createSampleFindings(
    args: CreateSampleFindingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSampleFindingsCommandOutput) => void
  ): void;

  /**
   * @see {@link DeclineInvitationsCommand}
   */
  declineInvitations(
    args: DeclineInvitationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeclineInvitationsCommandOutput>;
  declineInvitations(
    args: DeclineInvitationsCommandInput,
    cb: (err: any, data?: DeclineInvitationsCommandOutput) => void
  ): void;
  declineInvitations(
    args: DeclineInvitationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeclineInvitationsCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAllowListCommand}
   */
  deleteAllowList(
    args: DeleteAllowListCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAllowListCommandOutput>;
  deleteAllowList(args: DeleteAllowListCommandInput, cb: (err: any, data?: DeleteAllowListCommandOutput) => void): void;
  deleteAllowList(
    args: DeleteAllowListCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAllowListCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCustomDataIdentifierCommand}
   */
  deleteCustomDataIdentifier(
    args: DeleteCustomDataIdentifierCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCustomDataIdentifierCommandOutput>;
  deleteCustomDataIdentifier(
    args: DeleteCustomDataIdentifierCommandInput,
    cb: (err: any, data?: DeleteCustomDataIdentifierCommandOutput) => void
  ): void;
  deleteCustomDataIdentifier(
    args: DeleteCustomDataIdentifierCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCustomDataIdentifierCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteFindingsFilterCommand}
   */
  deleteFindingsFilter(
    args: DeleteFindingsFilterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteFindingsFilterCommandOutput>;
  deleteFindingsFilter(
    args: DeleteFindingsFilterCommandInput,
    cb: (err: any, data?: DeleteFindingsFilterCommandOutput) => void
  ): void;
  deleteFindingsFilter(
    args: DeleteFindingsFilterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFindingsFilterCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteInvitationsCommand}
   */
  deleteInvitations(
    args: DeleteInvitationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteInvitationsCommandOutput>;
  deleteInvitations(
    args: DeleteInvitationsCommandInput,
    cb: (err: any, data?: DeleteInvitationsCommandOutput) => void
  ): void;
  deleteInvitations(
    args: DeleteInvitationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteInvitationsCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteMemberCommand}
   */
  deleteMember(args: DeleteMemberCommandInput, options?: __HttpHandlerOptions): Promise<DeleteMemberCommandOutput>;
  deleteMember(args: DeleteMemberCommandInput, cb: (err: any, data?: DeleteMemberCommandOutput) => void): void;
  deleteMember(
    args: DeleteMemberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMemberCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeBucketsCommand}
   */
  describeBuckets(
    args: DescribeBucketsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeBucketsCommandOutput>;
  describeBuckets(args: DescribeBucketsCommandInput, cb: (err: any, data?: DescribeBucketsCommandOutput) => void): void;
  describeBuckets(
    args: DescribeBucketsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeBucketsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeClassificationJobCommand}
   */
  describeClassificationJob(
    args: DescribeClassificationJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeClassificationJobCommandOutput>;
  describeClassificationJob(
    args: DescribeClassificationJobCommandInput,
    cb: (err: any, data?: DescribeClassificationJobCommandOutput) => void
  ): void;
  describeClassificationJob(
    args: DescribeClassificationJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeClassificationJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeOrganizationConfigurationCommand}
   */
  describeOrganizationConfiguration(
    args: DescribeOrganizationConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeOrganizationConfigurationCommandOutput>;
  describeOrganizationConfiguration(
    args: DescribeOrganizationConfigurationCommandInput,
    cb: (err: any, data?: DescribeOrganizationConfigurationCommandOutput) => void
  ): void;
  describeOrganizationConfiguration(
    args: DescribeOrganizationConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeOrganizationConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DisableMacieCommand}
   */
  disableMacie(args: DisableMacieCommandInput, options?: __HttpHandlerOptions): Promise<DisableMacieCommandOutput>;
  disableMacie(args: DisableMacieCommandInput, cb: (err: any, data?: DisableMacieCommandOutput) => void): void;
  disableMacie(
    args: DisableMacieCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableMacieCommandOutput) => void
  ): void;

  /**
   * @see {@link DisableOrganizationAdminAccountCommand}
   */
  disableOrganizationAdminAccount(
    args: DisableOrganizationAdminAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisableOrganizationAdminAccountCommandOutput>;
  disableOrganizationAdminAccount(
    args: DisableOrganizationAdminAccountCommandInput,
    cb: (err: any, data?: DisableOrganizationAdminAccountCommandOutput) => void
  ): void;
  disableOrganizationAdminAccount(
    args: DisableOrganizationAdminAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableOrganizationAdminAccountCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateFromAdministratorAccountCommand}
   */
  disassociateFromAdministratorAccount(
    args: DisassociateFromAdministratorAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateFromAdministratorAccountCommandOutput>;
  disassociateFromAdministratorAccount(
    args: DisassociateFromAdministratorAccountCommandInput,
    cb: (err: any, data?: DisassociateFromAdministratorAccountCommandOutput) => void
  ): void;
  disassociateFromAdministratorAccount(
    args: DisassociateFromAdministratorAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateFromAdministratorAccountCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateFromMasterAccountCommand}
   */
  disassociateFromMasterAccount(
    args: DisassociateFromMasterAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateFromMasterAccountCommandOutput>;
  disassociateFromMasterAccount(
    args: DisassociateFromMasterAccountCommandInput,
    cb: (err: any, data?: DisassociateFromMasterAccountCommandOutput) => void
  ): void;
  disassociateFromMasterAccount(
    args: DisassociateFromMasterAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateFromMasterAccountCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateMemberCommand}
   */
  disassociateMember(
    args: DisassociateMemberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateMemberCommandOutput>;
  disassociateMember(
    args: DisassociateMemberCommandInput,
    cb: (err: any, data?: DisassociateMemberCommandOutput) => void
  ): void;
  disassociateMember(
    args: DisassociateMemberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateMemberCommandOutput) => void
  ): void;

  /**
   * @see {@link EnableMacieCommand}
   */
  enableMacie(args: EnableMacieCommandInput, options?: __HttpHandlerOptions): Promise<EnableMacieCommandOutput>;
  enableMacie(args: EnableMacieCommandInput, cb: (err: any, data?: EnableMacieCommandOutput) => void): void;
  enableMacie(
    args: EnableMacieCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableMacieCommandOutput) => void
  ): void;

  /**
   * @see {@link EnableOrganizationAdminAccountCommand}
   */
  enableOrganizationAdminAccount(
    args: EnableOrganizationAdminAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EnableOrganizationAdminAccountCommandOutput>;
  enableOrganizationAdminAccount(
    args: EnableOrganizationAdminAccountCommandInput,
    cb: (err: any, data?: EnableOrganizationAdminAccountCommandOutput) => void
  ): void;
  enableOrganizationAdminAccount(
    args: EnableOrganizationAdminAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableOrganizationAdminAccountCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAdministratorAccountCommand}
   */
  getAdministratorAccount(
    args: GetAdministratorAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAdministratorAccountCommandOutput>;
  getAdministratorAccount(
    args: GetAdministratorAccountCommandInput,
    cb: (err: any, data?: GetAdministratorAccountCommandOutput) => void
  ): void;
  getAdministratorAccount(
    args: GetAdministratorAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAdministratorAccountCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAllowListCommand}
   */
  getAllowList(args: GetAllowListCommandInput, options?: __HttpHandlerOptions): Promise<GetAllowListCommandOutput>;
  getAllowList(args: GetAllowListCommandInput, cb: (err: any, data?: GetAllowListCommandOutput) => void): void;
  getAllowList(
    args: GetAllowListCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAllowListCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAutomatedDiscoveryConfigurationCommand}
   */
  getAutomatedDiscoveryConfiguration(
    args: GetAutomatedDiscoveryConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAutomatedDiscoveryConfigurationCommandOutput>;
  getAutomatedDiscoveryConfiguration(
    args: GetAutomatedDiscoveryConfigurationCommandInput,
    cb: (err: any, data?: GetAutomatedDiscoveryConfigurationCommandOutput) => void
  ): void;
  getAutomatedDiscoveryConfiguration(
    args: GetAutomatedDiscoveryConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAutomatedDiscoveryConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBucketStatisticsCommand}
   */
  getBucketStatistics(
    args: GetBucketStatisticsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBucketStatisticsCommandOutput>;
  getBucketStatistics(
    args: GetBucketStatisticsCommandInput,
    cb: (err: any, data?: GetBucketStatisticsCommandOutput) => void
  ): void;
  getBucketStatistics(
    args: GetBucketStatisticsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBucketStatisticsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetClassificationExportConfigurationCommand}
   */
  getClassificationExportConfiguration(
    args: GetClassificationExportConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetClassificationExportConfigurationCommandOutput>;
  getClassificationExportConfiguration(
    args: GetClassificationExportConfigurationCommandInput,
    cb: (err: any, data?: GetClassificationExportConfigurationCommandOutput) => void
  ): void;
  getClassificationExportConfiguration(
    args: GetClassificationExportConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetClassificationExportConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetClassificationScopeCommand}
   */
  getClassificationScope(
    args: GetClassificationScopeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetClassificationScopeCommandOutput>;
  getClassificationScope(
    args: GetClassificationScopeCommandInput,
    cb: (err: any, data?: GetClassificationScopeCommandOutput) => void
  ): void;
  getClassificationScope(
    args: GetClassificationScopeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetClassificationScopeCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCustomDataIdentifierCommand}
   */
  getCustomDataIdentifier(
    args: GetCustomDataIdentifierCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCustomDataIdentifierCommandOutput>;
  getCustomDataIdentifier(
    args: GetCustomDataIdentifierCommandInput,
    cb: (err: any, data?: GetCustomDataIdentifierCommandOutput) => void
  ): void;
  getCustomDataIdentifier(
    args: GetCustomDataIdentifierCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCustomDataIdentifierCommandOutput) => void
  ): void;

  /**
   * @see {@link GetFindingsCommand}
   */
  getFindings(args: GetFindingsCommandInput, options?: __HttpHandlerOptions): Promise<GetFindingsCommandOutput>;
  getFindings(args: GetFindingsCommandInput, cb: (err: any, data?: GetFindingsCommandOutput) => void): void;
  getFindings(
    args: GetFindingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFindingsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetFindingsFilterCommand}
   */
  getFindingsFilter(
    args: GetFindingsFilterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetFindingsFilterCommandOutput>;
  getFindingsFilter(
    args: GetFindingsFilterCommandInput,
    cb: (err: any, data?: GetFindingsFilterCommandOutput) => void
  ): void;
  getFindingsFilter(
    args: GetFindingsFilterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFindingsFilterCommandOutput) => void
  ): void;

  /**
   * @see {@link GetFindingsPublicationConfigurationCommand}
   */
  getFindingsPublicationConfiguration(
    args: GetFindingsPublicationConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetFindingsPublicationConfigurationCommandOutput>;
  getFindingsPublicationConfiguration(
    args: GetFindingsPublicationConfigurationCommandInput,
    cb: (err: any, data?: GetFindingsPublicationConfigurationCommandOutput) => void
  ): void;
  getFindingsPublicationConfiguration(
    args: GetFindingsPublicationConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFindingsPublicationConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetFindingStatisticsCommand}
   */
  getFindingStatistics(
    args: GetFindingStatisticsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetFindingStatisticsCommandOutput>;
  getFindingStatistics(
    args: GetFindingStatisticsCommandInput,
    cb: (err: any, data?: GetFindingStatisticsCommandOutput) => void
  ): void;
  getFindingStatistics(
    args: GetFindingStatisticsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFindingStatisticsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetInvitationsCountCommand}
   */
  getInvitationsCount(
    args: GetInvitationsCountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetInvitationsCountCommandOutput>;
  getInvitationsCount(
    args: GetInvitationsCountCommandInput,
    cb: (err: any, data?: GetInvitationsCountCommandOutput) => void
  ): void;
  getInvitationsCount(
    args: GetInvitationsCountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetInvitationsCountCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMacieSessionCommand}
   */
  getMacieSession(
    args: GetMacieSessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMacieSessionCommandOutput>;
  getMacieSession(args: GetMacieSessionCommandInput, cb: (err: any, data?: GetMacieSessionCommandOutput) => void): void;
  getMacieSession(
    args: GetMacieSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMacieSessionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMasterAccountCommand}
   */
  getMasterAccount(
    args: GetMasterAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMasterAccountCommandOutput>;
  getMasterAccount(
    args: GetMasterAccountCommandInput,
    cb: (err: any, data?: GetMasterAccountCommandOutput) => void
  ): void;
  getMasterAccount(
    args: GetMasterAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMasterAccountCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMemberCommand}
   */
  getMember(args: GetMemberCommandInput, options?: __HttpHandlerOptions): Promise<GetMemberCommandOutput>;
  getMember(args: GetMemberCommandInput, cb: (err: any, data?: GetMemberCommandOutput) => void): void;
  getMember(
    args: GetMemberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMemberCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResourceProfileCommand}
   */
  getResourceProfile(
    args: GetResourceProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResourceProfileCommandOutput>;
  getResourceProfile(
    args: GetResourceProfileCommandInput,
    cb: (err: any, data?: GetResourceProfileCommandOutput) => void
  ): void;
  getResourceProfile(
    args: GetResourceProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResourceProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRevealConfigurationCommand}
   */
  getRevealConfiguration(
    args: GetRevealConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRevealConfigurationCommandOutput>;
  getRevealConfiguration(
    args: GetRevealConfigurationCommandInput,
    cb: (err: any, data?: GetRevealConfigurationCommandOutput) => void
  ): void;
  getRevealConfiguration(
    args: GetRevealConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRevealConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSensitiveDataOccurrencesCommand}
   */
  getSensitiveDataOccurrences(
    args: GetSensitiveDataOccurrencesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSensitiveDataOccurrencesCommandOutput>;
  getSensitiveDataOccurrences(
    args: GetSensitiveDataOccurrencesCommandInput,
    cb: (err: any, data?: GetSensitiveDataOccurrencesCommandOutput) => void
  ): void;
  getSensitiveDataOccurrences(
    args: GetSensitiveDataOccurrencesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSensitiveDataOccurrencesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSensitiveDataOccurrencesAvailabilityCommand}
   */
  getSensitiveDataOccurrencesAvailability(
    args: GetSensitiveDataOccurrencesAvailabilityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSensitiveDataOccurrencesAvailabilityCommandOutput>;
  getSensitiveDataOccurrencesAvailability(
    args: GetSensitiveDataOccurrencesAvailabilityCommandInput,
    cb: (err: any, data?: GetSensitiveDataOccurrencesAvailabilityCommandOutput) => void
  ): void;
  getSensitiveDataOccurrencesAvailability(
    args: GetSensitiveDataOccurrencesAvailabilityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSensitiveDataOccurrencesAvailabilityCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSensitivityInspectionTemplateCommand}
   */
  getSensitivityInspectionTemplate(
    args: GetSensitivityInspectionTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSensitivityInspectionTemplateCommandOutput>;
  getSensitivityInspectionTemplate(
    args: GetSensitivityInspectionTemplateCommandInput,
    cb: (err: any, data?: GetSensitivityInspectionTemplateCommandOutput) => void
  ): void;
  getSensitivityInspectionTemplate(
    args: GetSensitivityInspectionTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSensitivityInspectionTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link GetUsageStatisticsCommand}
   */
  getUsageStatistics(
    args: GetUsageStatisticsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetUsageStatisticsCommandOutput>;
  getUsageStatistics(
    args: GetUsageStatisticsCommandInput,
    cb: (err: any, data?: GetUsageStatisticsCommandOutput) => void
  ): void;
  getUsageStatistics(
    args: GetUsageStatisticsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetUsageStatisticsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetUsageTotalsCommand}
   */
  getUsageTotals(
    args: GetUsageTotalsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetUsageTotalsCommandOutput>;
  getUsageTotals(args: GetUsageTotalsCommandInput, cb: (err: any, data?: GetUsageTotalsCommandOutput) => void): void;
  getUsageTotals(
    args: GetUsageTotalsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetUsageTotalsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAllowListsCommand}
   */
  listAllowLists(
    args: ListAllowListsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAllowListsCommandOutput>;
  listAllowLists(args: ListAllowListsCommandInput, cb: (err: any, data?: ListAllowListsCommandOutput) => void): void;
  listAllowLists(
    args: ListAllowListsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAllowListsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListClassificationJobsCommand}
   */
  listClassificationJobs(
    args: ListClassificationJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListClassificationJobsCommandOutput>;
  listClassificationJobs(
    args: ListClassificationJobsCommandInput,
    cb: (err: any, data?: ListClassificationJobsCommandOutput) => void
  ): void;
  listClassificationJobs(
    args: ListClassificationJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListClassificationJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListClassificationScopesCommand}
   */
  listClassificationScopes(
    args: ListClassificationScopesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListClassificationScopesCommandOutput>;
  listClassificationScopes(
    args: ListClassificationScopesCommandInput,
    cb: (err: any, data?: ListClassificationScopesCommandOutput) => void
  ): void;
  listClassificationScopes(
    args: ListClassificationScopesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListClassificationScopesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCustomDataIdentifiersCommand}
   */
  listCustomDataIdentifiers(
    args: ListCustomDataIdentifiersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCustomDataIdentifiersCommandOutput>;
  listCustomDataIdentifiers(
    args: ListCustomDataIdentifiersCommandInput,
    cb: (err: any, data?: ListCustomDataIdentifiersCommandOutput) => void
  ): void;
  listCustomDataIdentifiers(
    args: ListCustomDataIdentifiersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCustomDataIdentifiersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFindingsCommand}
   */
  listFindings(args: ListFindingsCommandInput, options?: __HttpHandlerOptions): Promise<ListFindingsCommandOutput>;
  listFindings(args: ListFindingsCommandInput, cb: (err: any, data?: ListFindingsCommandOutput) => void): void;
  listFindings(
    args: ListFindingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFindingsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFindingsFiltersCommand}
   */
  listFindingsFilters(
    args: ListFindingsFiltersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFindingsFiltersCommandOutput>;
  listFindingsFilters(
    args: ListFindingsFiltersCommandInput,
    cb: (err: any, data?: ListFindingsFiltersCommandOutput) => void
  ): void;
  listFindingsFilters(
    args: ListFindingsFiltersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFindingsFiltersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListInvitationsCommand}
   */
  listInvitations(
    args: ListInvitationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListInvitationsCommandOutput>;
  listInvitations(args: ListInvitationsCommandInput, cb: (err: any, data?: ListInvitationsCommandOutput) => void): void;
  listInvitations(
    args: ListInvitationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListInvitationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListManagedDataIdentifiersCommand}
   */
  listManagedDataIdentifiers(
    args: ListManagedDataIdentifiersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListManagedDataIdentifiersCommandOutput>;
  listManagedDataIdentifiers(
    args: ListManagedDataIdentifiersCommandInput,
    cb: (err: any, data?: ListManagedDataIdentifiersCommandOutput) => void
  ): void;
  listManagedDataIdentifiers(
    args: ListManagedDataIdentifiersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListManagedDataIdentifiersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMembersCommand}
   */
  listMembers(args: ListMembersCommandInput, options?: __HttpHandlerOptions): Promise<ListMembersCommandOutput>;
  listMembers(args: ListMembersCommandInput, cb: (err: any, data?: ListMembersCommandOutput) => void): void;
  listMembers(
    args: ListMembersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMembersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListOrganizationAdminAccountsCommand}
   */
  listOrganizationAdminAccounts(
    args: ListOrganizationAdminAccountsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListOrganizationAdminAccountsCommandOutput>;
  listOrganizationAdminAccounts(
    args: ListOrganizationAdminAccountsCommandInput,
    cb: (err: any, data?: ListOrganizationAdminAccountsCommandOutput) => void
  ): void;
  listOrganizationAdminAccounts(
    args: ListOrganizationAdminAccountsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListOrganizationAdminAccountsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListResourceProfileArtifactsCommand}
   */
  listResourceProfileArtifacts(
    args: ListResourceProfileArtifactsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListResourceProfileArtifactsCommandOutput>;
  listResourceProfileArtifacts(
    args: ListResourceProfileArtifactsCommandInput,
    cb: (err: any, data?: ListResourceProfileArtifactsCommandOutput) => void
  ): void;
  listResourceProfileArtifacts(
    args: ListResourceProfileArtifactsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListResourceProfileArtifactsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListResourceProfileDetectionsCommand}
   */
  listResourceProfileDetections(
    args: ListResourceProfileDetectionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListResourceProfileDetectionsCommandOutput>;
  listResourceProfileDetections(
    args: ListResourceProfileDetectionsCommandInput,
    cb: (err: any, data?: ListResourceProfileDetectionsCommandOutput) => void
  ): void;
  listResourceProfileDetections(
    args: ListResourceProfileDetectionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListResourceProfileDetectionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSensitivityInspectionTemplatesCommand}
   */
  listSensitivityInspectionTemplates(
    args: ListSensitivityInspectionTemplatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSensitivityInspectionTemplatesCommandOutput>;
  listSensitivityInspectionTemplates(
    args: ListSensitivityInspectionTemplatesCommandInput,
    cb: (err: any, data?: ListSensitivityInspectionTemplatesCommandOutput) => void
  ): void;
  listSensitivityInspectionTemplates(
    args: ListSensitivityInspectionTemplatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSensitivityInspectionTemplatesCommandOutput) => void
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
   * @see {@link PutClassificationExportConfigurationCommand}
   */
  putClassificationExportConfiguration(
    args: PutClassificationExportConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutClassificationExportConfigurationCommandOutput>;
  putClassificationExportConfiguration(
    args: PutClassificationExportConfigurationCommandInput,
    cb: (err: any, data?: PutClassificationExportConfigurationCommandOutput) => void
  ): void;
  putClassificationExportConfiguration(
    args: PutClassificationExportConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutClassificationExportConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link PutFindingsPublicationConfigurationCommand}
   */
  putFindingsPublicationConfiguration(
    args: PutFindingsPublicationConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutFindingsPublicationConfigurationCommandOutput>;
  putFindingsPublicationConfiguration(
    args: PutFindingsPublicationConfigurationCommandInput,
    cb: (err: any, data?: PutFindingsPublicationConfigurationCommandOutput) => void
  ): void;
  putFindingsPublicationConfiguration(
    args: PutFindingsPublicationConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutFindingsPublicationConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchResourcesCommand}
   */
  searchResources(
    args: SearchResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchResourcesCommandOutput>;
  searchResources(args: SearchResourcesCommandInput, cb: (err: any, data?: SearchResourcesCommandOutput) => void): void;
  searchResources(
    args: SearchResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchResourcesCommandOutput) => void
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
   * @see {@link TestCustomDataIdentifierCommand}
   */
  testCustomDataIdentifier(
    args: TestCustomDataIdentifierCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TestCustomDataIdentifierCommandOutput>;
  testCustomDataIdentifier(
    args: TestCustomDataIdentifierCommandInput,
    cb: (err: any, data?: TestCustomDataIdentifierCommandOutput) => void
  ): void;
  testCustomDataIdentifier(
    args: TestCustomDataIdentifierCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TestCustomDataIdentifierCommandOutput) => void
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
   * @see {@link UpdateAllowListCommand}
   */
  updateAllowList(
    args: UpdateAllowListCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAllowListCommandOutput>;
  updateAllowList(args: UpdateAllowListCommandInput, cb: (err: any, data?: UpdateAllowListCommandOutput) => void): void;
  updateAllowList(
    args: UpdateAllowListCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAllowListCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAutomatedDiscoveryConfigurationCommand}
   */
  updateAutomatedDiscoveryConfiguration(
    args: UpdateAutomatedDiscoveryConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAutomatedDiscoveryConfigurationCommandOutput>;
  updateAutomatedDiscoveryConfiguration(
    args: UpdateAutomatedDiscoveryConfigurationCommandInput,
    cb: (err: any, data?: UpdateAutomatedDiscoveryConfigurationCommandOutput) => void
  ): void;
  updateAutomatedDiscoveryConfiguration(
    args: UpdateAutomatedDiscoveryConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAutomatedDiscoveryConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateClassificationJobCommand}
   */
  updateClassificationJob(
    args: UpdateClassificationJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateClassificationJobCommandOutput>;
  updateClassificationJob(
    args: UpdateClassificationJobCommandInput,
    cb: (err: any, data?: UpdateClassificationJobCommandOutput) => void
  ): void;
  updateClassificationJob(
    args: UpdateClassificationJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateClassificationJobCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateClassificationScopeCommand}
   */
  updateClassificationScope(
    args: UpdateClassificationScopeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateClassificationScopeCommandOutput>;
  updateClassificationScope(
    args: UpdateClassificationScopeCommandInput,
    cb: (err: any, data?: UpdateClassificationScopeCommandOutput) => void
  ): void;
  updateClassificationScope(
    args: UpdateClassificationScopeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateClassificationScopeCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateFindingsFilterCommand}
   */
  updateFindingsFilter(
    args: UpdateFindingsFilterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFindingsFilterCommandOutput>;
  updateFindingsFilter(
    args: UpdateFindingsFilterCommandInput,
    cb: (err: any, data?: UpdateFindingsFilterCommandOutput) => void
  ): void;
  updateFindingsFilter(
    args: UpdateFindingsFilterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFindingsFilterCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateMacieSessionCommand}
   */
  updateMacieSession(
    args: UpdateMacieSessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateMacieSessionCommandOutput>;
  updateMacieSession(
    args: UpdateMacieSessionCommandInput,
    cb: (err: any, data?: UpdateMacieSessionCommandOutput) => void
  ): void;
  updateMacieSession(
    args: UpdateMacieSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateMacieSessionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateMemberSessionCommand}
   */
  updateMemberSession(
    args: UpdateMemberSessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateMemberSessionCommandOutput>;
  updateMemberSession(
    args: UpdateMemberSessionCommandInput,
    cb: (err: any, data?: UpdateMemberSessionCommandOutput) => void
  ): void;
  updateMemberSession(
    args: UpdateMemberSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateMemberSessionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateOrganizationConfigurationCommand}
   */
  updateOrganizationConfiguration(
    args: UpdateOrganizationConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateOrganizationConfigurationCommandOutput>;
  updateOrganizationConfiguration(
    args: UpdateOrganizationConfigurationCommandInput,
    cb: (err: any, data?: UpdateOrganizationConfigurationCommandOutput) => void
  ): void;
  updateOrganizationConfiguration(
    args: UpdateOrganizationConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateOrganizationConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateResourceProfileCommand}
   */
  updateResourceProfile(
    args: UpdateResourceProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateResourceProfileCommandOutput>;
  updateResourceProfile(
    args: UpdateResourceProfileCommandInput,
    cb: (err: any, data?: UpdateResourceProfileCommandOutput) => void
  ): void;
  updateResourceProfile(
    args: UpdateResourceProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateResourceProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateResourceProfileDetectionsCommand}
   */
  updateResourceProfileDetections(
    args: UpdateResourceProfileDetectionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateResourceProfileDetectionsCommandOutput>;
  updateResourceProfileDetections(
    args: UpdateResourceProfileDetectionsCommandInput,
    cb: (err: any, data?: UpdateResourceProfileDetectionsCommandOutput) => void
  ): void;
  updateResourceProfileDetections(
    args: UpdateResourceProfileDetectionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateResourceProfileDetectionsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRevealConfigurationCommand}
   */
  updateRevealConfiguration(
    args: UpdateRevealConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRevealConfigurationCommandOutput>;
  updateRevealConfiguration(
    args: UpdateRevealConfigurationCommandInput,
    cb: (err: any, data?: UpdateRevealConfigurationCommandOutput) => void
  ): void;
  updateRevealConfiguration(
    args: UpdateRevealConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRevealConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSensitivityInspectionTemplateCommand}
   */
  updateSensitivityInspectionTemplate(
    args: UpdateSensitivityInspectionTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSensitivityInspectionTemplateCommandOutput>;
  updateSensitivityInspectionTemplate(
    args: UpdateSensitivityInspectionTemplateCommandInput,
    cb: (err: any, data?: UpdateSensitivityInspectionTemplateCommandOutput) => void
  ): void;
  updateSensitivityInspectionTemplate(
    args: UpdateSensitivityInspectionTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSensitivityInspectionTemplateCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>Amazon Macie</p>
 */
export class Macie2 extends Macie2Client implements Macie2 {}
createAggregatedClient(commands, Macie2);
