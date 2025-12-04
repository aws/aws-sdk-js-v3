import {
  AccountJiraIssueManagementStatus,
  AdditionalResourceType,
  AnswerReason,
  AssociateLensesCommand,
  AssociateProfilesCommand,
  CheckFailureReason,
  CheckProvider,
  CheckStatus,
  ChoiceReason,
  ChoiceStatus,
  CreateLensShareCommand,
  CreateLensVersionCommand,
  CreateMilestoneCommand,
  CreateProfileCommand,
  CreateProfileShareCommand,
  CreateReviewTemplateCommand,
  CreateTemplateShareCommand,
  CreateWorkloadCommand,
  CreateWorkloadShareCommand,
  DefinitionType,
  DeleteLensCommand,
  DeleteLensShareCommand,
  DeleteProfileCommand,
  DeleteProfileShareCommand,
  DeleteReviewTemplateCommand,
  DeleteTemplateShareCommand,
  DeleteWorkloadCommand,
  DeleteWorkloadShareCommand,
  DifferenceStatus,
  DisassociateLensesCommand,
  DisassociateProfilesCommand,
  DiscoveryIntegrationStatus,
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
  GetReviewTemplateAnswerCommand,
  GetReviewTemplateCommand,
  GetReviewTemplateLensReviewCommand,
  GetWorkloadCommand,
  ImportLensCommand,
  ImportLensStatus,
  IntegratingService,
  IntegrationStatus,
  IntegrationStatusInput,
  IssueManagementType,
  LensStatus,
  LensStatusType,
  LensType,
  ListAnswersCommand,
  ListCheckDetailsCommand,
  ListCheckSummariesCommand,
  ListLensReviewImprovementsCommand,
  ListLensReviewsCommand,
  ListLensSharesCommand,
  ListLensesCommand,
  ListMilestonesCommand,
  ListNotificationsCommand,
  ListProfileNotificationsCommand,
  ListProfileSharesCommand,
  ListProfilesCommand,
  ListReviewTemplateAnswersCommand,
  ListReviewTemplatesCommand,
  ListShareInvitationsCommand,
  ListTagsForResourceCommand,
  ListTemplateSharesCommand,
  ListWorkloadSharesCommand,
  ListWorkloadsCommand,
  MetricType,
  NotificationType,
  OrganizationSharingStatus,
  PermissionType,
  ProfileNotificationType,
  ProfileOwnerType,
  Question,
  QuestionPriority,
  QuestionType,
  ReportFormat,
  ReviewTemplateAnswerStatus,
  ReviewTemplateUpdateStatus,
  Risk,
  ShareInvitationAction,
  ShareResourceType,
  ShareStatus,
  TagResourceCommand,
  TrustedAdvisorIntegrationStatus,
  UntagResourceCommand,
  UpdateAnswerCommand,
  UpdateGlobalSettingsCommand,
  UpdateIntegrationCommand,
  UpdateLensReviewCommand,
  UpdateProfileCommand,
  UpdateReviewTemplateAnswerCommand,
  UpdateReviewTemplateCommand,
  UpdateReviewTemplateLensReviewCommand,
  UpdateShareInvitationCommand,
  UpdateWorkloadCommand,
  UpdateWorkloadShareCommand,
  UpgradeLensReviewCommand,
  UpgradeProfileVersionCommand,
  UpgradeReviewTemplateLensReviewCommand,
  WellArchitected,
  WellArchitectedClient,
  WellArchitectedServiceException,
  WorkloadEnvironment,
  WorkloadImprovementStatus,
  WorkloadIssueManagementStatus,
  paginateGetConsolidatedReport,
  paginateListAnswers,
  paginateListCheckDetails,
  paginateListCheckSummaries,
  paginateListLensReviewImprovements,
  paginateListLensReviews,
  paginateListLensShares,
  paginateListLenses,
  paginateListMilestones,
  paginateListNotifications,
  paginateListProfileNotifications,
  paginateListProfileShares,
  paginateListProfiles,
  paginateListReviewTemplateAnswers,
  paginateListReviewTemplates,
  paginateListShareInvitations,
  paginateListTemplateShares,
  paginateListWorkloadShares,
  paginateListWorkloads,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof WellArchitectedClient === "function")
assert(typeof WellArchitected === "function")
// commands
assert(typeof AssociateLensesCommand === "function")
assert(typeof AssociateProfilesCommand === "function")
assert(typeof CreateLensShareCommand === "function")
assert(typeof CreateLensVersionCommand === "function")
assert(typeof CreateMilestoneCommand === "function")
assert(typeof CreateProfileCommand === "function")
assert(typeof CreateProfileShareCommand === "function")
assert(typeof CreateReviewTemplateCommand === "function")
assert(typeof CreateTemplateShareCommand === "function")
assert(typeof CreateWorkloadCommand === "function")
assert(typeof CreateWorkloadShareCommand === "function")
assert(typeof DeleteLensCommand === "function")
assert(typeof DeleteLensShareCommand === "function")
assert(typeof DeleteProfileCommand === "function")
assert(typeof DeleteProfileShareCommand === "function")
assert(typeof DeleteReviewTemplateCommand === "function")
assert(typeof DeleteTemplateShareCommand === "function")
assert(typeof DeleteWorkloadCommand === "function")
assert(typeof DeleteWorkloadShareCommand === "function")
assert(typeof DisassociateLensesCommand === "function")
assert(typeof DisassociateProfilesCommand === "function")
assert(typeof ExportLensCommand === "function")
assert(typeof GetAnswerCommand === "function")
assert(typeof GetConsolidatedReportCommand === "function")
assert(typeof GetGlobalSettingsCommand === "function")
assert(typeof GetLensCommand === "function")
assert(typeof GetLensReviewCommand === "function")
assert(typeof GetLensReviewReportCommand === "function")
assert(typeof GetLensVersionDifferenceCommand === "function")
assert(typeof GetMilestoneCommand === "function")
assert(typeof GetProfileCommand === "function")
assert(typeof GetProfileTemplateCommand === "function")
assert(typeof GetReviewTemplateCommand === "function")
assert(typeof GetReviewTemplateAnswerCommand === "function")
assert(typeof GetReviewTemplateLensReviewCommand === "function")
assert(typeof GetWorkloadCommand === "function")
assert(typeof ImportLensCommand === "function")
assert(typeof ListAnswersCommand === "function")
assert(typeof ListCheckDetailsCommand === "function")
assert(typeof ListCheckSummariesCommand === "function")
assert(typeof ListLensesCommand === "function")
assert(typeof ListLensReviewImprovementsCommand === "function")
assert(typeof ListLensReviewsCommand === "function")
assert(typeof ListLensSharesCommand === "function")
assert(typeof ListMilestonesCommand === "function")
assert(typeof ListNotificationsCommand === "function")
assert(typeof ListProfileNotificationsCommand === "function")
assert(typeof ListProfilesCommand === "function")
assert(typeof ListProfileSharesCommand === "function")
assert(typeof ListReviewTemplateAnswersCommand === "function")
assert(typeof ListReviewTemplatesCommand === "function")
assert(typeof ListShareInvitationsCommand === "function")
assert(typeof ListTagsForResourceCommand === "function")
assert(typeof ListTemplateSharesCommand === "function")
assert(typeof ListWorkloadsCommand === "function")
assert(typeof ListWorkloadSharesCommand === "function")
assert(typeof TagResourceCommand === "function")
assert(typeof UntagResourceCommand === "function")
assert(typeof UpdateAnswerCommand === "function")
assert(typeof UpdateGlobalSettingsCommand === "function")
assert(typeof UpdateIntegrationCommand === "function")
assert(typeof UpdateLensReviewCommand === "function")
assert(typeof UpdateProfileCommand === "function")
assert(typeof UpdateReviewTemplateCommand === "function")
assert(typeof UpdateReviewTemplateAnswerCommand === "function")
assert(typeof UpdateReviewTemplateLensReviewCommand === "function")
assert(typeof UpdateShareInvitationCommand === "function")
assert(typeof UpdateWorkloadCommand === "function")
assert(typeof UpdateWorkloadShareCommand === "function")
assert(typeof UpgradeLensReviewCommand === "function")
assert(typeof UpgradeProfileVersionCommand === "function")
assert(typeof UpgradeReviewTemplateLensReviewCommand === "function")
// enums
assert(typeof AccountJiraIssueManagementStatus === "object");
assert(typeof AdditionalResourceType === "object");
assert(typeof AnswerReason === "object");
assert(typeof CheckFailureReason === "object");
assert(typeof CheckProvider === "object");
assert(typeof CheckStatus === "object");
assert(typeof ChoiceReason === "object");
assert(typeof ChoiceStatus === "object");
assert(typeof DefinitionType === "object");
assert(typeof DifferenceStatus === "object");
assert(typeof DiscoveryIntegrationStatus === "object");
assert(typeof ImportLensStatus === "object");
assert(typeof IntegratingService === "object");
assert(typeof IntegrationStatus === "object");
assert(typeof IntegrationStatusInput === "object");
assert(typeof IssueManagementType === "object");
assert(typeof LensStatus === "object");
assert(typeof LensStatusType === "object");
assert(typeof LensType === "object");
assert(typeof MetricType === "object");
assert(typeof NotificationType === "object");
assert(typeof OrganizationSharingStatus === "object");
assert(typeof PermissionType === "object");
assert(typeof ProfileNotificationType === "object");
assert(typeof ProfileOwnerType === "object");
assert(typeof Question === "object");
assert(typeof QuestionPriority === "object");
assert(typeof QuestionType === "object");
assert(typeof ReportFormat === "object");
assert(typeof ReviewTemplateAnswerStatus === "object");
assert(typeof ReviewTemplateUpdateStatus === "object");
assert(typeof Risk === "object");
assert(typeof ShareInvitationAction === "object");
assert(typeof ShareResourceType === "object");
assert(typeof ShareStatus === "object");
assert(typeof TrustedAdvisorIntegrationStatus === "object");
assert(typeof WorkloadEnvironment === "object");
assert(typeof WorkloadImprovementStatus === "object");
assert(typeof WorkloadIssueManagementStatus === "object");
// errors
assert(WellArchitectedServiceException.prototype instanceof Error)
// paginators
assert(typeof paginateGetConsolidatedReport === "function")
assert(typeof paginateListAnswers === "function")
assert(typeof paginateListCheckDetails === "function")
assert(typeof paginateListCheckSummaries === "function")
assert(typeof paginateListLensReviewImprovements === "function")
assert(typeof paginateListLensReviews === "function")
assert(typeof paginateListLensShares === "function")
assert(typeof paginateListLenses === "function")
assert(typeof paginateListMilestones === "function")
assert(typeof paginateListNotifications === "function")
assert(typeof paginateListProfileNotifications === "function")
assert(typeof paginateListProfileShares === "function")
assert(typeof paginateListProfiles === "function")
assert(typeof paginateListReviewTemplateAnswers === "function")
assert(typeof paginateListReviewTemplates === "function")
assert(typeof paginateListShareInvitations === "function")
assert(typeof paginateListTemplateShares === "function")
assert(typeof paginateListWorkloadShares === "function")
assert(typeof paginateListWorkloads === "function")
console.log(`WellArchitected index test passed.`);
