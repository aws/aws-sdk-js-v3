import {
  AccessDeniedException,
  AccessDeniedException$,
  AccountJiraConfigurationInput$,
  AccountJiraConfigurationOutput$,
  AccountJiraIssueManagementStatus,
  AdditionalResourceType,
  AdditionalResources$,
  Answer$,
  AnswerReason,
  AnswerSummary$,
  AssociateLenses$,
  AssociateLensesCommand,
  AssociateLensesInput$,
  AssociateProfiles$,
  AssociateProfilesCommand,
  AssociateProfilesInput$,
  BestPractice$,
  CheckDetail$,
  CheckFailureReason,
  CheckProvider,
  CheckStatus,
  CheckSummary$,
  Choice$,
  ChoiceAnswer$,
  ChoiceAnswerSummary$,
  ChoiceContent$,
  ChoiceImprovementPlan$,
  ChoiceReason,
  ChoiceStatus,
  ChoiceUpdate$,
  ConflictException,
  ConflictException$,
  ConsolidatedReportMetric$,
  CreateLensShare$,
  CreateLensShareCommand,
  CreateLensShareInput$,
  CreateLensShareOutput$,
  CreateLensVersion$,
  CreateLensVersionCommand,
  CreateLensVersionInput$,
  CreateLensVersionOutput$,
  CreateMilestone$,
  CreateMilestoneCommand,
  CreateMilestoneInput$,
  CreateMilestoneOutput$,
  CreateProfile$,
  CreateProfileCommand,
  CreateProfileInput$,
  CreateProfileOutput$,
  CreateProfileShare$,
  CreateProfileShareCommand,
  CreateProfileShareInput$,
  CreateProfileShareOutput$,
  CreateReviewTemplate$,
  CreateReviewTemplateCommand,
  CreateReviewTemplateInput$,
  CreateReviewTemplateOutput$,
  CreateTemplateShare$,
  CreateTemplateShareCommand,
  CreateTemplateShareInput$,
  CreateTemplateShareOutput$,
  CreateWorkload$,
  CreateWorkloadCommand,
  CreateWorkloadInput$,
  CreateWorkloadOutput$,
  CreateWorkloadShare$,
  CreateWorkloadShareCommand,
  CreateWorkloadShareInput$,
  CreateWorkloadShareOutput$,
  DefinitionType,
  DeleteLens$,
  DeleteLensCommand,
  DeleteLensInput$,
  DeleteLensShare$,
  DeleteLensShareCommand,
  DeleteLensShareInput$,
  DeleteProfile$,
  DeleteProfileCommand,
  DeleteProfileInput$,
  DeleteProfileShare$,
  DeleteProfileShareCommand,
  DeleteProfileShareInput$,
  DeleteReviewTemplate$,
  DeleteReviewTemplateCommand,
  DeleteReviewTemplateInput$,
  DeleteTemplateShare$,
  DeleteTemplateShareCommand,
  DeleteTemplateShareInput$,
  DeleteWorkload$,
  DeleteWorkloadCommand,
  DeleteWorkloadInput$,
  DeleteWorkloadShare$,
  DeleteWorkloadShareCommand,
  DeleteWorkloadShareInput$,
  DifferenceStatus,
  DisassociateLenses$,
  DisassociateLensesCommand,
  DisassociateLensesInput$,
  DisassociateProfiles$,
  DisassociateProfilesCommand,
  DisassociateProfilesInput$,
  DiscoveryIntegrationStatus,
  ExportLens$,
  ExportLensCommand,
  ExportLensInput$,
  ExportLensOutput$,
  GetAnswer$,
  GetAnswerCommand,
  GetAnswerInput$,
  GetAnswerOutput$,
  GetConsolidatedReport$,
  GetConsolidatedReportCommand,
  GetConsolidatedReportInput$,
  GetConsolidatedReportOutput$,
  GetGlobalSettings$,
  GetGlobalSettingsCommand,
  GetGlobalSettingsOutput$,
  GetLens$,
  GetLensCommand,
  GetLensInput$,
  GetLensOutput$,
  GetLensReview$,
  GetLensReviewCommand,
  GetLensReviewInput$,
  GetLensReviewOutput$,
  GetLensReviewReport$,
  GetLensReviewReportCommand,
  GetLensReviewReportInput$,
  GetLensReviewReportOutput$,
  GetLensVersionDifference$,
  GetLensVersionDifferenceCommand,
  GetLensVersionDifferenceInput$,
  GetLensVersionDifferenceOutput$,
  GetMilestone$,
  GetMilestoneCommand,
  GetMilestoneInput$,
  GetMilestoneOutput$,
  GetProfile$,
  GetProfileCommand,
  GetProfileInput$,
  GetProfileOutput$,
  GetProfileTemplate$,
  GetProfileTemplateCommand,
  GetProfileTemplateInput$,
  GetProfileTemplateOutput$,
  GetReviewTemplate$,
  GetReviewTemplateAnswer$,
  GetReviewTemplateAnswerCommand,
  GetReviewTemplateAnswerInput$,
  GetReviewTemplateAnswerOutput$,
  GetReviewTemplateCommand,
  GetReviewTemplateInput$,
  GetReviewTemplateLensReview$,
  GetReviewTemplateLensReviewCommand,
  GetReviewTemplateLensReviewInput$,
  GetReviewTemplateLensReviewOutput$,
  GetReviewTemplateOutput$,
  GetWorkload$,
  GetWorkloadCommand,
  GetWorkloadInput$,
  GetWorkloadOutput$,
  ImportLens$,
  ImportLensCommand,
  ImportLensInput$,
  ImportLensOutput$,
  ImportLensStatus,
  ImprovementSummary$,
  IntegratingService,
  IntegrationStatus,
  IntegrationStatusInput,
  InternalServerException,
  InternalServerException$,
  IssueManagementType,
  JiraConfiguration$,
  JiraSelectedQuestionConfiguration$,
  Lens$,
  LensMetric$,
  LensReview$,
  LensReviewReport$,
  LensReviewSummary$,
  LensShareSummary$,
  LensStatus,
  LensStatusType,
  LensSummary$,
  LensType,
  LensUpgradeSummary$,
  ListAnswers$,
  ListAnswersCommand,
  ListAnswersInput$,
  ListAnswersOutput$,
  ListCheckDetails$,
  ListCheckDetailsCommand,
  ListCheckDetailsInput$,
  ListCheckDetailsOutput$,
  ListCheckSummaries$,
  ListCheckSummariesCommand,
  ListCheckSummariesInput$,
  ListCheckSummariesOutput$,
  ListLensReviewImprovements$,
  ListLensReviewImprovementsCommand,
  ListLensReviewImprovementsInput$,
  ListLensReviewImprovementsOutput$,
  ListLensReviews$,
  ListLensReviewsCommand,
  ListLensReviewsInput$,
  ListLensReviewsOutput$,
  ListLensShares$,
  ListLensSharesCommand,
  ListLensSharesInput$,
  ListLensSharesOutput$,
  ListLenses$,
  ListLensesCommand,
  ListLensesInput$,
  ListLensesOutput$,
  ListMilestones$,
  ListMilestonesCommand,
  ListMilestonesInput$,
  ListMilestonesOutput$,
  ListNotifications$,
  ListNotificationsCommand,
  ListNotificationsInput$,
  ListNotificationsOutput$,
  ListProfileNotifications$,
  ListProfileNotificationsCommand,
  ListProfileNotificationsInput$,
  ListProfileNotificationsOutput$,
  ListProfileShares$,
  ListProfileSharesCommand,
  ListProfileSharesInput$,
  ListProfileSharesOutput$,
  ListProfiles$,
  ListProfilesCommand,
  ListProfilesInput$,
  ListProfilesOutput$,
  ListReviewTemplateAnswers$,
  ListReviewTemplateAnswersCommand,
  ListReviewTemplateAnswersInput$,
  ListReviewTemplateAnswersOutput$,
  ListReviewTemplates$,
  ListReviewTemplatesCommand,
  ListReviewTemplatesInput$,
  ListReviewTemplatesOutput$,
  ListShareInvitations$,
  ListShareInvitationsCommand,
  ListShareInvitationsInput$,
  ListShareInvitationsOutput$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceInput$,
  ListTagsForResourceOutput$,
  ListTemplateShares$,
  ListTemplateSharesCommand,
  ListTemplateSharesInput$,
  ListTemplateSharesOutput$,
  ListWorkloadShares$,
  ListWorkloadSharesCommand,
  ListWorkloadSharesInput$,
  ListWorkloadSharesOutput$,
  ListWorkloads$,
  ListWorkloadsCommand,
  ListWorkloadsInput$,
  ListWorkloadsOutput$,
  MetricType,
  Milestone$,
  MilestoneSummary$,
  NotificationSummary$,
  NotificationType,
  OrganizationSharingStatus,
  PermissionType,
  PillarDifference$,
  PillarMetric$,
  PillarReviewSummary$,
  Profile$,
  ProfileChoice$,
  ProfileNotificationSummary$,
  ProfileNotificationType,
  ProfileOwnerType,
  ProfileQuestion$,
  ProfileQuestionUpdate$,
  ProfileShareSummary$,
  ProfileSummary$,
  ProfileTemplate$,
  ProfileTemplateChoice$,
  ProfileTemplateQuestion$,
  Question,
  QuestionDifference$,
  QuestionMetric$,
  QuestionPriority,
  QuestionType,
  ReportFormat,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ReviewTemplate$,
  ReviewTemplateAnswer$,
  ReviewTemplateAnswerStatus,
  ReviewTemplateAnswerSummary$,
  ReviewTemplateLensReview$,
  ReviewTemplatePillarReviewSummary$,
  ReviewTemplateSummary$,
  ReviewTemplateUpdateStatus,
  Risk,
  SelectedPillar$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  ShareInvitation$,
  ShareInvitationAction,
  ShareInvitationSummary$,
  ShareResourceType,
  ShareStatus,
  TagResource$,
  TagResourceCommand,
  TagResourceInput$,
  TagResourceOutput$,
  TemplateShareSummary$,
  ThrottlingException,
  ThrottlingException$,
  TrustedAdvisorIntegrationStatus,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceInput$,
  UntagResourceOutput$,
  UpdateAnswer$,
  UpdateAnswerCommand,
  UpdateAnswerInput$,
  UpdateAnswerOutput$,
  UpdateGlobalSettings$,
  UpdateGlobalSettingsCommand,
  UpdateGlobalSettingsInput$,
  UpdateIntegration$,
  UpdateIntegrationCommand,
  UpdateIntegrationInput$,
  UpdateLensReview$,
  UpdateLensReviewCommand,
  UpdateLensReviewInput$,
  UpdateLensReviewOutput$,
  UpdateProfile$,
  UpdateProfileCommand,
  UpdateProfileInput$,
  UpdateProfileOutput$,
  UpdateReviewTemplate$,
  UpdateReviewTemplateAnswer$,
  UpdateReviewTemplateAnswerCommand,
  UpdateReviewTemplateAnswerInput$,
  UpdateReviewTemplateAnswerOutput$,
  UpdateReviewTemplateCommand,
  UpdateReviewTemplateInput$,
  UpdateReviewTemplateLensReview$,
  UpdateReviewTemplateLensReviewCommand,
  UpdateReviewTemplateLensReviewInput$,
  UpdateReviewTemplateLensReviewOutput$,
  UpdateReviewTemplateOutput$,
  UpdateShareInvitation$,
  UpdateShareInvitationCommand,
  UpdateShareInvitationInput$,
  UpdateShareInvitationOutput$,
  UpdateWorkload$,
  UpdateWorkloadCommand,
  UpdateWorkloadInput$,
  UpdateWorkloadOutput$,
  UpdateWorkloadShare$,
  UpdateWorkloadShareCommand,
  UpdateWorkloadShareInput$,
  UpdateWorkloadShareOutput$,
  UpgradeLensReview$,
  UpgradeLensReviewCommand,
  UpgradeLensReviewInput$,
  UpgradeProfileVersion$,
  UpgradeProfileVersionCommand,
  UpgradeProfileVersionInput$,
  UpgradeReviewTemplateLensReview$,
  UpgradeReviewTemplateLensReviewCommand,
  UpgradeReviewTemplateLensReviewInput$,
  ValidationException,
  ValidationException$,
  ValidationExceptionField$,
  ValidationExceptionReason,
  VersionDifferences$,
  WellArchitected,
  WellArchitectedClient,
  WellArchitectedServiceException,
  Workload$,
  WorkloadDiscoveryConfig$,
  WorkloadEnvironment,
  WorkloadImprovementStatus,
  WorkloadIssueManagementStatus,
  WorkloadJiraConfigurationInput$,
  WorkloadJiraConfigurationOutput$,
  WorkloadProfile$,
  WorkloadShare$,
  WorkloadShareSummary$,
  WorkloadSummary$,
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
assert(typeof WellArchitectedClient === "function");
assert(typeof WellArchitected === "function");
// commands
assert(typeof AssociateLensesCommand === "function");
assert(typeof AssociateLenses$ === "object");
assert(typeof AssociateProfilesCommand === "function");
assert(typeof AssociateProfiles$ === "object");
assert(typeof CreateLensShareCommand === "function");
assert(typeof CreateLensShare$ === "object");
assert(typeof CreateLensVersionCommand === "function");
assert(typeof CreateLensVersion$ === "object");
assert(typeof CreateMilestoneCommand === "function");
assert(typeof CreateMilestone$ === "object");
assert(typeof CreateProfileCommand === "function");
assert(typeof CreateProfile$ === "object");
assert(typeof CreateProfileShareCommand === "function");
assert(typeof CreateProfileShare$ === "object");
assert(typeof CreateReviewTemplateCommand === "function");
assert(typeof CreateReviewTemplate$ === "object");
assert(typeof CreateTemplateShareCommand === "function");
assert(typeof CreateTemplateShare$ === "object");
assert(typeof CreateWorkloadCommand === "function");
assert(typeof CreateWorkload$ === "object");
assert(typeof CreateWorkloadShareCommand === "function");
assert(typeof CreateWorkloadShare$ === "object");
assert(typeof DeleteLensCommand === "function");
assert(typeof DeleteLens$ === "object");
assert(typeof DeleteLensShareCommand === "function");
assert(typeof DeleteLensShare$ === "object");
assert(typeof DeleteProfileCommand === "function");
assert(typeof DeleteProfile$ === "object");
assert(typeof DeleteProfileShareCommand === "function");
assert(typeof DeleteProfileShare$ === "object");
assert(typeof DeleteReviewTemplateCommand === "function");
assert(typeof DeleteReviewTemplate$ === "object");
assert(typeof DeleteTemplateShareCommand === "function");
assert(typeof DeleteTemplateShare$ === "object");
assert(typeof DeleteWorkloadCommand === "function");
assert(typeof DeleteWorkload$ === "object");
assert(typeof DeleteWorkloadShareCommand === "function");
assert(typeof DeleteWorkloadShare$ === "object");
assert(typeof DisassociateLensesCommand === "function");
assert(typeof DisassociateLenses$ === "object");
assert(typeof DisassociateProfilesCommand === "function");
assert(typeof DisassociateProfiles$ === "object");
assert(typeof ExportLensCommand === "function");
assert(typeof ExportLens$ === "object");
assert(typeof GetAnswerCommand === "function");
assert(typeof GetAnswer$ === "object");
assert(typeof GetConsolidatedReportCommand === "function");
assert(typeof GetConsolidatedReport$ === "object");
assert(typeof GetGlobalSettingsCommand === "function");
assert(typeof GetGlobalSettings$ === "object");
assert(typeof GetLensCommand === "function");
assert(typeof GetLens$ === "object");
assert(typeof GetLensReviewCommand === "function");
assert(typeof GetLensReview$ === "object");
assert(typeof GetLensReviewReportCommand === "function");
assert(typeof GetLensReviewReport$ === "object");
assert(typeof GetLensVersionDifferenceCommand === "function");
assert(typeof GetLensVersionDifference$ === "object");
assert(typeof GetMilestoneCommand === "function");
assert(typeof GetMilestone$ === "object");
assert(typeof GetProfileCommand === "function");
assert(typeof GetProfile$ === "object");
assert(typeof GetProfileTemplateCommand === "function");
assert(typeof GetProfileTemplate$ === "object");
assert(typeof GetReviewTemplateCommand === "function");
assert(typeof GetReviewTemplate$ === "object");
assert(typeof GetReviewTemplateAnswerCommand === "function");
assert(typeof GetReviewTemplateAnswer$ === "object");
assert(typeof GetReviewTemplateLensReviewCommand === "function");
assert(typeof GetReviewTemplateLensReview$ === "object");
assert(typeof GetWorkloadCommand === "function");
assert(typeof GetWorkload$ === "object");
assert(typeof ImportLensCommand === "function");
assert(typeof ImportLens$ === "object");
assert(typeof ListAnswersCommand === "function");
assert(typeof ListAnswers$ === "object");
assert(typeof ListCheckDetailsCommand === "function");
assert(typeof ListCheckDetails$ === "object");
assert(typeof ListCheckSummariesCommand === "function");
assert(typeof ListCheckSummaries$ === "object");
assert(typeof ListLensesCommand === "function");
assert(typeof ListLenses$ === "object");
assert(typeof ListLensReviewImprovementsCommand === "function");
assert(typeof ListLensReviewImprovements$ === "object");
assert(typeof ListLensReviewsCommand === "function");
assert(typeof ListLensReviews$ === "object");
assert(typeof ListLensSharesCommand === "function");
assert(typeof ListLensShares$ === "object");
assert(typeof ListMilestonesCommand === "function");
assert(typeof ListMilestones$ === "object");
assert(typeof ListNotificationsCommand === "function");
assert(typeof ListNotifications$ === "object");
assert(typeof ListProfileNotificationsCommand === "function");
assert(typeof ListProfileNotifications$ === "object");
assert(typeof ListProfilesCommand === "function");
assert(typeof ListProfiles$ === "object");
assert(typeof ListProfileSharesCommand === "function");
assert(typeof ListProfileShares$ === "object");
assert(typeof ListReviewTemplateAnswersCommand === "function");
assert(typeof ListReviewTemplateAnswers$ === "object");
assert(typeof ListReviewTemplatesCommand === "function");
assert(typeof ListReviewTemplates$ === "object");
assert(typeof ListShareInvitationsCommand === "function");
assert(typeof ListShareInvitations$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ListTemplateSharesCommand === "function");
assert(typeof ListTemplateShares$ === "object");
assert(typeof ListWorkloadsCommand === "function");
assert(typeof ListWorkloads$ === "object");
assert(typeof ListWorkloadSharesCommand === "function");
assert(typeof ListWorkloadShares$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateAnswerCommand === "function");
assert(typeof UpdateAnswer$ === "object");
assert(typeof UpdateGlobalSettingsCommand === "function");
assert(typeof UpdateGlobalSettings$ === "object");
assert(typeof UpdateIntegrationCommand === "function");
assert(typeof UpdateIntegration$ === "object");
assert(typeof UpdateLensReviewCommand === "function");
assert(typeof UpdateLensReview$ === "object");
assert(typeof UpdateProfileCommand === "function");
assert(typeof UpdateProfile$ === "object");
assert(typeof UpdateReviewTemplateCommand === "function");
assert(typeof UpdateReviewTemplate$ === "object");
assert(typeof UpdateReviewTemplateAnswerCommand === "function");
assert(typeof UpdateReviewTemplateAnswer$ === "object");
assert(typeof UpdateReviewTemplateLensReviewCommand === "function");
assert(typeof UpdateReviewTemplateLensReview$ === "object");
assert(typeof UpdateShareInvitationCommand === "function");
assert(typeof UpdateShareInvitation$ === "object");
assert(typeof UpdateWorkloadCommand === "function");
assert(typeof UpdateWorkload$ === "object");
assert(typeof UpdateWorkloadShareCommand === "function");
assert(typeof UpdateWorkloadShare$ === "object");
assert(typeof UpgradeLensReviewCommand === "function");
assert(typeof UpgradeLensReview$ === "object");
assert(typeof UpgradeProfileVersionCommand === "function");
assert(typeof UpgradeProfileVersion$ === "object");
assert(typeof UpgradeReviewTemplateLensReviewCommand === "function");
assert(typeof UpgradeReviewTemplateLensReview$ === "object");
// structural schemas
assert(typeof AccountJiraConfigurationInput$ === "object");
assert(typeof AccountJiraConfigurationOutput$ === "object");
assert(typeof AdditionalResources$ === "object");
assert(typeof Answer$ === "object");
assert(typeof AnswerSummary$ === "object");
assert(typeof AssociateLensesInput$ === "object");
assert(typeof AssociateProfilesInput$ === "object");
assert(typeof BestPractice$ === "object");
assert(typeof CheckDetail$ === "object");
assert(typeof CheckSummary$ === "object");
assert(typeof Choice$ === "object");
assert(typeof ChoiceAnswer$ === "object");
assert(typeof ChoiceAnswerSummary$ === "object");
assert(typeof ChoiceContent$ === "object");
assert(typeof ChoiceImprovementPlan$ === "object");
assert(typeof ChoiceUpdate$ === "object");
assert(typeof ConsolidatedReportMetric$ === "object");
assert(typeof CreateLensShareInput$ === "object");
assert(typeof CreateLensShareOutput$ === "object");
assert(typeof CreateLensVersionInput$ === "object");
assert(typeof CreateLensVersionOutput$ === "object");
assert(typeof CreateMilestoneInput$ === "object");
assert(typeof CreateMilestoneOutput$ === "object");
assert(typeof CreateProfileInput$ === "object");
assert(typeof CreateProfileOutput$ === "object");
assert(typeof CreateProfileShareInput$ === "object");
assert(typeof CreateProfileShareOutput$ === "object");
assert(typeof CreateReviewTemplateInput$ === "object");
assert(typeof CreateReviewTemplateOutput$ === "object");
assert(typeof CreateTemplateShareInput$ === "object");
assert(typeof CreateTemplateShareOutput$ === "object");
assert(typeof CreateWorkloadInput$ === "object");
assert(typeof CreateWorkloadOutput$ === "object");
assert(typeof CreateWorkloadShareInput$ === "object");
assert(typeof CreateWorkloadShareOutput$ === "object");
assert(typeof DeleteLensInput$ === "object");
assert(typeof DeleteLensShareInput$ === "object");
assert(typeof DeleteProfileInput$ === "object");
assert(typeof DeleteProfileShareInput$ === "object");
assert(typeof DeleteReviewTemplateInput$ === "object");
assert(typeof DeleteTemplateShareInput$ === "object");
assert(typeof DeleteWorkloadInput$ === "object");
assert(typeof DeleteWorkloadShareInput$ === "object");
assert(typeof DisassociateLensesInput$ === "object");
assert(typeof DisassociateProfilesInput$ === "object");
assert(typeof ExportLensInput$ === "object");
assert(typeof ExportLensOutput$ === "object");
assert(typeof GetAnswerInput$ === "object");
assert(typeof GetAnswerOutput$ === "object");
assert(typeof GetConsolidatedReportInput$ === "object");
assert(typeof GetConsolidatedReportOutput$ === "object");
assert(typeof GetGlobalSettingsOutput$ === "object");
assert(typeof GetLensInput$ === "object");
assert(typeof GetLensOutput$ === "object");
assert(typeof GetLensReviewInput$ === "object");
assert(typeof GetLensReviewOutput$ === "object");
assert(typeof GetLensReviewReportInput$ === "object");
assert(typeof GetLensReviewReportOutput$ === "object");
assert(typeof GetLensVersionDifferenceInput$ === "object");
assert(typeof GetLensVersionDifferenceOutput$ === "object");
assert(typeof GetMilestoneInput$ === "object");
assert(typeof GetMilestoneOutput$ === "object");
assert(typeof GetProfileInput$ === "object");
assert(typeof GetProfileOutput$ === "object");
assert(typeof GetProfileTemplateInput$ === "object");
assert(typeof GetProfileTemplateOutput$ === "object");
assert(typeof GetReviewTemplateAnswerInput$ === "object");
assert(typeof GetReviewTemplateAnswerOutput$ === "object");
assert(typeof GetReviewTemplateInput$ === "object");
assert(typeof GetReviewTemplateLensReviewInput$ === "object");
assert(typeof GetReviewTemplateLensReviewOutput$ === "object");
assert(typeof GetReviewTemplateOutput$ === "object");
assert(typeof GetWorkloadInput$ === "object");
assert(typeof GetWorkloadOutput$ === "object");
assert(typeof ImportLensInput$ === "object");
assert(typeof ImportLensOutput$ === "object");
assert(typeof ImprovementSummary$ === "object");
assert(typeof JiraConfiguration$ === "object");
assert(typeof JiraSelectedQuestionConfiguration$ === "object");
assert(typeof Lens$ === "object");
assert(typeof LensMetric$ === "object");
assert(typeof LensReview$ === "object");
assert(typeof LensReviewReport$ === "object");
assert(typeof LensReviewSummary$ === "object");
assert(typeof LensShareSummary$ === "object");
assert(typeof LensSummary$ === "object");
assert(typeof LensUpgradeSummary$ === "object");
assert(typeof ListAnswersInput$ === "object");
assert(typeof ListAnswersOutput$ === "object");
assert(typeof ListCheckDetailsInput$ === "object");
assert(typeof ListCheckDetailsOutput$ === "object");
assert(typeof ListCheckSummariesInput$ === "object");
assert(typeof ListCheckSummariesOutput$ === "object");
assert(typeof ListLensesInput$ === "object");
assert(typeof ListLensesOutput$ === "object");
assert(typeof ListLensReviewImprovementsInput$ === "object");
assert(typeof ListLensReviewImprovementsOutput$ === "object");
assert(typeof ListLensReviewsInput$ === "object");
assert(typeof ListLensReviewsOutput$ === "object");
assert(typeof ListLensSharesInput$ === "object");
assert(typeof ListLensSharesOutput$ === "object");
assert(typeof ListMilestonesInput$ === "object");
assert(typeof ListMilestonesOutput$ === "object");
assert(typeof ListNotificationsInput$ === "object");
assert(typeof ListNotificationsOutput$ === "object");
assert(typeof ListProfileNotificationsInput$ === "object");
assert(typeof ListProfileNotificationsOutput$ === "object");
assert(typeof ListProfileSharesInput$ === "object");
assert(typeof ListProfileSharesOutput$ === "object");
assert(typeof ListProfilesInput$ === "object");
assert(typeof ListProfilesOutput$ === "object");
assert(typeof ListReviewTemplateAnswersInput$ === "object");
assert(typeof ListReviewTemplateAnswersOutput$ === "object");
assert(typeof ListReviewTemplatesInput$ === "object");
assert(typeof ListReviewTemplatesOutput$ === "object");
assert(typeof ListShareInvitationsInput$ === "object");
assert(typeof ListShareInvitationsOutput$ === "object");
assert(typeof ListTagsForResourceInput$ === "object");
assert(typeof ListTagsForResourceOutput$ === "object");
assert(typeof ListTemplateSharesInput$ === "object");
assert(typeof ListTemplateSharesOutput$ === "object");
assert(typeof ListWorkloadSharesInput$ === "object");
assert(typeof ListWorkloadSharesOutput$ === "object");
assert(typeof ListWorkloadsInput$ === "object");
assert(typeof ListWorkloadsOutput$ === "object");
assert(typeof Milestone$ === "object");
assert(typeof MilestoneSummary$ === "object");
assert(typeof NotificationSummary$ === "object");
assert(typeof PillarDifference$ === "object");
assert(typeof PillarMetric$ === "object");
assert(typeof PillarReviewSummary$ === "object");
assert(typeof Profile$ === "object");
assert(typeof ProfileChoice$ === "object");
assert(typeof ProfileNotificationSummary$ === "object");
assert(typeof ProfileQuestion$ === "object");
assert(typeof ProfileQuestionUpdate$ === "object");
assert(typeof ProfileShareSummary$ === "object");
assert(typeof ProfileSummary$ === "object");
assert(typeof ProfileTemplate$ === "object");
assert(typeof ProfileTemplateChoice$ === "object");
assert(typeof ProfileTemplateQuestion$ === "object");
assert(typeof QuestionDifference$ === "object");
assert(typeof QuestionMetric$ === "object");
assert(typeof ReviewTemplate$ === "object");
assert(typeof ReviewTemplateAnswer$ === "object");
assert(typeof ReviewTemplateAnswerSummary$ === "object");
assert(typeof ReviewTemplateLensReview$ === "object");
assert(typeof ReviewTemplatePillarReviewSummary$ === "object");
assert(typeof ReviewTemplateSummary$ === "object");
assert(typeof SelectedPillar$ === "object");
assert(typeof ShareInvitation$ === "object");
assert(typeof ShareInvitationSummary$ === "object");
assert(typeof TagResourceInput$ === "object");
assert(typeof TagResourceOutput$ === "object");
assert(typeof TemplateShareSummary$ === "object");
assert(typeof UntagResourceInput$ === "object");
assert(typeof UntagResourceOutput$ === "object");
assert(typeof UpdateAnswerInput$ === "object");
assert(typeof UpdateAnswerOutput$ === "object");
assert(typeof UpdateGlobalSettingsInput$ === "object");
assert(typeof UpdateIntegrationInput$ === "object");
assert(typeof UpdateLensReviewInput$ === "object");
assert(typeof UpdateLensReviewOutput$ === "object");
assert(typeof UpdateProfileInput$ === "object");
assert(typeof UpdateProfileOutput$ === "object");
assert(typeof UpdateReviewTemplateAnswerInput$ === "object");
assert(typeof UpdateReviewTemplateAnswerOutput$ === "object");
assert(typeof UpdateReviewTemplateInput$ === "object");
assert(typeof UpdateReviewTemplateLensReviewInput$ === "object");
assert(typeof UpdateReviewTemplateLensReviewOutput$ === "object");
assert(typeof UpdateReviewTemplateOutput$ === "object");
assert(typeof UpdateShareInvitationInput$ === "object");
assert(typeof UpdateShareInvitationOutput$ === "object");
assert(typeof UpdateWorkloadInput$ === "object");
assert(typeof UpdateWorkloadOutput$ === "object");
assert(typeof UpdateWorkloadShareInput$ === "object");
assert(typeof UpdateWorkloadShareOutput$ === "object");
assert(typeof UpgradeLensReviewInput$ === "object");
assert(typeof UpgradeProfileVersionInput$ === "object");
assert(typeof UpgradeReviewTemplateLensReviewInput$ === "object");
assert(typeof ValidationExceptionField$ === "object");
assert(typeof VersionDifferences$ === "object");
assert(typeof Workload$ === "object");
assert(typeof WorkloadDiscoveryConfig$ === "object");
assert(typeof WorkloadJiraConfigurationInput$ === "object");
assert(typeof WorkloadJiraConfigurationOutput$ === "object");
assert(typeof WorkloadProfile$ === "object");
assert(typeof WorkloadShare$ === "object");
assert(typeof WorkloadShareSummary$ === "object");
assert(typeof WorkloadSummary$ === "object");
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
assert(typeof ValidationExceptionReason === "object");
assert(typeof WorkloadEnvironment === "object");
assert(typeof WorkloadImprovementStatus === "object");
assert(typeof WorkloadIssueManagementStatus === "object");
// errors
assert(AccessDeniedException.prototype instanceof WellArchitectedServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof WellArchitectedServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof WellArchitectedServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof WellArchitectedServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof WellArchitectedServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof WellArchitectedServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof WellArchitectedServiceException);
assert(typeof ValidationException$ === "object");
assert(WellArchitectedServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateGetConsolidatedReport === "function");
assert(typeof paginateListAnswers === "function");
assert(typeof paginateListCheckDetails === "function");
assert(typeof paginateListCheckSummaries === "function");
assert(typeof paginateListLensReviewImprovements === "function");
assert(typeof paginateListLensReviews === "function");
assert(typeof paginateListLensShares === "function");
assert(typeof paginateListLenses === "function");
assert(typeof paginateListMilestones === "function");
assert(typeof paginateListNotifications === "function");
assert(typeof paginateListProfileNotifications === "function");
assert(typeof paginateListProfileShares === "function");
assert(typeof paginateListProfiles === "function");
assert(typeof paginateListReviewTemplateAnswers === "function");
assert(typeof paginateListReviewTemplates === "function");
assert(typeof paginateListShareInvitations === "function");
assert(typeof paginateListTemplateShares === "function");
assert(typeof paginateListWorkloadShares === "function");
assert(typeof paginateListWorkloads === "function");
console.log(`WellArchitected index test passed.`);
