// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

import {
  type AssociateLensesCommandInput,
  type AssociateLensesCommandOutput,
  AssociateLensesCommand,
} from "./commands/AssociateLensesCommand";
import {
  type AssociateProfilesCommandInput,
  type AssociateProfilesCommandOutput,
  AssociateProfilesCommand,
} from "./commands/AssociateProfilesCommand";
import {
  type CreateLensShareCommandInput,
  type CreateLensShareCommandOutput,
  CreateLensShareCommand,
} from "./commands/CreateLensShareCommand";
import {
  type CreateLensVersionCommandInput,
  type CreateLensVersionCommandOutput,
  CreateLensVersionCommand,
} from "./commands/CreateLensVersionCommand";
import {
  type CreateMilestoneCommandInput,
  type CreateMilestoneCommandOutput,
  CreateMilestoneCommand,
} from "./commands/CreateMilestoneCommand";
import {
  type CreateProfileCommandInput,
  type CreateProfileCommandOutput,
  CreateProfileCommand,
} from "./commands/CreateProfileCommand";
import {
  type CreateProfileShareCommandInput,
  type CreateProfileShareCommandOutput,
  CreateProfileShareCommand,
} from "./commands/CreateProfileShareCommand";
import {
  type CreateReviewTemplateCommandInput,
  type CreateReviewTemplateCommandOutput,
  CreateReviewTemplateCommand,
} from "./commands/CreateReviewTemplateCommand";
import {
  type CreateTemplateShareCommandInput,
  type CreateTemplateShareCommandOutput,
  CreateTemplateShareCommand,
} from "./commands/CreateTemplateShareCommand";
import {
  type CreateWorkloadCommandInput,
  type CreateWorkloadCommandOutput,
  CreateWorkloadCommand,
} from "./commands/CreateWorkloadCommand";
import {
  type CreateWorkloadShareCommandInput,
  type CreateWorkloadShareCommandOutput,
  CreateWorkloadShareCommand,
} from "./commands/CreateWorkloadShareCommand";
import {
  type DeleteLensCommandInput,
  type DeleteLensCommandOutput,
  DeleteLensCommand,
} from "./commands/DeleteLensCommand";
import {
  type DeleteLensShareCommandInput,
  type DeleteLensShareCommandOutput,
  DeleteLensShareCommand,
} from "./commands/DeleteLensShareCommand";
import {
  type DeleteProfileCommandInput,
  type DeleteProfileCommandOutput,
  DeleteProfileCommand,
} from "./commands/DeleteProfileCommand";
import {
  type DeleteProfileShareCommandInput,
  type DeleteProfileShareCommandOutput,
  DeleteProfileShareCommand,
} from "./commands/DeleteProfileShareCommand";
import {
  type DeleteReviewTemplateCommandInput,
  type DeleteReviewTemplateCommandOutput,
  DeleteReviewTemplateCommand,
} from "./commands/DeleteReviewTemplateCommand";
import {
  type DeleteTemplateShareCommandInput,
  type DeleteTemplateShareCommandOutput,
  DeleteTemplateShareCommand,
} from "./commands/DeleteTemplateShareCommand";
import {
  type DeleteWorkloadCommandInput,
  type DeleteWorkloadCommandOutput,
  DeleteWorkloadCommand,
} from "./commands/DeleteWorkloadCommand";
import {
  type DeleteWorkloadShareCommandInput,
  type DeleteWorkloadShareCommandOutput,
  DeleteWorkloadShareCommand,
} from "./commands/DeleteWorkloadShareCommand";
import {
  type DisassociateLensesCommandInput,
  type DisassociateLensesCommandOutput,
  DisassociateLensesCommand,
} from "./commands/DisassociateLensesCommand";
import {
  type DisassociateProfilesCommandInput,
  type DisassociateProfilesCommandOutput,
  DisassociateProfilesCommand,
} from "./commands/DisassociateProfilesCommand";
import {
  type ExportLensCommandInput,
  type ExportLensCommandOutput,
  ExportLensCommand,
} from "./commands/ExportLensCommand";
import { type GetAnswerCommandInput, type GetAnswerCommandOutput, GetAnswerCommand } from "./commands/GetAnswerCommand";
import {
  type GetConsolidatedReportCommandInput,
  type GetConsolidatedReportCommandOutput,
  GetConsolidatedReportCommand,
} from "./commands/GetConsolidatedReportCommand";
import {
  type GetGlobalSettingsCommandInput,
  type GetGlobalSettingsCommandOutput,
  GetGlobalSettingsCommand,
} from "./commands/GetGlobalSettingsCommand";
import { type GetLensCommandInput, type GetLensCommandOutput, GetLensCommand } from "./commands/GetLensCommand";
import {
  type GetLensReviewCommandInput,
  type GetLensReviewCommandOutput,
  GetLensReviewCommand,
} from "./commands/GetLensReviewCommand";
import {
  type GetLensReviewReportCommandInput,
  type GetLensReviewReportCommandOutput,
  GetLensReviewReportCommand,
} from "./commands/GetLensReviewReportCommand";
import {
  type GetLensVersionDifferenceCommandInput,
  type GetLensVersionDifferenceCommandOutput,
  GetLensVersionDifferenceCommand,
} from "./commands/GetLensVersionDifferenceCommand";
import {
  type GetMilestoneCommandInput,
  type GetMilestoneCommandOutput,
  GetMilestoneCommand,
} from "./commands/GetMilestoneCommand";
import {
  type GetProfileCommandInput,
  type GetProfileCommandOutput,
  GetProfileCommand,
} from "./commands/GetProfileCommand";
import {
  type GetProfileTemplateCommandInput,
  type GetProfileTemplateCommandOutput,
  GetProfileTemplateCommand,
} from "./commands/GetProfileTemplateCommand";
import {
  type GetReviewTemplateAnswerCommandInput,
  type GetReviewTemplateAnswerCommandOutput,
  GetReviewTemplateAnswerCommand,
} from "./commands/GetReviewTemplateAnswerCommand";
import {
  type GetReviewTemplateCommandInput,
  type GetReviewTemplateCommandOutput,
  GetReviewTemplateCommand,
} from "./commands/GetReviewTemplateCommand";
import {
  type GetReviewTemplateLensReviewCommandInput,
  type GetReviewTemplateLensReviewCommandOutput,
  GetReviewTemplateLensReviewCommand,
} from "./commands/GetReviewTemplateLensReviewCommand";
import {
  type GetWorkloadCommandInput,
  type GetWorkloadCommandOutput,
  GetWorkloadCommand,
} from "./commands/GetWorkloadCommand";
import {
  type ImportLensCommandInput,
  type ImportLensCommandOutput,
  ImportLensCommand,
} from "./commands/ImportLensCommand";
import {
  type ListAnswersCommandInput,
  type ListAnswersCommandOutput,
  ListAnswersCommand,
} from "./commands/ListAnswersCommand";
import {
  type ListCheckDetailsCommandInput,
  type ListCheckDetailsCommandOutput,
  ListCheckDetailsCommand,
} from "./commands/ListCheckDetailsCommand";
import {
  type ListCheckSummariesCommandInput,
  type ListCheckSummariesCommandOutput,
  ListCheckSummariesCommand,
} from "./commands/ListCheckSummariesCommand";
import {
  type ListLensesCommandInput,
  type ListLensesCommandOutput,
  ListLensesCommand,
} from "./commands/ListLensesCommand";
import {
  type ListLensReviewImprovementsCommandInput,
  type ListLensReviewImprovementsCommandOutput,
  ListLensReviewImprovementsCommand,
} from "./commands/ListLensReviewImprovementsCommand";
import {
  type ListLensReviewsCommandInput,
  type ListLensReviewsCommandOutput,
  ListLensReviewsCommand,
} from "./commands/ListLensReviewsCommand";
import {
  type ListLensSharesCommandInput,
  type ListLensSharesCommandOutput,
  ListLensSharesCommand,
} from "./commands/ListLensSharesCommand";
import {
  type ListMilestonesCommandInput,
  type ListMilestonesCommandOutput,
  ListMilestonesCommand,
} from "./commands/ListMilestonesCommand";
import {
  type ListNotificationsCommandInput,
  type ListNotificationsCommandOutput,
  ListNotificationsCommand,
} from "./commands/ListNotificationsCommand";
import {
  type ListProfileNotificationsCommandInput,
  type ListProfileNotificationsCommandOutput,
  ListProfileNotificationsCommand,
} from "./commands/ListProfileNotificationsCommand";
import {
  type ListProfilesCommandInput,
  type ListProfilesCommandOutput,
  ListProfilesCommand,
} from "./commands/ListProfilesCommand";
import {
  type ListProfileSharesCommandInput,
  type ListProfileSharesCommandOutput,
  ListProfileSharesCommand,
} from "./commands/ListProfileSharesCommand";
import {
  type ListReviewTemplateAnswersCommandInput,
  type ListReviewTemplateAnswersCommandOutput,
  ListReviewTemplateAnswersCommand,
} from "./commands/ListReviewTemplateAnswersCommand";
import {
  type ListReviewTemplatesCommandInput,
  type ListReviewTemplatesCommandOutput,
  ListReviewTemplatesCommand,
} from "./commands/ListReviewTemplatesCommand";
import {
  type ListShareInvitationsCommandInput,
  type ListShareInvitationsCommandOutput,
  ListShareInvitationsCommand,
} from "./commands/ListShareInvitationsCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type ListTemplateSharesCommandInput,
  type ListTemplateSharesCommandOutput,
  ListTemplateSharesCommand,
} from "./commands/ListTemplateSharesCommand";
import {
  type ListWorkloadsCommandInput,
  type ListWorkloadsCommandOutput,
  ListWorkloadsCommand,
} from "./commands/ListWorkloadsCommand";
import {
  type ListWorkloadSharesCommandInput,
  type ListWorkloadSharesCommandOutput,
  ListWorkloadSharesCommand,
} from "./commands/ListWorkloadSharesCommand";
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
  type UpdateAnswerCommandInput,
  type UpdateAnswerCommandOutput,
  UpdateAnswerCommand,
} from "./commands/UpdateAnswerCommand";
import {
  type UpdateGlobalSettingsCommandInput,
  type UpdateGlobalSettingsCommandOutput,
  UpdateGlobalSettingsCommand,
} from "./commands/UpdateGlobalSettingsCommand";
import {
  type UpdateIntegrationCommandInput,
  type UpdateIntegrationCommandOutput,
  UpdateIntegrationCommand,
} from "./commands/UpdateIntegrationCommand";
import {
  type UpdateLensReviewCommandInput,
  type UpdateLensReviewCommandOutput,
  UpdateLensReviewCommand,
} from "./commands/UpdateLensReviewCommand";
import {
  type UpdateProfileCommandInput,
  type UpdateProfileCommandOutput,
  UpdateProfileCommand,
} from "./commands/UpdateProfileCommand";
import {
  type UpdateReviewTemplateAnswerCommandInput,
  type UpdateReviewTemplateAnswerCommandOutput,
  UpdateReviewTemplateAnswerCommand,
} from "./commands/UpdateReviewTemplateAnswerCommand";
import {
  type UpdateReviewTemplateCommandInput,
  type UpdateReviewTemplateCommandOutput,
  UpdateReviewTemplateCommand,
} from "./commands/UpdateReviewTemplateCommand";
import {
  type UpdateReviewTemplateLensReviewCommandInput,
  type UpdateReviewTemplateLensReviewCommandOutput,
  UpdateReviewTemplateLensReviewCommand,
} from "./commands/UpdateReviewTemplateLensReviewCommand";
import {
  type UpdateShareInvitationCommandInput,
  type UpdateShareInvitationCommandOutput,
  UpdateShareInvitationCommand,
} from "./commands/UpdateShareInvitationCommand";
import {
  type UpdateWorkloadCommandInput,
  type UpdateWorkloadCommandOutput,
  UpdateWorkloadCommand,
} from "./commands/UpdateWorkloadCommand";
import {
  type UpdateWorkloadShareCommandInput,
  type UpdateWorkloadShareCommandOutput,
  UpdateWorkloadShareCommand,
} from "./commands/UpdateWorkloadShareCommand";
import {
  type UpgradeLensReviewCommandInput,
  type UpgradeLensReviewCommandOutput,
  UpgradeLensReviewCommand,
} from "./commands/UpgradeLensReviewCommand";
import {
  type UpgradeProfileVersionCommandInput,
  type UpgradeProfileVersionCommandOutput,
  UpgradeProfileVersionCommand,
} from "./commands/UpgradeProfileVersionCommand";
import {
  type UpgradeReviewTemplateLensReviewCommandInput,
  type UpgradeReviewTemplateLensReviewCommandOutput,
  UpgradeReviewTemplateLensReviewCommand,
} from "./commands/UpgradeReviewTemplateLensReviewCommand";
import { paginateGetConsolidatedReport } from "./pagination/GetConsolidatedReportPaginator";
import { paginateListAnswers } from "./pagination/ListAnswersPaginator";
import { paginateListCheckDetails } from "./pagination/ListCheckDetailsPaginator";
import { paginateListCheckSummaries } from "./pagination/ListCheckSummariesPaginator";
import { paginateListLenses } from "./pagination/ListLensesPaginator";
import { paginateListLensReviewImprovements } from "./pagination/ListLensReviewImprovementsPaginator";
import { paginateListLensReviews } from "./pagination/ListLensReviewsPaginator";
import { paginateListLensShares } from "./pagination/ListLensSharesPaginator";
import { paginateListMilestones } from "./pagination/ListMilestonesPaginator";
import { paginateListNotifications } from "./pagination/ListNotificationsPaginator";
import { paginateListProfileNotifications } from "./pagination/ListProfileNotificationsPaginator";
import { paginateListProfileShares } from "./pagination/ListProfileSharesPaginator";
import { paginateListProfiles } from "./pagination/ListProfilesPaginator";
import { paginateListReviewTemplateAnswers } from "./pagination/ListReviewTemplateAnswersPaginator";
import { paginateListReviewTemplates } from "./pagination/ListReviewTemplatesPaginator";
import { paginateListShareInvitations } from "./pagination/ListShareInvitationsPaginator";
import { paginateListTemplateShares } from "./pagination/ListTemplateSharesPaginator";
import { paginateListWorkloadShares } from "./pagination/ListWorkloadSharesPaginator";
import { paginateListWorkloads } from "./pagination/ListWorkloadsPaginator";
import { WellArchitectedClient } from "./WellArchitectedClient";

const commands = {
  AssociateLensesCommand,
  AssociateProfilesCommand,
  CreateLensShareCommand,
  CreateLensVersionCommand,
  CreateMilestoneCommand,
  CreateProfileCommand,
  CreateProfileShareCommand,
  CreateReviewTemplateCommand,
  CreateTemplateShareCommand,
  CreateWorkloadCommand,
  CreateWorkloadShareCommand,
  DeleteLensCommand,
  DeleteLensShareCommand,
  DeleteProfileCommand,
  DeleteProfileShareCommand,
  DeleteReviewTemplateCommand,
  DeleteTemplateShareCommand,
  DeleteWorkloadCommand,
  DeleteWorkloadShareCommand,
  DisassociateLensesCommand,
  DisassociateProfilesCommand,
  ExportLensCommand,
  GetAnswerCommand,
  GetConsolidatedReportCommand,
  GetGlobalSettingsCommand,
  GetLensCommand,
  GetLensReviewCommand,
  GetLensReviewReportCommand,
  GetLensVersionDifferenceCommand,
  GetMilestoneCommand,
  GetProfileCommand,
  GetProfileTemplateCommand,
  GetReviewTemplateCommand,
  GetReviewTemplateAnswerCommand,
  GetReviewTemplateLensReviewCommand,
  GetWorkloadCommand,
  ImportLensCommand,
  ListAnswersCommand,
  ListCheckDetailsCommand,
  ListCheckSummariesCommand,
  ListLensesCommand,
  ListLensReviewImprovementsCommand,
  ListLensReviewsCommand,
  ListLensSharesCommand,
  ListMilestonesCommand,
  ListNotificationsCommand,
  ListProfileNotificationsCommand,
  ListProfilesCommand,
  ListProfileSharesCommand,
  ListReviewTemplateAnswersCommand,
  ListReviewTemplatesCommand,
  ListShareInvitationsCommand,
  ListTagsForResourceCommand,
  ListTemplateSharesCommand,
  ListWorkloadsCommand,
  ListWorkloadSharesCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateAnswerCommand,
  UpdateGlobalSettingsCommand,
  UpdateIntegrationCommand,
  UpdateLensReviewCommand,
  UpdateProfileCommand,
  UpdateReviewTemplateCommand,
  UpdateReviewTemplateAnswerCommand,
  UpdateReviewTemplateLensReviewCommand,
  UpdateShareInvitationCommand,
  UpdateWorkloadCommand,
  UpdateWorkloadShareCommand,
  UpgradeLensReviewCommand,
  UpgradeProfileVersionCommand,
  UpgradeReviewTemplateLensReviewCommand,
};
const paginators = {
  paginateGetConsolidatedReport,
  paginateListAnswers,
  paginateListCheckDetails,
  paginateListCheckSummaries,
  paginateListLenses,
  paginateListLensReviewImprovements,
  paginateListLensReviews,
  paginateListLensShares,
  paginateListMilestones,
  paginateListNotifications,
  paginateListProfileNotifications,
  paginateListProfiles,
  paginateListProfileShares,
  paginateListReviewTemplateAnswers,
  paginateListReviewTemplates,
  paginateListShareInvitations,
  paginateListTemplateShares,
  paginateListWorkloads,
  paginateListWorkloadShares,
};

export interface WellArchitected {
  /**
   * @see {@link AssociateLensesCommand}
   */
  associateLenses(
    args: AssociateLensesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateLensesCommandOutput>;
  associateLenses(
    args: AssociateLensesCommandInput,
    cb: (err: any, data?: AssociateLensesCommandOutput) => void
  ): void;
  associateLenses(
    args: AssociateLensesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateLensesCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateProfilesCommand}
   */
  associateProfiles(
    args: AssociateProfilesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateProfilesCommandOutput>;
  associateProfiles(
    args: AssociateProfilesCommandInput,
    cb: (err: any, data?: AssociateProfilesCommandOutput) => void
  ): void;
  associateProfiles(
    args: AssociateProfilesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateProfilesCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateLensShareCommand}
   */
  createLensShare(
    args: CreateLensShareCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLensShareCommandOutput>;
  createLensShare(
    args: CreateLensShareCommandInput,
    cb: (err: any, data?: CreateLensShareCommandOutput) => void
  ): void;
  createLensShare(
    args: CreateLensShareCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLensShareCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateLensVersionCommand}
   */
  createLensVersion(
    args: CreateLensVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLensVersionCommandOutput>;
  createLensVersion(
    args: CreateLensVersionCommandInput,
    cb: (err: any, data?: CreateLensVersionCommandOutput) => void
  ): void;
  createLensVersion(
    args: CreateLensVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLensVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateMilestoneCommand}
   */
  createMilestone(
    args: CreateMilestoneCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateMilestoneCommandOutput>;
  createMilestone(
    args: CreateMilestoneCommandInput,
    cb: (err: any, data?: CreateMilestoneCommandOutput) => void
  ): void;
  createMilestone(
    args: CreateMilestoneCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMilestoneCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateProfileCommand}
   */
  createProfile(
    args: CreateProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateProfileCommandOutput>;
  createProfile(
    args: CreateProfileCommandInput,
    cb: (err: any, data?: CreateProfileCommandOutput) => void
  ): void;
  createProfile(
    args: CreateProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateProfileShareCommand}
   */
  createProfileShare(
    args: CreateProfileShareCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateProfileShareCommandOutput>;
  createProfileShare(
    args: CreateProfileShareCommandInput,
    cb: (err: any, data?: CreateProfileShareCommandOutput) => void
  ): void;
  createProfileShare(
    args: CreateProfileShareCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateProfileShareCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateReviewTemplateCommand}
   */
  createReviewTemplate(
    args: CreateReviewTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateReviewTemplateCommandOutput>;
  createReviewTemplate(
    args: CreateReviewTemplateCommandInput,
    cb: (err: any, data?: CreateReviewTemplateCommandOutput) => void
  ): void;
  createReviewTemplate(
    args: CreateReviewTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateReviewTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTemplateShareCommand}
   */
  createTemplateShare(
    args: CreateTemplateShareCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTemplateShareCommandOutput>;
  createTemplateShare(
    args: CreateTemplateShareCommandInput,
    cb: (err: any, data?: CreateTemplateShareCommandOutput) => void
  ): void;
  createTemplateShare(
    args: CreateTemplateShareCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTemplateShareCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateWorkloadCommand}
   */
  createWorkload(
    args: CreateWorkloadCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateWorkloadCommandOutput>;
  createWorkload(
    args: CreateWorkloadCommandInput,
    cb: (err: any, data?: CreateWorkloadCommandOutput) => void
  ): void;
  createWorkload(
    args: CreateWorkloadCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateWorkloadCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateWorkloadShareCommand}
   */
  createWorkloadShare(
    args: CreateWorkloadShareCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateWorkloadShareCommandOutput>;
  createWorkloadShare(
    args: CreateWorkloadShareCommandInput,
    cb: (err: any, data?: CreateWorkloadShareCommandOutput) => void
  ): void;
  createWorkloadShare(
    args: CreateWorkloadShareCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateWorkloadShareCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteLensCommand}
   */
  deleteLens(
    args: DeleteLensCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteLensCommandOutput>;
  deleteLens(
    args: DeleteLensCommandInput,
    cb: (err: any, data?: DeleteLensCommandOutput) => void
  ): void;
  deleteLens(
    args: DeleteLensCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLensCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteLensShareCommand}
   */
  deleteLensShare(
    args: DeleteLensShareCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteLensShareCommandOutput>;
  deleteLensShare(
    args: DeleteLensShareCommandInput,
    cb: (err: any, data?: DeleteLensShareCommandOutput) => void
  ): void;
  deleteLensShare(
    args: DeleteLensShareCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLensShareCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteProfileCommand}
   */
  deleteProfile(
    args: DeleteProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteProfileCommandOutput>;
  deleteProfile(
    args: DeleteProfileCommandInput,
    cb: (err: any, data?: DeleteProfileCommandOutput) => void
  ): void;
  deleteProfile(
    args: DeleteProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteProfileShareCommand}
   */
  deleteProfileShare(
    args: DeleteProfileShareCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteProfileShareCommandOutput>;
  deleteProfileShare(
    args: DeleteProfileShareCommandInput,
    cb: (err: any, data?: DeleteProfileShareCommandOutput) => void
  ): void;
  deleteProfileShare(
    args: DeleteProfileShareCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteProfileShareCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteReviewTemplateCommand}
   */
  deleteReviewTemplate(
    args: DeleteReviewTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteReviewTemplateCommandOutput>;
  deleteReviewTemplate(
    args: DeleteReviewTemplateCommandInput,
    cb: (err: any, data?: DeleteReviewTemplateCommandOutput) => void
  ): void;
  deleteReviewTemplate(
    args: DeleteReviewTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteReviewTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTemplateShareCommand}
   */
  deleteTemplateShare(
    args: DeleteTemplateShareCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTemplateShareCommandOutput>;
  deleteTemplateShare(
    args: DeleteTemplateShareCommandInput,
    cb: (err: any, data?: DeleteTemplateShareCommandOutput) => void
  ): void;
  deleteTemplateShare(
    args: DeleteTemplateShareCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTemplateShareCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteWorkloadCommand}
   */
  deleteWorkload(
    args: DeleteWorkloadCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteWorkloadCommandOutput>;
  deleteWorkload(
    args: DeleteWorkloadCommandInput,
    cb: (err: any, data?: DeleteWorkloadCommandOutput) => void
  ): void;
  deleteWorkload(
    args: DeleteWorkloadCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteWorkloadCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteWorkloadShareCommand}
   */
  deleteWorkloadShare(
    args: DeleteWorkloadShareCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteWorkloadShareCommandOutput>;
  deleteWorkloadShare(
    args: DeleteWorkloadShareCommandInput,
    cb: (err: any, data?: DeleteWorkloadShareCommandOutput) => void
  ): void;
  deleteWorkloadShare(
    args: DeleteWorkloadShareCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteWorkloadShareCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateLensesCommand}
   */
  disassociateLenses(
    args: DisassociateLensesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateLensesCommandOutput>;
  disassociateLenses(
    args: DisassociateLensesCommandInput,
    cb: (err: any, data?: DisassociateLensesCommandOutput) => void
  ): void;
  disassociateLenses(
    args: DisassociateLensesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateLensesCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateProfilesCommand}
   */
  disassociateProfiles(
    args: DisassociateProfilesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateProfilesCommandOutput>;
  disassociateProfiles(
    args: DisassociateProfilesCommandInput,
    cb: (err: any, data?: DisassociateProfilesCommandOutput) => void
  ): void;
  disassociateProfiles(
    args: DisassociateProfilesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateProfilesCommandOutput) => void
  ): void;

  /**
   * @see {@link ExportLensCommand}
   */
  exportLens(
    args: ExportLensCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ExportLensCommandOutput>;
  exportLens(
    args: ExportLensCommandInput,
    cb: (err: any, data?: ExportLensCommandOutput) => void
  ): void;
  exportLens(
    args: ExportLensCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ExportLensCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAnswerCommand}
   */
  getAnswer(
    args: GetAnswerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAnswerCommandOutput>;
  getAnswer(
    args: GetAnswerCommandInput,
    cb: (err: any, data?: GetAnswerCommandOutput) => void
  ): void;
  getAnswer(
    args: GetAnswerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAnswerCommandOutput) => void
  ): void;

  /**
   * @see {@link GetConsolidatedReportCommand}
   */
  getConsolidatedReport(
    args: GetConsolidatedReportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetConsolidatedReportCommandOutput>;
  getConsolidatedReport(
    args: GetConsolidatedReportCommandInput,
    cb: (err: any, data?: GetConsolidatedReportCommandOutput) => void
  ): void;
  getConsolidatedReport(
    args: GetConsolidatedReportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetConsolidatedReportCommandOutput) => void
  ): void;

  /**
   * @see {@link GetGlobalSettingsCommand}
   */
  getGlobalSettings(): Promise<GetGlobalSettingsCommandOutput>;
  getGlobalSettings(
    args: GetGlobalSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetGlobalSettingsCommandOutput>;
  getGlobalSettings(
    args: GetGlobalSettingsCommandInput,
    cb: (err: any, data?: GetGlobalSettingsCommandOutput) => void
  ): void;
  getGlobalSettings(
    args: GetGlobalSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetGlobalSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLensCommand}
   */
  getLens(
    args: GetLensCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLensCommandOutput>;
  getLens(
    args: GetLensCommandInput,
    cb: (err: any, data?: GetLensCommandOutput) => void
  ): void;
  getLens(
    args: GetLensCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLensCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLensReviewCommand}
   */
  getLensReview(
    args: GetLensReviewCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLensReviewCommandOutput>;
  getLensReview(
    args: GetLensReviewCommandInput,
    cb: (err: any, data?: GetLensReviewCommandOutput) => void
  ): void;
  getLensReview(
    args: GetLensReviewCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLensReviewCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLensReviewReportCommand}
   */
  getLensReviewReport(
    args: GetLensReviewReportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLensReviewReportCommandOutput>;
  getLensReviewReport(
    args: GetLensReviewReportCommandInput,
    cb: (err: any, data?: GetLensReviewReportCommandOutput) => void
  ): void;
  getLensReviewReport(
    args: GetLensReviewReportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLensReviewReportCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLensVersionDifferenceCommand}
   */
  getLensVersionDifference(
    args: GetLensVersionDifferenceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLensVersionDifferenceCommandOutput>;
  getLensVersionDifference(
    args: GetLensVersionDifferenceCommandInput,
    cb: (err: any, data?: GetLensVersionDifferenceCommandOutput) => void
  ): void;
  getLensVersionDifference(
    args: GetLensVersionDifferenceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLensVersionDifferenceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMilestoneCommand}
   */
  getMilestone(
    args: GetMilestoneCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMilestoneCommandOutput>;
  getMilestone(
    args: GetMilestoneCommandInput,
    cb: (err: any, data?: GetMilestoneCommandOutput) => void
  ): void;
  getMilestone(
    args: GetMilestoneCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMilestoneCommandOutput) => void
  ): void;

  /**
   * @see {@link GetProfileCommand}
   */
  getProfile(
    args: GetProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetProfileCommandOutput>;
  getProfile(
    args: GetProfileCommandInput,
    cb: (err: any, data?: GetProfileCommandOutput) => void
  ): void;
  getProfile(
    args: GetProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link GetProfileTemplateCommand}
   */
  getProfileTemplate(): Promise<GetProfileTemplateCommandOutput>;
  getProfileTemplate(
    args: GetProfileTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetProfileTemplateCommandOutput>;
  getProfileTemplate(
    args: GetProfileTemplateCommandInput,
    cb: (err: any, data?: GetProfileTemplateCommandOutput) => void
  ): void;
  getProfileTemplate(
    args: GetProfileTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetProfileTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link GetReviewTemplateCommand}
   */
  getReviewTemplate(
    args: GetReviewTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetReviewTemplateCommandOutput>;
  getReviewTemplate(
    args: GetReviewTemplateCommandInput,
    cb: (err: any, data?: GetReviewTemplateCommandOutput) => void
  ): void;
  getReviewTemplate(
    args: GetReviewTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetReviewTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link GetReviewTemplateAnswerCommand}
   */
  getReviewTemplateAnswer(
    args: GetReviewTemplateAnswerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetReviewTemplateAnswerCommandOutput>;
  getReviewTemplateAnswer(
    args: GetReviewTemplateAnswerCommandInput,
    cb: (err: any, data?: GetReviewTemplateAnswerCommandOutput) => void
  ): void;
  getReviewTemplateAnswer(
    args: GetReviewTemplateAnswerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetReviewTemplateAnswerCommandOutput) => void
  ): void;

  /**
   * @see {@link GetReviewTemplateLensReviewCommand}
   */
  getReviewTemplateLensReview(
    args: GetReviewTemplateLensReviewCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetReviewTemplateLensReviewCommandOutput>;
  getReviewTemplateLensReview(
    args: GetReviewTemplateLensReviewCommandInput,
    cb: (err: any, data?: GetReviewTemplateLensReviewCommandOutput) => void
  ): void;
  getReviewTemplateLensReview(
    args: GetReviewTemplateLensReviewCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetReviewTemplateLensReviewCommandOutput) => void
  ): void;

  /**
   * @see {@link GetWorkloadCommand}
   */
  getWorkload(
    args: GetWorkloadCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetWorkloadCommandOutput>;
  getWorkload(
    args: GetWorkloadCommandInput,
    cb: (err: any, data?: GetWorkloadCommandOutput) => void
  ): void;
  getWorkload(
    args: GetWorkloadCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetWorkloadCommandOutput) => void
  ): void;

  /**
   * @see {@link ImportLensCommand}
   */
  importLens(
    args: ImportLensCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ImportLensCommandOutput>;
  importLens(
    args: ImportLensCommandInput,
    cb: (err: any, data?: ImportLensCommandOutput) => void
  ): void;
  importLens(
    args: ImportLensCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportLensCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAnswersCommand}
   */
  listAnswers(
    args: ListAnswersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAnswersCommandOutput>;
  listAnswers(
    args: ListAnswersCommandInput,
    cb: (err: any, data?: ListAnswersCommandOutput) => void
  ): void;
  listAnswers(
    args: ListAnswersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAnswersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCheckDetailsCommand}
   */
  listCheckDetails(
    args: ListCheckDetailsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCheckDetailsCommandOutput>;
  listCheckDetails(
    args: ListCheckDetailsCommandInput,
    cb: (err: any, data?: ListCheckDetailsCommandOutput) => void
  ): void;
  listCheckDetails(
    args: ListCheckDetailsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCheckDetailsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCheckSummariesCommand}
   */
  listCheckSummaries(
    args: ListCheckSummariesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCheckSummariesCommandOutput>;
  listCheckSummaries(
    args: ListCheckSummariesCommandInput,
    cb: (err: any, data?: ListCheckSummariesCommandOutput) => void
  ): void;
  listCheckSummaries(
    args: ListCheckSummariesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCheckSummariesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListLensesCommand}
   */
  listLenses(): Promise<ListLensesCommandOutput>;
  listLenses(
    args: ListLensesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListLensesCommandOutput>;
  listLenses(
    args: ListLensesCommandInput,
    cb: (err: any, data?: ListLensesCommandOutput) => void
  ): void;
  listLenses(
    args: ListLensesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLensesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListLensReviewImprovementsCommand}
   */
  listLensReviewImprovements(
    args: ListLensReviewImprovementsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListLensReviewImprovementsCommandOutput>;
  listLensReviewImprovements(
    args: ListLensReviewImprovementsCommandInput,
    cb: (err: any, data?: ListLensReviewImprovementsCommandOutput) => void
  ): void;
  listLensReviewImprovements(
    args: ListLensReviewImprovementsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLensReviewImprovementsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListLensReviewsCommand}
   */
  listLensReviews(
    args: ListLensReviewsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListLensReviewsCommandOutput>;
  listLensReviews(
    args: ListLensReviewsCommandInput,
    cb: (err: any, data?: ListLensReviewsCommandOutput) => void
  ): void;
  listLensReviews(
    args: ListLensReviewsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLensReviewsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListLensSharesCommand}
   */
  listLensShares(
    args: ListLensSharesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListLensSharesCommandOutput>;
  listLensShares(
    args: ListLensSharesCommandInput,
    cb: (err: any, data?: ListLensSharesCommandOutput) => void
  ): void;
  listLensShares(
    args: ListLensSharesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLensSharesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMilestonesCommand}
   */
  listMilestones(
    args: ListMilestonesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMilestonesCommandOutput>;
  listMilestones(
    args: ListMilestonesCommandInput,
    cb: (err: any, data?: ListMilestonesCommandOutput) => void
  ): void;
  listMilestones(
    args: ListMilestonesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMilestonesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListNotificationsCommand}
   */
  listNotifications(): Promise<ListNotificationsCommandOutput>;
  listNotifications(
    args: ListNotificationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListNotificationsCommandOutput>;
  listNotifications(
    args: ListNotificationsCommandInput,
    cb: (err: any, data?: ListNotificationsCommandOutput) => void
  ): void;
  listNotifications(
    args: ListNotificationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListNotificationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListProfileNotificationsCommand}
   */
  listProfileNotifications(): Promise<ListProfileNotificationsCommandOutput>;
  listProfileNotifications(
    args: ListProfileNotificationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListProfileNotificationsCommandOutput>;
  listProfileNotifications(
    args: ListProfileNotificationsCommandInput,
    cb: (err: any, data?: ListProfileNotificationsCommandOutput) => void
  ): void;
  listProfileNotifications(
    args: ListProfileNotificationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProfileNotificationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListProfilesCommand}
   */
  listProfiles(): Promise<ListProfilesCommandOutput>;
  listProfiles(
    args: ListProfilesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListProfilesCommandOutput>;
  listProfiles(
    args: ListProfilesCommandInput,
    cb: (err: any, data?: ListProfilesCommandOutput) => void
  ): void;
  listProfiles(
    args: ListProfilesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProfilesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListProfileSharesCommand}
   */
  listProfileShares(
    args: ListProfileSharesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListProfileSharesCommandOutput>;
  listProfileShares(
    args: ListProfileSharesCommandInput,
    cb: (err: any, data?: ListProfileSharesCommandOutput) => void
  ): void;
  listProfileShares(
    args: ListProfileSharesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProfileSharesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListReviewTemplateAnswersCommand}
   */
  listReviewTemplateAnswers(
    args: ListReviewTemplateAnswersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListReviewTemplateAnswersCommandOutput>;
  listReviewTemplateAnswers(
    args: ListReviewTemplateAnswersCommandInput,
    cb: (err: any, data?: ListReviewTemplateAnswersCommandOutput) => void
  ): void;
  listReviewTemplateAnswers(
    args: ListReviewTemplateAnswersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListReviewTemplateAnswersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListReviewTemplatesCommand}
   */
  listReviewTemplates(): Promise<ListReviewTemplatesCommandOutput>;
  listReviewTemplates(
    args: ListReviewTemplatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListReviewTemplatesCommandOutput>;
  listReviewTemplates(
    args: ListReviewTemplatesCommandInput,
    cb: (err: any, data?: ListReviewTemplatesCommandOutput) => void
  ): void;
  listReviewTemplates(
    args: ListReviewTemplatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListReviewTemplatesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListShareInvitationsCommand}
   */
  listShareInvitations(): Promise<ListShareInvitationsCommandOutput>;
  listShareInvitations(
    args: ListShareInvitationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListShareInvitationsCommandOutput>;
  listShareInvitations(
    args: ListShareInvitationsCommandInput,
    cb: (err: any, data?: ListShareInvitationsCommandOutput) => void
  ): void;
  listShareInvitations(
    args: ListShareInvitationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListShareInvitationsCommandOutput) => void
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
   * @see {@link ListTemplateSharesCommand}
   */
  listTemplateShares(
    args: ListTemplateSharesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTemplateSharesCommandOutput>;
  listTemplateShares(
    args: ListTemplateSharesCommandInput,
    cb: (err: any, data?: ListTemplateSharesCommandOutput) => void
  ): void;
  listTemplateShares(
    args: ListTemplateSharesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTemplateSharesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListWorkloadsCommand}
   */
  listWorkloads(): Promise<ListWorkloadsCommandOutput>;
  listWorkloads(
    args: ListWorkloadsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListWorkloadsCommandOutput>;
  listWorkloads(
    args: ListWorkloadsCommandInput,
    cb: (err: any, data?: ListWorkloadsCommandOutput) => void
  ): void;
  listWorkloads(
    args: ListWorkloadsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWorkloadsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListWorkloadSharesCommand}
   */
  listWorkloadShares(
    args: ListWorkloadSharesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListWorkloadSharesCommandOutput>;
  listWorkloadShares(
    args: ListWorkloadSharesCommandInput,
    cb: (err: any, data?: ListWorkloadSharesCommandOutput) => void
  ): void;
  listWorkloadShares(
    args: ListWorkloadSharesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWorkloadSharesCommandOutput) => void
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
   * @see {@link UpdateAnswerCommand}
   */
  updateAnswer(
    args: UpdateAnswerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAnswerCommandOutput>;
  updateAnswer(
    args: UpdateAnswerCommandInput,
    cb: (err: any, data?: UpdateAnswerCommandOutput) => void
  ): void;
  updateAnswer(
    args: UpdateAnswerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAnswerCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateGlobalSettingsCommand}
   */
  updateGlobalSettings(): Promise<UpdateGlobalSettingsCommandOutput>;
  updateGlobalSettings(
    args: UpdateGlobalSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateGlobalSettingsCommandOutput>;
  updateGlobalSettings(
    args: UpdateGlobalSettingsCommandInput,
    cb: (err: any, data?: UpdateGlobalSettingsCommandOutput) => void
  ): void;
  updateGlobalSettings(
    args: UpdateGlobalSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateGlobalSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateIntegrationCommand}
   */
  updateIntegration(
    args: UpdateIntegrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateIntegrationCommandOutput>;
  updateIntegration(
    args: UpdateIntegrationCommandInput,
    cb: (err: any, data?: UpdateIntegrationCommandOutput) => void
  ): void;
  updateIntegration(
    args: UpdateIntegrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateIntegrationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateLensReviewCommand}
   */
  updateLensReview(
    args: UpdateLensReviewCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateLensReviewCommandOutput>;
  updateLensReview(
    args: UpdateLensReviewCommandInput,
    cb: (err: any, data?: UpdateLensReviewCommandOutput) => void
  ): void;
  updateLensReview(
    args: UpdateLensReviewCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateLensReviewCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateProfileCommand}
   */
  updateProfile(
    args: UpdateProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateProfileCommandOutput>;
  updateProfile(
    args: UpdateProfileCommandInput,
    cb: (err: any, data?: UpdateProfileCommandOutput) => void
  ): void;
  updateProfile(
    args: UpdateProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateReviewTemplateCommand}
   */
  updateReviewTemplate(
    args: UpdateReviewTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateReviewTemplateCommandOutput>;
  updateReviewTemplate(
    args: UpdateReviewTemplateCommandInput,
    cb: (err: any, data?: UpdateReviewTemplateCommandOutput) => void
  ): void;
  updateReviewTemplate(
    args: UpdateReviewTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateReviewTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateReviewTemplateAnswerCommand}
   */
  updateReviewTemplateAnswer(
    args: UpdateReviewTemplateAnswerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateReviewTemplateAnswerCommandOutput>;
  updateReviewTemplateAnswer(
    args: UpdateReviewTemplateAnswerCommandInput,
    cb: (err: any, data?: UpdateReviewTemplateAnswerCommandOutput) => void
  ): void;
  updateReviewTemplateAnswer(
    args: UpdateReviewTemplateAnswerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateReviewTemplateAnswerCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateReviewTemplateLensReviewCommand}
   */
  updateReviewTemplateLensReview(
    args: UpdateReviewTemplateLensReviewCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateReviewTemplateLensReviewCommandOutput>;
  updateReviewTemplateLensReview(
    args: UpdateReviewTemplateLensReviewCommandInput,
    cb: (err: any, data?: UpdateReviewTemplateLensReviewCommandOutput) => void
  ): void;
  updateReviewTemplateLensReview(
    args: UpdateReviewTemplateLensReviewCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateReviewTemplateLensReviewCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateShareInvitationCommand}
   */
  updateShareInvitation(
    args: UpdateShareInvitationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateShareInvitationCommandOutput>;
  updateShareInvitation(
    args: UpdateShareInvitationCommandInput,
    cb: (err: any, data?: UpdateShareInvitationCommandOutput) => void
  ): void;
  updateShareInvitation(
    args: UpdateShareInvitationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateShareInvitationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateWorkloadCommand}
   */
  updateWorkload(
    args: UpdateWorkloadCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateWorkloadCommandOutput>;
  updateWorkload(
    args: UpdateWorkloadCommandInput,
    cb: (err: any, data?: UpdateWorkloadCommandOutput) => void
  ): void;
  updateWorkload(
    args: UpdateWorkloadCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateWorkloadCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateWorkloadShareCommand}
   */
  updateWorkloadShare(
    args: UpdateWorkloadShareCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateWorkloadShareCommandOutput>;
  updateWorkloadShare(
    args: UpdateWorkloadShareCommandInput,
    cb: (err: any, data?: UpdateWorkloadShareCommandOutput) => void
  ): void;
  updateWorkloadShare(
    args: UpdateWorkloadShareCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateWorkloadShareCommandOutput) => void
  ): void;

  /**
   * @see {@link UpgradeLensReviewCommand}
   */
  upgradeLensReview(
    args: UpgradeLensReviewCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpgradeLensReviewCommandOutput>;
  upgradeLensReview(
    args: UpgradeLensReviewCommandInput,
    cb: (err: any, data?: UpgradeLensReviewCommandOutput) => void
  ): void;
  upgradeLensReview(
    args: UpgradeLensReviewCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpgradeLensReviewCommandOutput) => void
  ): void;

  /**
   * @see {@link UpgradeProfileVersionCommand}
   */
  upgradeProfileVersion(
    args: UpgradeProfileVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpgradeProfileVersionCommandOutput>;
  upgradeProfileVersion(
    args: UpgradeProfileVersionCommandInput,
    cb: (err: any, data?: UpgradeProfileVersionCommandOutput) => void
  ): void;
  upgradeProfileVersion(
    args: UpgradeProfileVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpgradeProfileVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpgradeReviewTemplateLensReviewCommand}
   */
  upgradeReviewTemplateLensReview(
    args: UpgradeReviewTemplateLensReviewCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpgradeReviewTemplateLensReviewCommandOutput>;
  upgradeReviewTemplateLensReview(
    args: UpgradeReviewTemplateLensReviewCommandInput,
    cb: (err: any, data?: UpgradeReviewTemplateLensReviewCommandOutput) => void
  ): void;
  upgradeReviewTemplateLensReview(
    args: UpgradeReviewTemplateLensReviewCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpgradeReviewTemplateLensReviewCommandOutput) => void
  ): void;

  /**
   * @see {@link GetConsolidatedReportCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetConsolidatedReportCommandOutput}.
   */
  paginateGetConsolidatedReport(
    args: GetConsolidatedReportCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetConsolidatedReportCommandOutput>;

  /**
   * @see {@link ListAnswersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAnswersCommandOutput}.
   */
  paginateListAnswers(
    args: ListAnswersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAnswersCommandOutput>;

  /**
   * @see {@link ListCheckDetailsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListCheckDetailsCommandOutput}.
   */
  paginateListCheckDetails(
    args: ListCheckDetailsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListCheckDetailsCommandOutput>;

  /**
   * @see {@link ListCheckSummariesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListCheckSummariesCommandOutput}.
   */
  paginateListCheckSummaries(
    args: ListCheckSummariesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListCheckSummariesCommandOutput>;

  /**
   * @see {@link ListLensesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListLensesCommandOutput}.
   */
  paginateListLenses(
    args?: ListLensesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListLensesCommandOutput>;

  /**
   * @see {@link ListLensReviewImprovementsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListLensReviewImprovementsCommandOutput}.
   */
  paginateListLensReviewImprovements(
    args: ListLensReviewImprovementsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListLensReviewImprovementsCommandOutput>;

  /**
   * @see {@link ListLensReviewsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListLensReviewsCommandOutput}.
   */
  paginateListLensReviews(
    args: ListLensReviewsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListLensReviewsCommandOutput>;

  /**
   * @see {@link ListLensSharesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListLensSharesCommandOutput}.
   */
  paginateListLensShares(
    args: ListLensSharesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListLensSharesCommandOutput>;

  /**
   * @see {@link ListMilestonesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListMilestonesCommandOutput}.
   */
  paginateListMilestones(
    args: ListMilestonesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListMilestonesCommandOutput>;

  /**
   * @see {@link ListNotificationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListNotificationsCommandOutput}.
   */
  paginateListNotifications(
    args?: ListNotificationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListNotificationsCommandOutput>;

  /**
   * @see {@link ListProfileNotificationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListProfileNotificationsCommandOutput}.
   */
  paginateListProfileNotifications(
    args?: ListProfileNotificationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListProfileNotificationsCommandOutput>;

  /**
   * @see {@link ListProfilesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListProfilesCommandOutput}.
   */
  paginateListProfiles(
    args?: ListProfilesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListProfilesCommandOutput>;

  /**
   * @see {@link ListProfileSharesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListProfileSharesCommandOutput}.
   */
  paginateListProfileShares(
    args: ListProfileSharesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListProfileSharesCommandOutput>;

  /**
   * @see {@link ListReviewTemplateAnswersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListReviewTemplateAnswersCommandOutput}.
   */
  paginateListReviewTemplateAnswers(
    args: ListReviewTemplateAnswersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListReviewTemplateAnswersCommandOutput>;

  /**
   * @see {@link ListReviewTemplatesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListReviewTemplatesCommandOutput}.
   */
  paginateListReviewTemplates(
    args?: ListReviewTemplatesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListReviewTemplatesCommandOutput>;

  /**
   * @see {@link ListShareInvitationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListShareInvitationsCommandOutput}.
   */
  paginateListShareInvitations(
    args?: ListShareInvitationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListShareInvitationsCommandOutput>;

  /**
   * @see {@link ListTemplateSharesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListTemplateSharesCommandOutput}.
   */
  paginateListTemplateShares(
    args: ListTemplateSharesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListTemplateSharesCommandOutput>;

  /**
   * @see {@link ListWorkloadsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListWorkloadsCommandOutput}.
   */
  paginateListWorkloads(
    args?: ListWorkloadsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListWorkloadsCommandOutput>;

  /**
   * @see {@link ListWorkloadSharesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListWorkloadSharesCommandOutput}.
   */
  paginateListWorkloadShares(
    args: ListWorkloadSharesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListWorkloadSharesCommandOutput>;
}

/**
 * <fullname>Well-Architected Tool</fullname>
 *          <p>This is the <i>Well-Architected Tool API Reference</i>. The WA Tool API provides programmatic access to the
 *             <a href="http://aws.amazon.com/well-architected-tool">Well-Architected Tool</a> in the
 *            <a href="https://console.aws.amazon.com/wellarchitected">Amazon Web Services Management Console</a>. For information
 *             about the Well-Architected Tool, see the
 *            <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/intro.html">Well-Architected Tool User Guide</a>.</p>
 * @public
 */
export class WellArchitected extends WellArchitectedClient implements WellArchitected {}
createAggregatedClient(commands, WellArchitected, { paginators });
