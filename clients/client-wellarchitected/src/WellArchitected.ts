// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
} from "@smithy/types";

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
  type CreateAgentContextCommandInput,
  type CreateAgentContextCommandOutput,
  CreateAgentContextCommand,
} from "./commands/CreateAgentContextCommand";
import {
  type CreateAgentGoalCommandInput,
  type CreateAgentGoalCommandOutput,
  CreateAgentGoalCommand,
} from "./commands/CreateAgentGoalCommand";
import {
  type CreateAgentProfileCommandInput,
  type CreateAgentProfileCommandOutput,
  CreateAgentProfileCommand,
} from "./commands/CreateAgentProfileCommand";
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
  type DeleteAgentContextCommandInput,
  type DeleteAgentContextCommandOutput,
  DeleteAgentContextCommand,
} from "./commands/DeleteAgentContextCommand";
import {
  type DeleteAgentGoalCommandInput,
  type DeleteAgentGoalCommandOutput,
  DeleteAgentGoalCommand,
} from "./commands/DeleteAgentGoalCommand";
import {
  type DeleteAgentProfileCommandInput,
  type DeleteAgentProfileCommandOutput,
  DeleteAgentProfileCommand,
} from "./commands/DeleteAgentProfileCommand";
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
import {
  type GetAgentContextCommandInput,
  type GetAgentContextCommandOutput,
  GetAgentContextCommand,
} from "./commands/GetAgentContextCommand";
import {
  type GetAgentGoalCommandInput,
  type GetAgentGoalCommandOutput,
  GetAgentGoalCommand,
} from "./commands/GetAgentGoalCommand";
import {
  type GetAgentProfileCommandInput,
  type GetAgentProfileCommandOutput,
  GetAgentProfileCommand,
} from "./commands/GetAgentProfileCommand";
import {
  type GetAgentRecommendationCommandInput,
  type GetAgentRecommendationCommandOutput,
  GetAgentRecommendationCommand,
} from "./commands/GetAgentRecommendationCommand";
import {
  type GetAgentRecommendationGenerationCommandInput,
  type GetAgentRecommendationGenerationCommandOutput,
  GetAgentRecommendationGenerationCommand,
} from "./commands/GetAgentRecommendationGenerationCommand";
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
  type ListAgentContextsCommandInput,
  type ListAgentContextsCommandOutput,
  ListAgentContextsCommand,
} from "./commands/ListAgentContextsCommand";
import {
  type ListAgentGoalsCommandInput,
  type ListAgentGoalsCommandOutput,
  ListAgentGoalsCommand,
} from "./commands/ListAgentGoalsCommand";
import {
  type ListAgentProfilesCommandInput,
  type ListAgentProfilesCommandOutput,
  ListAgentProfilesCommand,
} from "./commands/ListAgentProfilesCommand";
import {
  type ListAgentRecommendationGenerationsCommandInput,
  type ListAgentRecommendationGenerationsCommandOutput,
  ListAgentRecommendationGenerationsCommand,
} from "./commands/ListAgentRecommendationGenerationsCommand";
import {
  type ListAgentRecommendationItemsCommandInput,
  type ListAgentRecommendationItemsCommandOutput,
  ListAgentRecommendationItemsCommand,
} from "./commands/ListAgentRecommendationItemsCommand";
import {
  type ListAgentRecommendationsCommandInput,
  type ListAgentRecommendationsCommandOutput,
  ListAgentRecommendationsCommand,
} from "./commands/ListAgentRecommendationsCommand";
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
  type PutAgentRecommendationFeedbackCommandInput,
  type PutAgentRecommendationFeedbackCommandOutput,
  PutAgentRecommendationFeedbackCommand,
} from "./commands/PutAgentRecommendationFeedbackCommand";
import {
  type StartAgentRecommendationGenerationCommandInput,
  type StartAgentRecommendationGenerationCommandOutput,
  StartAgentRecommendationGenerationCommand,
} from "./commands/StartAgentRecommendationGenerationCommand";
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
  type UpdateAgentContextCommandInput,
  type UpdateAgentContextCommandOutput,
  UpdateAgentContextCommand,
} from "./commands/UpdateAgentContextCommand";
import {
  type UpdateAgentGoalCommandInput,
  type UpdateAgentGoalCommandOutput,
  UpdateAgentGoalCommand,
} from "./commands/UpdateAgentGoalCommand";
import {
  type UpdateAgentProfileCommandInput,
  type UpdateAgentProfileCommandOutput,
  UpdateAgentProfileCommand,
} from "./commands/UpdateAgentProfileCommand";
import {
  type UpdateAgentRecommendationStatusCommandInput,
  type UpdateAgentRecommendationStatusCommandOutput,
  UpdateAgentRecommendationStatusCommand,
} from "./commands/UpdateAgentRecommendationStatusCommand";
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
import { paginateListAgentContexts } from "./pagination/ListAgentContextsPaginator";
import { paginateListAgentGoals } from "./pagination/ListAgentGoalsPaginator";
import { paginateListAgentProfiles } from "./pagination/ListAgentProfilesPaginator";
import { paginateListAgentRecommendationGenerations } from "./pagination/ListAgentRecommendationGenerationsPaginator";
import { paginateListAgentRecommendationItems } from "./pagination/ListAgentRecommendationItemsPaginator";
import { paginateListAgentRecommendations } from "./pagination/ListAgentRecommendationsPaginator";
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
  CreateAgentContextCommand,
  CreateAgentGoalCommand,
  CreateAgentProfileCommand,
  CreateLensShareCommand,
  CreateLensVersionCommand,
  CreateMilestoneCommand,
  CreateProfileCommand,
  CreateProfileShareCommand,
  CreateReviewTemplateCommand,
  CreateTemplateShareCommand,
  CreateWorkloadCommand,
  CreateWorkloadShareCommand,
  DeleteAgentContextCommand,
  DeleteAgentGoalCommand,
  DeleteAgentProfileCommand,
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
  GetAgentContextCommand,
  GetAgentGoalCommand,
  GetAgentProfileCommand,
  GetAgentRecommendationCommand,
  GetAgentRecommendationGenerationCommand,
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
  ListAgentContextsCommand,
  ListAgentGoalsCommand,
  ListAgentProfilesCommand,
  ListAgentRecommendationGenerationsCommand,
  ListAgentRecommendationItemsCommand,
  ListAgentRecommendationsCommand,
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
  PutAgentRecommendationFeedbackCommand,
  StartAgentRecommendationGenerationCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateAgentContextCommand,
  UpdateAgentGoalCommand,
  UpdateAgentProfileCommand,
  UpdateAgentRecommendationStatusCommand,
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
  paginateListAgentContexts,
  paginateListAgentGoals,
  paginateListAgentProfiles,
  paginateListAgentRecommendationGenerations,
  paginateListAgentRecommendationItems,
  paginateListAgentRecommendations,
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

/**
 * @public
 */
export interface WellArchitectedRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface WellArchitected {
  /**
   * @see {@link AssociateLensesCommand}
   */
  associateLenses(
    args: AssociateLensesCommandInput,
    options?: WellArchitectedRequestOptions
  ): Promise<AssociateLensesCommandOutput>;
  associateLenses(
    args: AssociateLensesCommandInput,
    cb: (err: any, data?: AssociateLensesCommandOutput) => void
  ): void;
  associateLenses(
    args: AssociateLensesCommandInput,
    options: WellArchitectedRequestOptions,
    cb: (err: any, data?: AssociateLensesCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateProfilesCommand}
   */
  associateProfiles(
    args: AssociateProfilesCommandInput,
    options?: WellArchitectedRequestOptions
  ): Promise<AssociateProfilesCommandOutput>;
  associateProfiles(
    args: AssociateProfilesCommandInput,
    cb: (err: any, data?: AssociateProfilesCommandOutput) => void
  ): void;
  associateProfiles(
    args: AssociateProfilesCommandInput,
    options: WellArchitectedRequestOptions,
    cb: (err: any, data?: AssociateProfilesCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAgentContextCommand}
   */
  createAgentContext(
    args: CreateAgentContextCommandInput,
    options?: WellArchitectedRequestOptions
  ): Promise<CreateAgentContextCommandOutput>;
  createAgentContext(
    args: CreateAgentContextCommandInput,
    cb: (err: any, data?: CreateAgentContextCommandOutput) => void
  ): void;
  createAgentContext(
    args: CreateAgentContextCommandInput,
    options: WellArchitectedRequestOptions,
    cb: (err: any, data?: CreateAgentContextCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAgentGoalCommand}
   */
  createAgentGoal(
    args: CreateAgentGoalCommandInput,
    options?: WellArchitectedRequestOptions
  ): Promise<CreateAgentGoalCommandOutput>;
  createAgentGoal(
    args: CreateAgentGoalCommandInput,
    cb: (err: any, data?: CreateAgentGoalCommandOutput) => void
  ): void;
  createAgentGoal(
    args: CreateAgentGoalCommandInput,
    options: WellArchitectedRequestOptions,
    cb: (err: any, data?: CreateAgentGoalCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAgentProfileCommand}
   */
  createAgentProfile(
    args: CreateAgentProfileCommandInput,
    options?: WellArchitectedRequestOptions
  ): Promise<CreateAgentProfileCommandOutput>;
  createAgentProfile(
    args: CreateAgentProfileCommandInput,
    cb: (err: any, data?: CreateAgentProfileCommandOutput) => void
  ): void;
  createAgentProfile(
    args: CreateAgentProfileCommandInput,
    options: WellArchitectedRequestOptions,
    cb: (err: any, data?: CreateAgentProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateLensShareCommand}
   */
  createLensShare(
    args: CreateLensShareCommandInput,
    options?: WellArchitectedRequestOptions
  ): Promise<CreateLensShareCommandOutput>;
  createLensShare(
    args: CreateLensShareCommandInput,
    cb: (err: any, data?: CreateLensShareCommandOutput) => void
  ): void;
  createLensShare(
    args: CreateLensShareCommandInput,
    options: WellArchitectedRequestOptions,
    cb: (err: any, data?: CreateLensShareCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateLensVersionCommand}
   */
  createLensVersion(
    args: CreateLensVersionCommandInput,
    options?: WellArchitectedRequestOptions
  ): Promise<CreateLensVersionCommandOutput>;
  createLensVersion(
    args: CreateLensVersionCommandInput,
    cb: (err: any, data?: CreateLensVersionCommandOutput) => void
  ): void;
  createLensVersion(
    args: CreateLensVersionCommandInput,
    options: WellArchitectedRequestOptions,
    cb: (err: any, data?: CreateLensVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateMilestoneCommand}
   */
  createMilestone(
    args: CreateMilestoneCommandInput,
    options?: WellArchitectedRequestOptions
  ): Promise<CreateMilestoneCommandOutput>;
  createMilestone(
    args: CreateMilestoneCommandInput,
    cb: (err: any, data?: CreateMilestoneCommandOutput) => void
  ): void;
  createMilestone(
    args: CreateMilestoneCommandInput,
    options: WellArchitectedRequestOptions,
    cb: (err: any, data?: CreateMilestoneCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateProfileCommand}
   */
  createProfile(
    args: CreateProfileCommandInput,
    options?: WellArchitectedRequestOptions
  ): Promise<CreateProfileCommandOutput>;
  createProfile(
    args: CreateProfileCommandInput,
    cb: (err: any, data?: CreateProfileCommandOutput) => void
  ): void;
  createProfile(
    args: CreateProfileCommandInput,
    options: WellArchitectedRequestOptions,
    cb: (err: any, data?: CreateProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateProfileShareCommand}
   */
  createProfileShare(
    args: CreateProfileShareCommandInput,
    options?: WellArchitectedRequestOptions
  ): Promise<CreateProfileShareCommandOutput>;
  createProfileShare(
    args: CreateProfileShareCommandInput,
    cb: (err: any, data?: CreateProfileShareCommandOutput) => void
  ): void;
  createProfileShare(
    args: CreateProfileShareCommandInput,
    options: WellArchitectedRequestOptions,
    cb: (err: any, data?: CreateProfileShareCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateReviewTemplateCommand}
   */
  createReviewTemplate(
    args: CreateReviewTemplateCommandInput,
    options?: WellArchitectedRequestOptions
  ): Promise<CreateReviewTemplateCommandOutput>;
  createReviewTemplate(
    args: CreateReviewTemplateCommandInput,
    cb: (err: any, data?: CreateReviewTemplateCommandOutput) => void
  ): void;
  createReviewTemplate(
    args: CreateReviewTemplateCommandInput,
    options: WellArchitectedRequestOptions,
    cb: (err: any, data?: CreateReviewTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTemplateShareCommand}
   */
  createTemplateShare(
    args: CreateTemplateShareCommandInput,
    options?: WellArchitectedRequestOptions
  ): Promise<CreateTemplateShareCommandOutput>;
  createTemplateShare(
    args: CreateTemplateShareCommandInput,
    cb: (err: any, data?: CreateTemplateShareCommandOutput) => void
  ): void;
  createTemplateShare(
    args: CreateTemplateShareCommandInput,
    options: WellArchitectedRequestOptions,
    cb: (err: any, data?: CreateTemplateShareCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateWorkloadCommand}
   */
  createWorkload(
    args: CreateWorkloadCommandInput,
    options?: WellArchitectedRequestOptions
  ): Promise<CreateWorkloadCommandOutput>;
  createWorkload(
    args: CreateWorkloadCommandInput,
    cb: (err: any, data?: CreateWorkloadCommandOutput) => void
  ): void;
  createWorkload(
    args: CreateWorkloadCommandInput,
    options: WellArchitectedRequestOptions,
    cb: (err: any, data?: CreateWorkloadCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateWorkloadShareCommand}
   */
  createWorkloadShare(
    args: CreateWorkloadShareCommandInput,
    options?: WellArchitectedRequestOptions
  ): Promise<CreateWorkloadShareCommandOutput>;
  createWorkloadShare(
    args: CreateWorkloadShareCommandInput,
    cb: (err: any, data?: CreateWorkloadShareCommandOutput) => void
  ): void;
  createWorkloadShare(
    args: CreateWorkloadShareCommandInput,
    options: WellArchitectedRequestOptions,
    cb: (err: any, data?: CreateWorkloadShareCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAgentContextCommand}
   */
  deleteAgentContext(
    args: DeleteAgentContextCommandInput,
    options?: WellArchitectedRequestOptions
  ): Promise<DeleteAgentContextCommandOutput>;
  deleteAgentContext(
    args: DeleteAgentContextCommandInput,
    cb: (err: any, data?: DeleteAgentContextCommandOutput) => void
  ): void;
  deleteAgentContext(
    args: DeleteAgentContextCommandInput,
    options: WellArchitectedRequestOptions,
    cb: (err: any, data?: DeleteAgentContextCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAgentGoalCommand}
   */
  deleteAgentGoal(
    args: DeleteAgentGoalCommandInput,
    options?: WellArchitectedRequestOptions
  ): Promise<DeleteAgentGoalCommandOutput>;
  deleteAgentGoal(
    args: DeleteAgentGoalCommandInput,
    cb: (err: any, data?: DeleteAgentGoalCommandOutput) => void
  ): void;
  deleteAgentGoal(
    args: DeleteAgentGoalCommandInput,
    options: WellArchitectedRequestOptions,
    cb: (err: any, data?: DeleteAgentGoalCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAgentProfileCommand}
   */
  deleteAgentProfile(
    args: DeleteAgentProfileCommandInput,
    options?: WellArchitectedRequestOptions
  ): Promise<DeleteAgentProfileCommandOutput>;
  deleteAgentProfile(
    args: DeleteAgentProfileCommandInput,
    cb: (err: any, data?: DeleteAgentProfileCommandOutput) => void
  ): void;
  deleteAgentProfile(
    args: DeleteAgentProfileCommandInput,
    options: WellArchitectedRequestOptions,
    cb: (err: any, data?: DeleteAgentProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteLensCommand}
   */
  deleteLens(
    args: DeleteLensCommandInput,
    options?: WellArchitectedRequestOptions
  ): Promise<DeleteLensCommandOutput>;
  deleteLens(
    args: DeleteLensCommandInput,
    cb: (err: any, data?: DeleteLensCommandOutput) => void
  ): void;
  deleteLens(
    args: DeleteLensCommandInput,
    options: WellArchitectedRequestOptions,
    cb: (err: any, data?: DeleteLensCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteLensShareCommand}
   */
  deleteLensShare(
    args: DeleteLensShareCommandInput,
    options?: WellArchitectedRequestOptions
  ): Promise<DeleteLensShareCommandOutput>;
  deleteLensShare(
    args: DeleteLensShareCommandInput,
    cb: (err: any, data?: DeleteLensShareCommandOutput) => void
  ): void;
  deleteLensShare(
    args: DeleteLensShareCommandInput,
    options: WellArchitectedRequestOptions,
    cb: (err: any, data?: DeleteLensShareCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteProfileCommand}
   */
  deleteProfile(
    args: DeleteProfileCommandInput,
    options?: WellArchitectedRequestOptions
  ): Promise<DeleteProfileCommandOutput>;
  deleteProfile(
    args: DeleteProfileCommandInput,
    cb: (err: any, data?: DeleteProfileCommandOutput) => void
  ): void;
  deleteProfile(
    args: DeleteProfileCommandInput,
    options: WellArchitectedRequestOptions,
    cb: (err: any, data?: DeleteProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteProfileShareCommand}
   */
  deleteProfileShare(
    args: DeleteProfileShareCommandInput,
    options?: WellArchitectedRequestOptions
  ): Promise<DeleteProfileShareCommandOutput>;
  deleteProfileShare(
    args: DeleteProfileShareCommandInput,
    cb: (err: any, data?: DeleteProfileShareCommandOutput) => void
  ): void;
  deleteProfileShare(
    args: DeleteProfileShareCommandInput,
    options: WellArchitectedRequestOptions,
    cb: (err: any, data?: DeleteProfileShareCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteReviewTemplateCommand}
   */
  deleteReviewTemplate(
    args: DeleteReviewTemplateCommandInput,
    options?: WellArchitectedRequestOptions
  ): Promise<DeleteReviewTemplateCommandOutput>;
  deleteReviewTemplate(
    args: DeleteReviewTemplateCommandInput,
    cb: (err: any, data?: DeleteReviewTemplateCommandOutput) => void
  ): void;
  deleteReviewTemplate(
    args: DeleteReviewTemplateCommandInput,
    options: WellArchitectedRequestOptions,
    cb: (err: any, data?: DeleteReviewTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTemplateShareCommand}
   */
  deleteTemplateShare(
    args: DeleteTemplateShareCommandInput,
    options?: WellArchitectedRequestOptions
  ): Promise<DeleteTemplateShareCommandOutput>;
  deleteTemplateShare(
    args: DeleteTemplateShareCommandInput,
    cb: (err: any, data?: DeleteTemplateShareCommandOutput) => void
  ): void;
  deleteTemplateShare(
    args: DeleteTemplateShareCommandInput,
    options: WellArchitectedRequestOptions,
    cb: (err: any, data?: DeleteTemplateShareCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteWorkloadCommand}
   */
  deleteWorkload(
    args: DeleteWorkloadCommandInput,
    options?: WellArchitectedRequestOptions
  ): Promise<DeleteWorkloadCommandOutput>;
  deleteWorkload(
    args: DeleteWorkloadCommandInput,
    cb: (err: any, data?: DeleteWorkloadCommandOutput) => void
  ): void;
  deleteWorkload(
    args: DeleteWorkloadCommandInput,
    options: WellArchitectedRequestOptions,
    cb: (err: any, data?: DeleteWorkloadCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteWorkloadShareCommand}
   */
  deleteWorkloadShare(
    args: DeleteWorkloadShareCommandInput,
    options?: WellArchitectedRequestOptions
  ): Promise<DeleteWorkloadShareCommandOutput>;
  deleteWorkloadShare(
    args: DeleteWorkloadShareCommandInput,
    cb: (err: any, data?: DeleteWorkloadShareCommandOutput) => void
  ): void;
  deleteWorkloadShare(
    args: DeleteWorkloadShareCommandInput,
    options: WellArchitectedRequestOptions,
    cb: (err: any, data?: DeleteWorkloadShareCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateLensesCommand}
   */
  disassociateLenses(
    args: DisassociateLensesCommandInput,
    options?: WellArchitectedRequestOptions
  ): Promise<DisassociateLensesCommandOutput>;
  disassociateLenses(
    args: DisassociateLensesCommandInput,
    cb: (err: any, data?: DisassociateLensesCommandOutput) => void
  ): void;
  disassociateLenses(
    args: DisassociateLensesCommandInput,
    options: WellArchitectedRequestOptions,
    cb: (err: any, data?: DisassociateLensesCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateProfilesCommand}
   */
  disassociateProfiles(
    args: DisassociateProfilesCommandInput,
    options?: WellArchitectedRequestOptions
  ): Promise<DisassociateProfilesCommandOutput>;
  disassociateProfiles(
    args: DisassociateProfilesCommandInput,
    cb: (err: any, data?: DisassociateProfilesCommandOutput) => void
  ): void;
  disassociateProfiles(
    args: DisassociateProfilesCommandInput,
    options: WellArchitectedRequestOptions,
    cb: (err: any, data?: DisassociateProfilesCommandOutput) => void
  ): void;

  /**
   * @see {@link ExportLensCommand}
   */
  exportLens(
    args: ExportLensCommandInput,
    options?: WellArchitectedRequestOptions
  ): Promise<ExportLensCommandOutput>;
  exportLens(
    args: ExportLensCommandInput,
    cb: (err: any, data?: ExportLensCommandOutput) => void
  ): void;
  exportLens(
    args: ExportLensCommandInput,
    options: WellArchitectedRequestOptions,
    cb: (err: any, data?: ExportLensCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAgentContextCommand}
   */
  getAgentContext(
    args: GetAgentContextCommandInput,
    options?: WellArchitectedRequestOptions
  ): Promise<GetAgentContextCommandOutput>;
  getAgentContext(
    args: GetAgentContextCommandInput,
    cb: (err: any, data?: GetAgentContextCommandOutput) => void
  ): void;
  getAgentContext(
    args: GetAgentContextCommandInput,
    options: WellArchitectedRequestOptions,
    cb: (err: any, data?: GetAgentContextCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAgentGoalCommand}
   */
  getAgentGoal(
    args: GetAgentGoalCommandInput,
    options?: WellArchitectedRequestOptions
  ): Promise<GetAgentGoalCommandOutput>;
  getAgentGoal(
    args: GetAgentGoalCommandInput,
    cb: (err: any, data?: GetAgentGoalCommandOutput) => void
  ): void;
  getAgentGoal(
    args: GetAgentGoalCommandInput,
    options: WellArchitectedRequestOptions,
    cb: (err: any, data?: GetAgentGoalCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAgentProfileCommand}
   */
  getAgentProfile(
    args: GetAgentProfileCommandInput,
    options?: WellArchitectedRequestOptions
  ): Promise<GetAgentProfileCommandOutput>;
  getAgentProfile(
    args: GetAgentProfileCommandInput,
    cb: (err: any, data?: GetAgentProfileCommandOutput) => void
  ): void;
  getAgentProfile(
    args: GetAgentProfileCommandInput,
    options: WellArchitectedRequestOptions,
    cb: (err: any, data?: GetAgentProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAgentRecommendationCommand}
   */
  getAgentRecommendation(
    args: GetAgentRecommendationCommandInput,
    options?: WellArchitectedRequestOptions
  ): Promise<GetAgentRecommendationCommandOutput>;
  getAgentRecommendation(
    args: GetAgentRecommendationCommandInput,
    cb: (err: any, data?: GetAgentRecommendationCommandOutput) => void
  ): void;
  getAgentRecommendation(
    args: GetAgentRecommendationCommandInput,
    options: WellArchitectedRequestOptions,
    cb: (err: any, data?: GetAgentRecommendationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAgentRecommendationGenerationCommand}
   */
  getAgentRecommendationGeneration(
    args: GetAgentRecommendationGenerationCommandInput,
    options?: WellArchitectedRequestOptions
  ): Promise<GetAgentRecommendationGenerationCommandOutput>;
  getAgentRecommendationGeneration(
    args: GetAgentRecommendationGenerationCommandInput,
    cb: (err: any, data?: GetAgentRecommendationGenerationCommandOutput) => void
  ): void;
  getAgentRecommendationGeneration(
    args: GetAgentRecommendationGenerationCommandInput,
    options: WellArchitectedRequestOptions,
    cb: (err: any, data?: GetAgentRecommendationGenerationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAnswerCommand}
   */
  getAnswer(
    args: GetAnswerCommandInput,
    options?: WellArchitectedRequestOptions
  ): Promise<GetAnswerCommandOutput>;
  getAnswer(
    args: GetAnswerCommandInput,
    cb: (err: any, data?: GetAnswerCommandOutput) => void
  ): void;
  getAnswer(
    args: GetAnswerCommandInput,
    options: WellArchitectedRequestOptions,
    cb: (err: any, data?: GetAnswerCommandOutput) => void
  ): void;

  /**
   * @see {@link GetConsolidatedReportCommand}
   */
  getConsolidatedReport(
    args: GetConsolidatedReportCommandInput,
    options?: WellArchitectedRequestOptions
  ): Promise<GetConsolidatedReportCommandOutput>;
  getConsolidatedReport(
    args: GetConsolidatedReportCommandInput,
    cb: (err: any, data?: GetConsolidatedReportCommandOutput) => void
  ): void;
  getConsolidatedReport(
    args: GetConsolidatedReportCommandInput,
    options: WellArchitectedRequestOptions,
    cb: (err: any, data?: GetConsolidatedReportCommandOutput) => void
  ): void;

  /**
   * @see {@link GetGlobalSettingsCommand}
   */
  getGlobalSettings(): Promise<GetGlobalSettingsCommandOutput>;
  getGlobalSettings(
    args: GetGlobalSettingsCommandInput,
    options?: WellArchitectedRequestOptions
  ): Promise<GetGlobalSettingsCommandOutput>;
  getGlobalSettings(
    args: GetGlobalSettingsCommandInput,
    cb: (err: any, data?: GetGlobalSettingsCommandOutput) => void
  ): void;
  getGlobalSettings(
    args: GetGlobalSettingsCommandInput,
    options: WellArchitectedRequestOptions,
    cb: (err: any, data?: GetGlobalSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLensCommand}
   */
  getLens(
    args: GetLensCommandInput,
    options?: WellArchitectedRequestOptions
  ): Promise<GetLensCommandOutput>;
  getLens(
    args: GetLensCommandInput,
    cb: (err: any, data?: GetLensCommandOutput) => void
  ): void;
  getLens(
    args: GetLensCommandInput,
    options: WellArchitectedRequestOptions,
    cb: (err: any, data?: GetLensCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLensReviewCommand}
   */
  getLensReview(
    args: GetLensReviewCommandInput,
    options?: WellArchitectedRequestOptions
  ): Promise<GetLensReviewCommandOutput>;
  getLensReview(
    args: GetLensReviewCommandInput,
    cb: (err: any, data?: GetLensReviewCommandOutput) => void
  ): void;
  getLensReview(
    args: GetLensReviewCommandInput,
    options: WellArchitectedRequestOptions,
    cb: (err: any, data?: GetLensReviewCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLensReviewReportCommand}
   */
  getLensReviewReport(
    args: GetLensReviewReportCommandInput,
    options?: WellArchitectedRequestOptions
  ): Promise<GetLensReviewReportCommandOutput>;
  getLensReviewReport(
    args: GetLensReviewReportCommandInput,
    cb: (err: any, data?: GetLensReviewReportCommandOutput) => void
  ): void;
  getLensReviewReport(
    args: GetLensReviewReportCommandInput,
    options: WellArchitectedRequestOptions,
    cb: (err: any, data?: GetLensReviewReportCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLensVersionDifferenceCommand}
   */
  getLensVersionDifference(
    args: GetLensVersionDifferenceCommandInput,
    options?: WellArchitectedRequestOptions
  ): Promise<GetLensVersionDifferenceCommandOutput>;
  getLensVersionDifference(
    args: GetLensVersionDifferenceCommandInput,
    cb: (err: any, data?: GetLensVersionDifferenceCommandOutput) => void
  ): void;
  getLensVersionDifference(
    args: GetLensVersionDifferenceCommandInput,
    options: WellArchitectedRequestOptions,
    cb: (err: any, data?: GetLensVersionDifferenceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMilestoneCommand}
   */
  getMilestone(
    args: GetMilestoneCommandInput,
    options?: WellArchitectedRequestOptions
  ): Promise<GetMilestoneCommandOutput>;
  getMilestone(
    args: GetMilestoneCommandInput,
    cb: (err: any, data?: GetMilestoneCommandOutput) => void
  ): void;
  getMilestone(
    args: GetMilestoneCommandInput,
    options: WellArchitectedRequestOptions,
    cb: (err: any, data?: GetMilestoneCommandOutput) => void
  ): void;

  /**
   * @see {@link GetProfileCommand}
   */
  getProfile(
    args: GetProfileCommandInput,
    options?: WellArchitectedRequestOptions
  ): Promise<GetProfileCommandOutput>;
  getProfile(
    args: GetProfileCommandInput,
    cb: (err: any, data?: GetProfileCommandOutput) => void
  ): void;
  getProfile(
    args: GetProfileCommandInput,
    options: WellArchitectedRequestOptions,
    cb: (err: any, data?: GetProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link GetProfileTemplateCommand}
   */
  getProfileTemplate(): Promise<GetProfileTemplateCommandOutput>;
  getProfileTemplate(
    args: GetProfileTemplateCommandInput,
    options?: WellArchitectedRequestOptions
  ): Promise<GetProfileTemplateCommandOutput>;
  getProfileTemplate(
    args: GetProfileTemplateCommandInput,
    cb: (err: any, data?: GetProfileTemplateCommandOutput) => void
  ): void;
  getProfileTemplate(
    args: GetProfileTemplateCommandInput,
    options: WellArchitectedRequestOptions,
    cb: (err: any, data?: GetProfileTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link GetReviewTemplateCommand}
   */
  getReviewTemplate(
    args: GetReviewTemplateCommandInput,
    options?: WellArchitectedRequestOptions
  ): Promise<GetReviewTemplateCommandOutput>;
  getReviewTemplate(
    args: GetReviewTemplateCommandInput,
    cb: (err: any, data?: GetReviewTemplateCommandOutput) => void
  ): void;
  getReviewTemplate(
    args: GetReviewTemplateCommandInput,
    options: WellArchitectedRequestOptions,
    cb: (err: any, data?: GetReviewTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link GetReviewTemplateAnswerCommand}
   */
  getReviewTemplateAnswer(
    args: GetReviewTemplateAnswerCommandInput,
    options?: WellArchitectedRequestOptions
  ): Promise<GetReviewTemplateAnswerCommandOutput>;
  getReviewTemplateAnswer(
    args: GetReviewTemplateAnswerCommandInput,
    cb: (err: any, data?: GetReviewTemplateAnswerCommandOutput) => void
  ): void;
  getReviewTemplateAnswer(
    args: GetReviewTemplateAnswerCommandInput,
    options: WellArchitectedRequestOptions,
    cb: (err: any, data?: GetReviewTemplateAnswerCommandOutput) => void
  ): void;

  /**
   * @see {@link GetReviewTemplateLensReviewCommand}
   */
  getReviewTemplateLensReview(
    args: GetReviewTemplateLensReviewCommandInput,
    options?: WellArchitectedRequestOptions
  ): Promise<GetReviewTemplateLensReviewCommandOutput>;
  getReviewTemplateLensReview(
    args: GetReviewTemplateLensReviewCommandInput,
    cb: (err: any, data?: GetReviewTemplateLensReviewCommandOutput) => void
  ): void;
  getReviewTemplateLensReview(
    args: GetReviewTemplateLensReviewCommandInput,
    options: WellArchitectedRequestOptions,
    cb: (err: any, data?: GetReviewTemplateLensReviewCommandOutput) => void
  ): void;

  /**
   * @see {@link GetWorkloadCommand}
   */
  getWorkload(
    args: GetWorkloadCommandInput,
    options?: WellArchitectedRequestOptions
  ): Promise<GetWorkloadCommandOutput>;
  getWorkload(
    args: GetWorkloadCommandInput,
    cb: (err: any, data?: GetWorkloadCommandOutput) => void
  ): void;
  getWorkload(
    args: GetWorkloadCommandInput,
    options: WellArchitectedRequestOptions,
    cb: (err: any, data?: GetWorkloadCommandOutput) => void
  ): void;

  /**
   * @see {@link ImportLensCommand}
   */
  importLens(
    args: ImportLensCommandInput,
    options?: WellArchitectedRequestOptions
  ): Promise<ImportLensCommandOutput>;
  importLens(
    args: ImportLensCommandInput,
    cb: (err: any, data?: ImportLensCommandOutput) => void
  ): void;
  importLens(
    args: ImportLensCommandInput,
    options: WellArchitectedRequestOptions,
    cb: (err: any, data?: ImportLensCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAgentContextsCommand}
   */
  listAgentContexts(
    args: ListAgentContextsCommandInput,
    options?: WellArchitectedRequestOptions
  ): Promise<ListAgentContextsCommandOutput>;
  listAgentContexts(
    args: ListAgentContextsCommandInput,
    cb: (err: any, data?: ListAgentContextsCommandOutput) => void
  ): void;
  listAgentContexts(
    args: ListAgentContextsCommandInput,
    options: WellArchitectedRequestOptions,
    cb: (err: any, data?: ListAgentContextsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAgentGoalsCommand}
   */
  listAgentGoals(
    args: ListAgentGoalsCommandInput,
    options?: WellArchitectedRequestOptions
  ): Promise<ListAgentGoalsCommandOutput>;
  listAgentGoals(
    args: ListAgentGoalsCommandInput,
    cb: (err: any, data?: ListAgentGoalsCommandOutput) => void
  ): void;
  listAgentGoals(
    args: ListAgentGoalsCommandInput,
    options: WellArchitectedRequestOptions,
    cb: (err: any, data?: ListAgentGoalsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAgentProfilesCommand}
   */
  listAgentProfiles(): Promise<ListAgentProfilesCommandOutput>;
  listAgentProfiles(
    args: ListAgentProfilesCommandInput,
    options?: WellArchitectedRequestOptions
  ): Promise<ListAgentProfilesCommandOutput>;
  listAgentProfiles(
    args: ListAgentProfilesCommandInput,
    cb: (err: any, data?: ListAgentProfilesCommandOutput) => void
  ): void;
  listAgentProfiles(
    args: ListAgentProfilesCommandInput,
    options: WellArchitectedRequestOptions,
    cb: (err: any, data?: ListAgentProfilesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAgentRecommendationGenerationsCommand}
   */
  listAgentRecommendationGenerations(
    args: ListAgentRecommendationGenerationsCommandInput,
    options?: WellArchitectedRequestOptions
  ): Promise<ListAgentRecommendationGenerationsCommandOutput>;
  listAgentRecommendationGenerations(
    args: ListAgentRecommendationGenerationsCommandInput,
    cb: (err: any, data?: ListAgentRecommendationGenerationsCommandOutput) => void
  ): void;
  listAgentRecommendationGenerations(
    args: ListAgentRecommendationGenerationsCommandInput,
    options: WellArchitectedRequestOptions,
    cb: (err: any, data?: ListAgentRecommendationGenerationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAgentRecommendationItemsCommand}
   */
  listAgentRecommendationItems(
    args: ListAgentRecommendationItemsCommandInput,
    options?: WellArchitectedRequestOptions
  ): Promise<ListAgentRecommendationItemsCommandOutput>;
  listAgentRecommendationItems(
    args: ListAgentRecommendationItemsCommandInput,
    cb: (err: any, data?: ListAgentRecommendationItemsCommandOutput) => void
  ): void;
  listAgentRecommendationItems(
    args: ListAgentRecommendationItemsCommandInput,
    options: WellArchitectedRequestOptions,
    cb: (err: any, data?: ListAgentRecommendationItemsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAgentRecommendationsCommand}
   */
  listAgentRecommendations(
    args: ListAgentRecommendationsCommandInput,
    options?: WellArchitectedRequestOptions
  ): Promise<ListAgentRecommendationsCommandOutput>;
  listAgentRecommendations(
    args: ListAgentRecommendationsCommandInput,
    cb: (err: any, data?: ListAgentRecommendationsCommandOutput) => void
  ): void;
  listAgentRecommendations(
    args: ListAgentRecommendationsCommandInput,
    options: WellArchitectedRequestOptions,
    cb: (err: any, data?: ListAgentRecommendationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAnswersCommand}
   */
  listAnswers(
    args: ListAnswersCommandInput,
    options?: WellArchitectedRequestOptions
  ): Promise<ListAnswersCommandOutput>;
  listAnswers(
    args: ListAnswersCommandInput,
    cb: (err: any, data?: ListAnswersCommandOutput) => void
  ): void;
  listAnswers(
    args: ListAnswersCommandInput,
    options: WellArchitectedRequestOptions,
    cb: (err: any, data?: ListAnswersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCheckDetailsCommand}
   */
  listCheckDetails(
    args: ListCheckDetailsCommandInput,
    options?: WellArchitectedRequestOptions
  ): Promise<ListCheckDetailsCommandOutput>;
  listCheckDetails(
    args: ListCheckDetailsCommandInput,
    cb: (err: any, data?: ListCheckDetailsCommandOutput) => void
  ): void;
  listCheckDetails(
    args: ListCheckDetailsCommandInput,
    options: WellArchitectedRequestOptions,
    cb: (err: any, data?: ListCheckDetailsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCheckSummariesCommand}
   */
  listCheckSummaries(
    args: ListCheckSummariesCommandInput,
    options?: WellArchitectedRequestOptions
  ): Promise<ListCheckSummariesCommandOutput>;
  listCheckSummaries(
    args: ListCheckSummariesCommandInput,
    cb: (err: any, data?: ListCheckSummariesCommandOutput) => void
  ): void;
  listCheckSummaries(
    args: ListCheckSummariesCommandInput,
    options: WellArchitectedRequestOptions,
    cb: (err: any, data?: ListCheckSummariesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListLensesCommand}
   */
  listLenses(): Promise<ListLensesCommandOutput>;
  listLenses(
    args: ListLensesCommandInput,
    options?: WellArchitectedRequestOptions
  ): Promise<ListLensesCommandOutput>;
  listLenses(
    args: ListLensesCommandInput,
    cb: (err: any, data?: ListLensesCommandOutput) => void
  ): void;
  listLenses(
    args: ListLensesCommandInput,
    options: WellArchitectedRequestOptions,
    cb: (err: any, data?: ListLensesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListLensReviewImprovementsCommand}
   */
  listLensReviewImprovements(
    args: ListLensReviewImprovementsCommandInput,
    options?: WellArchitectedRequestOptions
  ): Promise<ListLensReviewImprovementsCommandOutput>;
  listLensReviewImprovements(
    args: ListLensReviewImprovementsCommandInput,
    cb: (err: any, data?: ListLensReviewImprovementsCommandOutput) => void
  ): void;
  listLensReviewImprovements(
    args: ListLensReviewImprovementsCommandInput,
    options: WellArchitectedRequestOptions,
    cb: (err: any, data?: ListLensReviewImprovementsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListLensReviewsCommand}
   */
  listLensReviews(
    args: ListLensReviewsCommandInput,
    options?: WellArchitectedRequestOptions
  ): Promise<ListLensReviewsCommandOutput>;
  listLensReviews(
    args: ListLensReviewsCommandInput,
    cb: (err: any, data?: ListLensReviewsCommandOutput) => void
  ): void;
  listLensReviews(
    args: ListLensReviewsCommandInput,
    options: WellArchitectedRequestOptions,
    cb: (err: any, data?: ListLensReviewsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListLensSharesCommand}
   */
  listLensShares(
    args: ListLensSharesCommandInput,
    options?: WellArchitectedRequestOptions
  ): Promise<ListLensSharesCommandOutput>;
  listLensShares(
    args: ListLensSharesCommandInput,
    cb: (err: any, data?: ListLensSharesCommandOutput) => void
  ): void;
  listLensShares(
    args: ListLensSharesCommandInput,
    options: WellArchitectedRequestOptions,
    cb: (err: any, data?: ListLensSharesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMilestonesCommand}
   */
  listMilestones(
    args: ListMilestonesCommandInput,
    options?: WellArchitectedRequestOptions
  ): Promise<ListMilestonesCommandOutput>;
  listMilestones(
    args: ListMilestonesCommandInput,
    cb: (err: any, data?: ListMilestonesCommandOutput) => void
  ): void;
  listMilestones(
    args: ListMilestonesCommandInput,
    options: WellArchitectedRequestOptions,
    cb: (err: any, data?: ListMilestonesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListNotificationsCommand}
   */
  listNotifications(): Promise<ListNotificationsCommandOutput>;
  listNotifications(
    args: ListNotificationsCommandInput,
    options?: WellArchitectedRequestOptions
  ): Promise<ListNotificationsCommandOutput>;
  listNotifications(
    args: ListNotificationsCommandInput,
    cb: (err: any, data?: ListNotificationsCommandOutput) => void
  ): void;
  listNotifications(
    args: ListNotificationsCommandInput,
    options: WellArchitectedRequestOptions,
    cb: (err: any, data?: ListNotificationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListProfileNotificationsCommand}
   */
  listProfileNotifications(): Promise<ListProfileNotificationsCommandOutput>;
  listProfileNotifications(
    args: ListProfileNotificationsCommandInput,
    options?: WellArchitectedRequestOptions
  ): Promise<ListProfileNotificationsCommandOutput>;
  listProfileNotifications(
    args: ListProfileNotificationsCommandInput,
    cb: (err: any, data?: ListProfileNotificationsCommandOutput) => void
  ): void;
  listProfileNotifications(
    args: ListProfileNotificationsCommandInput,
    options: WellArchitectedRequestOptions,
    cb: (err: any, data?: ListProfileNotificationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListProfilesCommand}
   */
  listProfiles(): Promise<ListProfilesCommandOutput>;
  listProfiles(
    args: ListProfilesCommandInput,
    options?: WellArchitectedRequestOptions
  ): Promise<ListProfilesCommandOutput>;
  listProfiles(
    args: ListProfilesCommandInput,
    cb: (err: any, data?: ListProfilesCommandOutput) => void
  ): void;
  listProfiles(
    args: ListProfilesCommandInput,
    options: WellArchitectedRequestOptions,
    cb: (err: any, data?: ListProfilesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListProfileSharesCommand}
   */
  listProfileShares(
    args: ListProfileSharesCommandInput,
    options?: WellArchitectedRequestOptions
  ): Promise<ListProfileSharesCommandOutput>;
  listProfileShares(
    args: ListProfileSharesCommandInput,
    cb: (err: any, data?: ListProfileSharesCommandOutput) => void
  ): void;
  listProfileShares(
    args: ListProfileSharesCommandInput,
    options: WellArchitectedRequestOptions,
    cb: (err: any, data?: ListProfileSharesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListReviewTemplateAnswersCommand}
   */
  listReviewTemplateAnswers(
    args: ListReviewTemplateAnswersCommandInput,
    options?: WellArchitectedRequestOptions
  ): Promise<ListReviewTemplateAnswersCommandOutput>;
  listReviewTemplateAnswers(
    args: ListReviewTemplateAnswersCommandInput,
    cb: (err: any, data?: ListReviewTemplateAnswersCommandOutput) => void
  ): void;
  listReviewTemplateAnswers(
    args: ListReviewTemplateAnswersCommandInput,
    options: WellArchitectedRequestOptions,
    cb: (err: any, data?: ListReviewTemplateAnswersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListReviewTemplatesCommand}
   */
  listReviewTemplates(): Promise<ListReviewTemplatesCommandOutput>;
  listReviewTemplates(
    args: ListReviewTemplatesCommandInput,
    options?: WellArchitectedRequestOptions
  ): Promise<ListReviewTemplatesCommandOutput>;
  listReviewTemplates(
    args: ListReviewTemplatesCommandInput,
    cb: (err: any, data?: ListReviewTemplatesCommandOutput) => void
  ): void;
  listReviewTemplates(
    args: ListReviewTemplatesCommandInput,
    options: WellArchitectedRequestOptions,
    cb: (err: any, data?: ListReviewTemplatesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListShareInvitationsCommand}
   */
  listShareInvitations(): Promise<ListShareInvitationsCommandOutput>;
  listShareInvitations(
    args: ListShareInvitationsCommandInput,
    options?: WellArchitectedRequestOptions
  ): Promise<ListShareInvitationsCommandOutput>;
  listShareInvitations(
    args: ListShareInvitationsCommandInput,
    cb: (err: any, data?: ListShareInvitationsCommandOutput) => void
  ): void;
  listShareInvitations(
    args: ListShareInvitationsCommandInput,
    options: WellArchitectedRequestOptions,
    cb: (err: any, data?: ListShareInvitationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: WellArchitectedRequestOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: WellArchitectedRequestOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTemplateSharesCommand}
   */
  listTemplateShares(
    args: ListTemplateSharesCommandInput,
    options?: WellArchitectedRequestOptions
  ): Promise<ListTemplateSharesCommandOutput>;
  listTemplateShares(
    args: ListTemplateSharesCommandInput,
    cb: (err: any, data?: ListTemplateSharesCommandOutput) => void
  ): void;
  listTemplateShares(
    args: ListTemplateSharesCommandInput,
    options: WellArchitectedRequestOptions,
    cb: (err: any, data?: ListTemplateSharesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListWorkloadsCommand}
   */
  listWorkloads(): Promise<ListWorkloadsCommandOutput>;
  listWorkloads(
    args: ListWorkloadsCommandInput,
    options?: WellArchitectedRequestOptions
  ): Promise<ListWorkloadsCommandOutput>;
  listWorkloads(
    args: ListWorkloadsCommandInput,
    cb: (err: any, data?: ListWorkloadsCommandOutput) => void
  ): void;
  listWorkloads(
    args: ListWorkloadsCommandInput,
    options: WellArchitectedRequestOptions,
    cb: (err: any, data?: ListWorkloadsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListWorkloadSharesCommand}
   */
  listWorkloadShares(
    args: ListWorkloadSharesCommandInput,
    options?: WellArchitectedRequestOptions
  ): Promise<ListWorkloadSharesCommandOutput>;
  listWorkloadShares(
    args: ListWorkloadSharesCommandInput,
    cb: (err: any, data?: ListWorkloadSharesCommandOutput) => void
  ): void;
  listWorkloadShares(
    args: ListWorkloadSharesCommandInput,
    options: WellArchitectedRequestOptions,
    cb: (err: any, data?: ListWorkloadSharesCommandOutput) => void
  ): void;

  /**
   * @see {@link PutAgentRecommendationFeedbackCommand}
   */
  putAgentRecommendationFeedback(
    args: PutAgentRecommendationFeedbackCommandInput,
    options?: WellArchitectedRequestOptions
  ): Promise<PutAgentRecommendationFeedbackCommandOutput>;
  putAgentRecommendationFeedback(
    args: PutAgentRecommendationFeedbackCommandInput,
    cb: (err: any, data?: PutAgentRecommendationFeedbackCommandOutput) => void
  ): void;
  putAgentRecommendationFeedback(
    args: PutAgentRecommendationFeedbackCommandInput,
    options: WellArchitectedRequestOptions,
    cb: (err: any, data?: PutAgentRecommendationFeedbackCommandOutput) => void
  ): void;

  /**
   * @see {@link StartAgentRecommendationGenerationCommand}
   */
  startAgentRecommendationGeneration(
    args: StartAgentRecommendationGenerationCommandInput,
    options?: WellArchitectedRequestOptions
  ): Promise<StartAgentRecommendationGenerationCommandOutput>;
  startAgentRecommendationGeneration(
    args: StartAgentRecommendationGenerationCommandInput,
    cb: (err: any, data?: StartAgentRecommendationGenerationCommandOutput) => void
  ): void;
  startAgentRecommendationGeneration(
    args: StartAgentRecommendationGenerationCommandInput,
    options: WellArchitectedRequestOptions,
    cb: (err: any, data?: StartAgentRecommendationGenerationCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: WellArchitectedRequestOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: WellArchitectedRequestOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: WellArchitectedRequestOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: WellArchitectedRequestOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAgentContextCommand}
   */
  updateAgentContext(
    args: UpdateAgentContextCommandInput,
    options?: WellArchitectedRequestOptions
  ): Promise<UpdateAgentContextCommandOutput>;
  updateAgentContext(
    args: UpdateAgentContextCommandInput,
    cb: (err: any, data?: UpdateAgentContextCommandOutput) => void
  ): void;
  updateAgentContext(
    args: UpdateAgentContextCommandInput,
    options: WellArchitectedRequestOptions,
    cb: (err: any, data?: UpdateAgentContextCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAgentGoalCommand}
   */
  updateAgentGoal(
    args: UpdateAgentGoalCommandInput,
    options?: WellArchitectedRequestOptions
  ): Promise<UpdateAgentGoalCommandOutput>;
  updateAgentGoal(
    args: UpdateAgentGoalCommandInput,
    cb: (err: any, data?: UpdateAgentGoalCommandOutput) => void
  ): void;
  updateAgentGoal(
    args: UpdateAgentGoalCommandInput,
    options: WellArchitectedRequestOptions,
    cb: (err: any, data?: UpdateAgentGoalCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAgentProfileCommand}
   */
  updateAgentProfile(
    args: UpdateAgentProfileCommandInput,
    options?: WellArchitectedRequestOptions
  ): Promise<UpdateAgentProfileCommandOutput>;
  updateAgentProfile(
    args: UpdateAgentProfileCommandInput,
    cb: (err: any, data?: UpdateAgentProfileCommandOutput) => void
  ): void;
  updateAgentProfile(
    args: UpdateAgentProfileCommandInput,
    options: WellArchitectedRequestOptions,
    cb: (err: any, data?: UpdateAgentProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAgentRecommendationStatusCommand}
   */
  updateAgentRecommendationStatus(
    args: UpdateAgentRecommendationStatusCommandInput,
    options?: WellArchitectedRequestOptions
  ): Promise<UpdateAgentRecommendationStatusCommandOutput>;
  updateAgentRecommendationStatus(
    args: UpdateAgentRecommendationStatusCommandInput,
    cb: (err: any, data?: UpdateAgentRecommendationStatusCommandOutput) => void
  ): void;
  updateAgentRecommendationStatus(
    args: UpdateAgentRecommendationStatusCommandInput,
    options: WellArchitectedRequestOptions,
    cb: (err: any, data?: UpdateAgentRecommendationStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAnswerCommand}
   */
  updateAnswer(
    args: UpdateAnswerCommandInput,
    options?: WellArchitectedRequestOptions
  ): Promise<UpdateAnswerCommandOutput>;
  updateAnswer(
    args: UpdateAnswerCommandInput,
    cb: (err: any, data?: UpdateAnswerCommandOutput) => void
  ): void;
  updateAnswer(
    args: UpdateAnswerCommandInput,
    options: WellArchitectedRequestOptions,
    cb: (err: any, data?: UpdateAnswerCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateGlobalSettingsCommand}
   */
  updateGlobalSettings(): Promise<UpdateGlobalSettingsCommandOutput>;
  updateGlobalSettings(
    args: UpdateGlobalSettingsCommandInput,
    options?: WellArchitectedRequestOptions
  ): Promise<UpdateGlobalSettingsCommandOutput>;
  updateGlobalSettings(
    args: UpdateGlobalSettingsCommandInput,
    cb: (err: any, data?: UpdateGlobalSettingsCommandOutput) => void
  ): void;
  updateGlobalSettings(
    args: UpdateGlobalSettingsCommandInput,
    options: WellArchitectedRequestOptions,
    cb: (err: any, data?: UpdateGlobalSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateIntegrationCommand}
   */
  updateIntegration(
    args: UpdateIntegrationCommandInput,
    options?: WellArchitectedRequestOptions
  ): Promise<UpdateIntegrationCommandOutput>;
  updateIntegration(
    args: UpdateIntegrationCommandInput,
    cb: (err: any, data?: UpdateIntegrationCommandOutput) => void
  ): void;
  updateIntegration(
    args: UpdateIntegrationCommandInput,
    options: WellArchitectedRequestOptions,
    cb: (err: any, data?: UpdateIntegrationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateLensReviewCommand}
   */
  updateLensReview(
    args: UpdateLensReviewCommandInput,
    options?: WellArchitectedRequestOptions
  ): Promise<UpdateLensReviewCommandOutput>;
  updateLensReview(
    args: UpdateLensReviewCommandInput,
    cb: (err: any, data?: UpdateLensReviewCommandOutput) => void
  ): void;
  updateLensReview(
    args: UpdateLensReviewCommandInput,
    options: WellArchitectedRequestOptions,
    cb: (err: any, data?: UpdateLensReviewCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateProfileCommand}
   */
  updateProfile(
    args: UpdateProfileCommandInput,
    options?: WellArchitectedRequestOptions
  ): Promise<UpdateProfileCommandOutput>;
  updateProfile(
    args: UpdateProfileCommandInput,
    cb: (err: any, data?: UpdateProfileCommandOutput) => void
  ): void;
  updateProfile(
    args: UpdateProfileCommandInput,
    options: WellArchitectedRequestOptions,
    cb: (err: any, data?: UpdateProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateReviewTemplateCommand}
   */
  updateReviewTemplate(
    args: UpdateReviewTemplateCommandInput,
    options?: WellArchitectedRequestOptions
  ): Promise<UpdateReviewTemplateCommandOutput>;
  updateReviewTemplate(
    args: UpdateReviewTemplateCommandInput,
    cb: (err: any, data?: UpdateReviewTemplateCommandOutput) => void
  ): void;
  updateReviewTemplate(
    args: UpdateReviewTemplateCommandInput,
    options: WellArchitectedRequestOptions,
    cb: (err: any, data?: UpdateReviewTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateReviewTemplateAnswerCommand}
   */
  updateReviewTemplateAnswer(
    args: UpdateReviewTemplateAnswerCommandInput,
    options?: WellArchitectedRequestOptions
  ): Promise<UpdateReviewTemplateAnswerCommandOutput>;
  updateReviewTemplateAnswer(
    args: UpdateReviewTemplateAnswerCommandInput,
    cb: (err: any, data?: UpdateReviewTemplateAnswerCommandOutput) => void
  ): void;
  updateReviewTemplateAnswer(
    args: UpdateReviewTemplateAnswerCommandInput,
    options: WellArchitectedRequestOptions,
    cb: (err: any, data?: UpdateReviewTemplateAnswerCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateReviewTemplateLensReviewCommand}
   */
  updateReviewTemplateLensReview(
    args: UpdateReviewTemplateLensReviewCommandInput,
    options?: WellArchitectedRequestOptions
  ): Promise<UpdateReviewTemplateLensReviewCommandOutput>;
  updateReviewTemplateLensReview(
    args: UpdateReviewTemplateLensReviewCommandInput,
    cb: (err: any, data?: UpdateReviewTemplateLensReviewCommandOutput) => void
  ): void;
  updateReviewTemplateLensReview(
    args: UpdateReviewTemplateLensReviewCommandInput,
    options: WellArchitectedRequestOptions,
    cb: (err: any, data?: UpdateReviewTemplateLensReviewCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateShareInvitationCommand}
   */
  updateShareInvitation(
    args: UpdateShareInvitationCommandInput,
    options?: WellArchitectedRequestOptions
  ): Promise<UpdateShareInvitationCommandOutput>;
  updateShareInvitation(
    args: UpdateShareInvitationCommandInput,
    cb: (err: any, data?: UpdateShareInvitationCommandOutput) => void
  ): void;
  updateShareInvitation(
    args: UpdateShareInvitationCommandInput,
    options: WellArchitectedRequestOptions,
    cb: (err: any, data?: UpdateShareInvitationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateWorkloadCommand}
   */
  updateWorkload(
    args: UpdateWorkloadCommandInput,
    options?: WellArchitectedRequestOptions
  ): Promise<UpdateWorkloadCommandOutput>;
  updateWorkload(
    args: UpdateWorkloadCommandInput,
    cb: (err: any, data?: UpdateWorkloadCommandOutput) => void
  ): void;
  updateWorkload(
    args: UpdateWorkloadCommandInput,
    options: WellArchitectedRequestOptions,
    cb: (err: any, data?: UpdateWorkloadCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateWorkloadShareCommand}
   */
  updateWorkloadShare(
    args: UpdateWorkloadShareCommandInput,
    options?: WellArchitectedRequestOptions
  ): Promise<UpdateWorkloadShareCommandOutput>;
  updateWorkloadShare(
    args: UpdateWorkloadShareCommandInput,
    cb: (err: any, data?: UpdateWorkloadShareCommandOutput) => void
  ): void;
  updateWorkloadShare(
    args: UpdateWorkloadShareCommandInput,
    options: WellArchitectedRequestOptions,
    cb: (err: any, data?: UpdateWorkloadShareCommandOutput) => void
  ): void;

  /**
   * @see {@link UpgradeLensReviewCommand}
   */
  upgradeLensReview(
    args: UpgradeLensReviewCommandInput,
    options?: WellArchitectedRequestOptions
  ): Promise<UpgradeLensReviewCommandOutput>;
  upgradeLensReview(
    args: UpgradeLensReviewCommandInput,
    cb: (err: any, data?: UpgradeLensReviewCommandOutput) => void
  ): void;
  upgradeLensReview(
    args: UpgradeLensReviewCommandInput,
    options: WellArchitectedRequestOptions,
    cb: (err: any, data?: UpgradeLensReviewCommandOutput) => void
  ): void;

  /**
   * @see {@link UpgradeProfileVersionCommand}
   */
  upgradeProfileVersion(
    args: UpgradeProfileVersionCommandInput,
    options?: WellArchitectedRequestOptions
  ): Promise<UpgradeProfileVersionCommandOutput>;
  upgradeProfileVersion(
    args: UpgradeProfileVersionCommandInput,
    cb: (err: any, data?: UpgradeProfileVersionCommandOutput) => void
  ): void;
  upgradeProfileVersion(
    args: UpgradeProfileVersionCommandInput,
    options: WellArchitectedRequestOptions,
    cb: (err: any, data?: UpgradeProfileVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpgradeReviewTemplateLensReviewCommand}
   */
  upgradeReviewTemplateLensReview(
    args: UpgradeReviewTemplateLensReviewCommandInput,
    options?: WellArchitectedRequestOptions
  ): Promise<UpgradeReviewTemplateLensReviewCommandOutput>;
  upgradeReviewTemplateLensReview(
    args: UpgradeReviewTemplateLensReviewCommandInput,
    cb: (err: any, data?: UpgradeReviewTemplateLensReviewCommandOutput) => void
  ): void;
  upgradeReviewTemplateLensReview(
    args: UpgradeReviewTemplateLensReviewCommandInput,
    options: WellArchitectedRequestOptions,
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
   * @see {@link ListAgentContextsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAgentContextsCommandOutput}.
   */
  paginateListAgentContexts(
    args: ListAgentContextsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAgentContextsCommandOutput>;

  /**
   * @see {@link ListAgentGoalsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAgentGoalsCommandOutput}.
   */
  paginateListAgentGoals(
    args: ListAgentGoalsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAgentGoalsCommandOutput>;

  /**
   * @see {@link ListAgentProfilesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAgentProfilesCommandOutput}.
   */
  paginateListAgentProfiles(
    args?: ListAgentProfilesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAgentProfilesCommandOutput>;

  /**
   * @see {@link ListAgentRecommendationGenerationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAgentRecommendationGenerationsCommandOutput}.
   */
  paginateListAgentRecommendationGenerations(
    args: ListAgentRecommendationGenerationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAgentRecommendationGenerationsCommandOutput>;

  /**
   * @see {@link ListAgentRecommendationItemsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAgentRecommendationItemsCommandOutput}.
   */
  paginateListAgentRecommendationItems(
    args: ListAgentRecommendationItemsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAgentRecommendationItemsCommandOutput>;

  /**
   * @see {@link ListAgentRecommendationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAgentRecommendationsCommandOutput}.
   */
  paginateListAgentRecommendations(
    args: ListAgentRecommendationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAgentRecommendationsCommandOutput>;

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
 * <fullname>Amazon Web Services Well-Architected</fullname> <p>Amazon Web Services Well-Architected helps you evaluate your architectures against Amazon Web Services best practices across operational excellence, security, reliability, performance efficiency, cost optimization, and sustainability. The service includes the Amazon Web Services Well-Architected Agent for AI-powered recommendations tailored to your specific environment, and the <a href="http://aws.amazon.com/well-architected-tool">Well-Architected Tool</a> for conducting reviews and tracking improvements.</p> <p>This is the <i>Amazon Web Services Well-Architected API Reference</i>. Through this API, you can programmatically access personalized recommendations and automation scripts from the Amazon Web Services Well-Architected Agent, and create and manage workloads, conduct lens reviews, track milestones, manage custom lenses, share workloads across accounts, and manage profiles with the Well-Architected Tool.</p> <p>For more information about the service, see the <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/intro.html">Amazon Web Services Well-Architected User Guide</a>.</p>
 * @public
 */
export class WellArchitected extends WellArchitectedClient implements WellArchitected {}
createAggregatedClient(commands, WellArchitected, { paginators });
