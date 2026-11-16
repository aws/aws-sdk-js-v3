import {
  AccessDeniedException,
  AccessDeniedException$,
  ActivateSubscription$,
  ActivateSubscriptionCommand,
  ActivateSubscriptionInput$,
  ActivateSubscriptionOutput$,
  ArtifactDetails$,
  Checklist$,
  ChecklistItem$,
  ChecklistItemStatus,
  ClinicalNoteGenerationResult$,
  ClinicalNoteGenerationSettings$,
  ClinicalNoteGenerationSettingsResponse$,
  ConflictException,
  ConflictException$,
  ConnectHealth,
  ConnectHealthClient,
  ConnectHealthServiceException,
  CreateDataset$,
  CreateDatasetCommand,
  CreateDatasetInput$,
  CreateDatasetOutput$,
  CreateDomain$,
  CreateDomainCommand,
  CreateDomainInput$,
  CreateDomainOutput$,
  CreateSubscription$,
  CreateSubscriptionCommand,
  CreateSubscriptionInput$,
  CreateSubscriptionOutput$,
  CreateWebAppConfiguration$,
  CustomTemplate$,
  CustomTemplateBase,
  CustomTemplateResponse$,
  DatasetArtifacts$,
  DatasetConfig$,
  DatasetStatus,
  DatasetSummary$,
  DatasetType,
  DeactivateSubscription$,
  DeactivateSubscriptionCommand,
  DeactivateSubscriptionInput$,
  DeactivateSubscriptionOutput$,
  DeleteDataset$,
  DeleteDatasetCommand,
  DeleteDatasetInput$,
  DeleteDatasetOutput$,
  DeleteDomain$,
  DeleteDomainCommand,
  DeleteDomainInput$,
  DeleteDomainOutput$,
  DomainStatus,
  DomainSummary$,
  EncounterContext$,
  EncounterType,
  EncryptionContext$,
  EncryptionType,
  FeedbackArtifactType,
  FHIRServer$,
  GetDataset$,
  GetDatasetCommand,
  GetDatasetInput$,
  GetDatasetOutput$,
  GetDomain$,
  GetDomainCommand,
  GetDomainInput$,
  GetDomainOutput$,
  GetMedicalCodingJob$,
  GetMedicalCodingJobCommand,
  GetMedicalCodingJobRequest$,
  GetMedicalCodingJobResponse$,
  GetMedicalScribeListeningSession$,
  GetMedicalScribeListeningSessionCommand,
  GetMedicalScribeListeningSessionInput$,
  GetMedicalScribeListeningSessionOutput$,
  GetPatientInsightsJob$,
  GetPatientInsightsJobCommand,
  GetPatientInsightsJobRequest$,
  GetPatientInsightsJobResponse$,
  GetSubscription$,
  GetSubscriptionCommand,
  GetSubscriptionInput$,
  GetSubscriptionOutput$,
  InputDataConfig$,
  InsightsContext$,
  InsightsOutput$,
  InsightsType,
  InternalServerException,
  InternalServerException$,
  JobStatus,
  ListDatasets$,
  ListDatasetsCommand,
  ListDatasetsInput$,
  ListDatasetsOutput$,
  ListDomains$,
  ListDomainsCommand,
  ListDomainsInput$,
  ListDomainsOutput$,
  ListSubscriptions$,
  ListSubscriptionsCommand,
  ListSubscriptionsInput$,
  ListSubscriptionsOutput$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceInput$,
  ListTagsForResourceOutput$,
  ManagedNoteTemplate,
  ManagedTemplate$,
  ManagedTemplateResponse$,
  MedicalCodeGenerationResult$,
  MedicalCodeGenerationSettings$,
  MedicalCodeGenerationSettingsResponse$,
  MedicalCodesEncounterContext$,
  MedicalCodesPatientContext$,
  MedicalCodingContext$,
  MedicalCodingDatasetArtifacts$,
  MedicalCodingDatasetConfig$,
  MedicalCodingOutput$,
  MedicalCodingOutputDataConfig$,
  MedicalScribeAudioEvent$,
  MedicalScribeBinaryAudioEvent$,
  MedicalScribeChannelDefinition$,
  MedicalScribeChecklistEvent$,
  MedicalScribeConfigurationEvent$,
  MedicalScribeInputStream$,
  MedicalScribeLanguageCode,
  MedicalScribeListeningSessionDetails$,
  MedicalScribeMediaEncoding,
  MedicalScribeOutputStream$,
  MedicalScribeParticipantRole,
  MedicalScribePeriodontalChartEvent$,
  MedicalScribePostStreamActionSettings$,
  MedicalScribePostStreamActionSettingsResponse$,
  MedicalScribePostStreamActionsResult$,
  MedicalScribeSessionControlEvent$,
  MedicalScribeSessionControlEventType,
  MedicalScribeStreamStatus,
  MedicalScribeTranscriptEvent$,
  MedicalScribeTranscriptSegment$,
  NoteTemplateSettings$,
  NoteTemplateSettingsResponse$,
  OutputDataConfig$,
  paginateListDatasets,
  paginateListDomains,
  paginateListSubscriptions,
  PatientInsightsEncounterContext$,
  PatientInsightsPatientContext$,
  PatientStatus,
  PeriodontalReview$,
  PeriodontalReviewReason,
  PeriodontalSite$,
  PeriodontalSiteName,
  PeriodontalTooth$,
  PostStreamArtifactGenerationStatus,
  Pronouns,
  ProviderRole,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  S3Source$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  Sex,
  Specialty,
  StartMedicalCodingJob$,
  StartMedicalCodingJobCommand,
  StartMedicalCodingJobRequest$,
  StartMedicalCodingJobResponse$,
  StartMedicalScribeListeningSession$,
  StartMedicalScribeListeningSessionCommand,
  StartMedicalScribeListeningSessionInput$,
  StartMedicalScribeListeningSessionOutput$,
  StartPatientInsightsJob$,
  StartPatientInsightsJobCommand,
  StartPatientInsightsJobRequest$,
  StartPatientInsightsJobResponse$,
  SubmitFeedback$,
  SubmitFeedbackCommand,
  SubmitFeedbackRequest$,
  SubmitFeedbackResponse$,
  SubscriptionDescription$,
  SubscriptionStatus,
  TagResource$,
  TagResourceCommand,
  TagResourceInput$,
  TemplateSectionInstruction$,
  ThrottlingException,
  ThrottlingException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceInput$,
  UserContext$,
  ValidationException,
  ValidationException$,
  WebAppConfiguration$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof ConnectHealthClient === "function");
assert(typeof ConnectHealth === "function");
// commands
assert(typeof ActivateSubscriptionCommand === "function");
assert(typeof ActivateSubscription$ === "object");
assert(typeof CreateDatasetCommand === "function");
assert(typeof CreateDataset$ === "object");
assert(typeof CreateDomainCommand === "function");
assert(typeof CreateDomain$ === "object");
assert(typeof CreateSubscriptionCommand === "function");
assert(typeof CreateSubscription$ === "object");
assert(typeof DeactivateSubscriptionCommand === "function");
assert(typeof DeactivateSubscription$ === "object");
assert(typeof DeleteDatasetCommand === "function");
assert(typeof DeleteDataset$ === "object");
assert(typeof DeleteDomainCommand === "function");
assert(typeof DeleteDomain$ === "object");
assert(typeof GetDatasetCommand === "function");
assert(typeof GetDataset$ === "object");
assert(typeof GetDomainCommand === "function");
assert(typeof GetDomain$ === "object");
assert(typeof GetMedicalCodingJobCommand === "function");
assert(typeof GetMedicalCodingJob$ === "object");
assert(typeof GetMedicalScribeListeningSessionCommand === "function");
assert(typeof GetMedicalScribeListeningSession$ === "object");
assert(typeof GetPatientInsightsJobCommand === "function");
assert(typeof GetPatientInsightsJob$ === "object");
assert(typeof GetSubscriptionCommand === "function");
assert(typeof GetSubscription$ === "object");
assert(typeof ListDatasetsCommand === "function");
assert(typeof ListDatasets$ === "object");
assert(typeof ListDomainsCommand === "function");
assert(typeof ListDomains$ === "object");
assert(typeof ListSubscriptionsCommand === "function");
assert(typeof ListSubscriptions$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof StartMedicalCodingJobCommand === "function");
assert(typeof StartMedicalCodingJob$ === "object");
assert(typeof StartMedicalScribeListeningSessionCommand === "function");
assert(typeof StartMedicalScribeListeningSession$ === "object");
assert(typeof StartPatientInsightsJobCommand === "function");
assert(typeof StartPatientInsightsJob$ === "object");
assert(typeof SubmitFeedbackCommand === "function");
assert(typeof SubmitFeedback$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
// structural schemas
assert(typeof ActivateSubscriptionInput$ === "object");
assert(typeof ActivateSubscriptionOutput$ === "object");
assert(typeof ArtifactDetails$ === "object");
assert(typeof Checklist$ === "object");
assert(typeof ChecklistItem$ === "object");
assert(typeof ClinicalNoteGenerationResult$ === "object");
assert(typeof ClinicalNoteGenerationSettings$ === "object");
assert(typeof ClinicalNoteGenerationSettingsResponse$ === "object");
assert(typeof CreateDatasetInput$ === "object");
assert(typeof CreateDatasetOutput$ === "object");
assert(typeof CreateDomainInput$ === "object");
assert(typeof CreateDomainOutput$ === "object");
assert(typeof CreateSubscriptionInput$ === "object");
assert(typeof CreateSubscriptionOutput$ === "object");
assert(typeof CreateWebAppConfiguration$ === "object");
assert(typeof CustomTemplate$ === "object");
assert(typeof CustomTemplateResponse$ === "object");
assert(typeof DatasetArtifacts$ === "object");
assert(typeof DatasetConfig$ === "object");
assert(typeof DatasetSummary$ === "object");
assert(typeof DeactivateSubscriptionInput$ === "object");
assert(typeof DeactivateSubscriptionOutput$ === "object");
assert(typeof DeleteDatasetInput$ === "object");
assert(typeof DeleteDatasetOutput$ === "object");
assert(typeof DeleteDomainInput$ === "object");
assert(typeof DeleteDomainOutput$ === "object");
assert(typeof DomainSummary$ === "object");
assert(typeof EncounterContext$ === "object");
assert(typeof EncryptionContext$ === "object");
assert(typeof FHIRServer$ === "object");
assert(typeof GetDatasetInput$ === "object");
assert(typeof GetDatasetOutput$ === "object");
assert(typeof GetDomainInput$ === "object");
assert(typeof GetDomainOutput$ === "object");
assert(typeof GetMedicalCodingJobRequest$ === "object");
assert(typeof GetMedicalCodingJobResponse$ === "object");
assert(typeof GetMedicalScribeListeningSessionInput$ === "object");
assert(typeof GetMedicalScribeListeningSessionOutput$ === "object");
assert(typeof GetPatientInsightsJobRequest$ === "object");
assert(typeof GetPatientInsightsJobResponse$ === "object");
assert(typeof GetSubscriptionInput$ === "object");
assert(typeof GetSubscriptionOutput$ === "object");
assert(typeof InputDataConfig$ === "object");
assert(typeof InsightsContext$ === "object");
assert(typeof InsightsOutput$ === "object");
assert(typeof ListDatasetsInput$ === "object");
assert(typeof ListDatasetsOutput$ === "object");
assert(typeof ListDomainsInput$ === "object");
assert(typeof ListDomainsOutput$ === "object");
assert(typeof ListSubscriptionsInput$ === "object");
assert(typeof ListSubscriptionsOutput$ === "object");
assert(typeof ListTagsForResourceInput$ === "object");
assert(typeof ListTagsForResourceOutput$ === "object");
assert(typeof ManagedTemplate$ === "object");
assert(typeof ManagedTemplateResponse$ === "object");
assert(typeof MedicalCodeGenerationResult$ === "object");
assert(typeof MedicalCodeGenerationSettings$ === "object");
assert(typeof MedicalCodeGenerationSettingsResponse$ === "object");
assert(typeof MedicalCodesEncounterContext$ === "object");
assert(typeof MedicalCodesPatientContext$ === "object");
assert(typeof MedicalCodingContext$ === "object");
assert(typeof MedicalCodingDatasetArtifacts$ === "object");
assert(typeof MedicalCodingDatasetConfig$ === "object");
assert(typeof MedicalCodingOutput$ === "object");
assert(typeof MedicalCodingOutputDataConfig$ === "object");
assert(typeof MedicalScribeAudioEvent$ === "object");
assert(typeof MedicalScribeBinaryAudioEvent$ === "object");
assert(typeof MedicalScribeChannelDefinition$ === "object");
assert(typeof MedicalScribeChecklistEvent$ === "object");
assert(typeof MedicalScribeConfigurationEvent$ === "object");
assert(typeof MedicalScribeInputStream$ === "object");
assert(typeof MedicalScribeListeningSessionDetails$ === "object");
assert(typeof MedicalScribeOutputStream$ === "object");
assert(typeof MedicalScribePeriodontalChartEvent$ === "object");
assert(typeof MedicalScribePostStreamActionSettings$ === "object");
assert(typeof MedicalScribePostStreamActionSettingsResponse$ === "object");
assert(typeof MedicalScribePostStreamActionsResult$ === "object");
assert(typeof MedicalScribeSessionControlEvent$ === "object");
assert(typeof MedicalScribeTranscriptEvent$ === "object");
assert(typeof MedicalScribeTranscriptSegment$ === "object");
assert(typeof NoteTemplateSettings$ === "object");
assert(typeof NoteTemplateSettingsResponse$ === "object");
assert(typeof OutputDataConfig$ === "object");
assert(typeof PatientInsightsEncounterContext$ === "object");
assert(typeof PatientInsightsPatientContext$ === "object");
assert(typeof PeriodontalReview$ === "object");
assert(typeof PeriodontalSite$ === "object");
assert(typeof PeriodontalTooth$ === "object");
assert(typeof S3Source$ === "object");
assert(typeof StartMedicalCodingJobRequest$ === "object");
assert(typeof StartMedicalCodingJobResponse$ === "object");
assert(typeof StartMedicalScribeListeningSessionInput$ === "object");
assert(typeof StartMedicalScribeListeningSessionOutput$ === "object");
assert(typeof StartPatientInsightsJobRequest$ === "object");
assert(typeof StartPatientInsightsJobResponse$ === "object");
assert(typeof SubmitFeedbackRequest$ === "object");
assert(typeof SubmitFeedbackResponse$ === "object");
assert(typeof SubscriptionDescription$ === "object");
assert(typeof TagResourceInput$ === "object");
assert(typeof TemplateSectionInstruction$ === "object");
assert(typeof UntagResourceInput$ === "object");
assert(typeof UserContext$ === "object");
assert(typeof WebAppConfiguration$ === "object");
// enums
assert(typeof ChecklistItemStatus === "object");
assert(typeof CustomTemplateBase === "object");
assert(typeof DatasetStatus === "object");
assert(typeof DatasetType === "object");
assert(typeof DomainStatus === "object");
assert(typeof EncounterType === "object");
assert(typeof EncryptionType === "object");
assert(typeof FeedbackArtifactType === "object");
assert(typeof InsightsType === "object");
assert(typeof JobStatus === "object");
assert(typeof ManagedNoteTemplate === "object");
assert(typeof MedicalScribeLanguageCode === "object");
assert(typeof MedicalScribeMediaEncoding === "object");
assert(typeof MedicalScribeParticipantRole === "object");
assert(typeof MedicalScribeSessionControlEventType === "object");
assert(typeof MedicalScribeStreamStatus === "object");
assert(typeof PatientStatus === "object");
assert(typeof PeriodontalReviewReason === "object");
assert(typeof PeriodontalSiteName === "object");
assert(typeof PostStreamArtifactGenerationStatus === "object");
assert(typeof Pronouns === "object");
assert(typeof ProviderRole === "object");
assert(typeof Sex === "object");
assert(typeof Specialty === "object");
assert(typeof SubscriptionStatus === "object");
// errors
assert(AccessDeniedException.prototype instanceof ConnectHealthServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof ConnectHealthServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof ConnectHealthServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof ConnectHealthServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof ConnectHealthServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof ConnectHealthServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof ConnectHealthServiceException);
assert(typeof ValidationException$ === "object");
assert(ConnectHealthServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListDatasets === "function");
assert(typeof paginateListDomains === "function");
assert(typeof paginateListSubscriptions === "function");
console.log(`ConnectHealth index test passed.`);
