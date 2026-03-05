import {
  AccessDeniedException,
  AccessDeniedException$,
  ActivateSubscription$,
  ActivateSubscriptionCommand,
  ActivateSubscriptionInput$,
  ActivateSubscriptionOutput$,
  ArtifactDetails$,
  ClinicalNoteGenerationResult$,
  ClinicalNoteGenerationSettings$,
  ClinicalNoteGenerationSettingsResponse$,
  ConflictException,
  ConflictException$,
  ConnectHealth,
  ConnectHealthClient,
  ConnectHealthServiceException,
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
  DeactivateSubscription$,
  DeactivateSubscriptionCommand,
  DeactivateSubscriptionInput$,
  DeactivateSubscriptionOutput$,
  DeleteDomain$,
  DeleteDomainCommand,
  DeleteDomainInput$,
  DeleteDomainOutput$,
  DomainStatus,
  DomainSummary$,
  EncounterContext$,
  EncryptionContext$,
  EncryptionType,
  FHIRServer$,
  GetDomain$,
  GetDomainCommand,
  GetDomainInput$,
  GetDomainOutput$,
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
  MedicalScribeAudioEvent$,
  MedicalScribeChannelDefinition$,
  MedicalScribeConfigurationEvent$,
  MedicalScribeInputStream$,
  MedicalScribeLanguageCode,
  MedicalScribeListeningSessionDetails$,
  MedicalScribeMediaEncoding,
  MedicalScribeOutputStream$,
  MedicalScribeParticipantRole,
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
  paginateListDomains,
  paginateListSubscriptions,
  PatientInsightsEncounterContext$,
  PatientInsightsPatientContext$,
  PostStreamArtifactGenerationStatus,
  Pronouns,
  ProviderRole,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  S3Source$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  Specialty,
  StartMedicalScribeListeningSession$,
  StartMedicalScribeListeningSessionCommand,
  StartMedicalScribeListeningSessionInput$,
  StartMedicalScribeListeningSessionOutput$,
  StartPatientInsightsJob$,
  StartPatientInsightsJobCommand,
  StartPatientInsightsJobRequest$,
  StartPatientInsightsJobResponse$,
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
assert(typeof CreateDomainCommand === "function");
assert(typeof CreateDomain$ === "object");
assert(typeof CreateSubscriptionCommand === "function");
assert(typeof CreateSubscription$ === "object");
assert(typeof DeactivateSubscriptionCommand === "function");
assert(typeof DeactivateSubscription$ === "object");
assert(typeof DeleteDomainCommand === "function");
assert(typeof DeleteDomain$ === "object");
assert(typeof GetDomainCommand === "function");
assert(typeof GetDomain$ === "object");
assert(typeof GetMedicalScribeListeningSessionCommand === "function");
assert(typeof GetMedicalScribeListeningSession$ === "object");
assert(typeof GetPatientInsightsJobCommand === "function");
assert(typeof GetPatientInsightsJob$ === "object");
assert(typeof GetSubscriptionCommand === "function");
assert(typeof GetSubscription$ === "object");
assert(typeof ListDomainsCommand === "function");
assert(typeof ListDomains$ === "object");
assert(typeof ListSubscriptionsCommand === "function");
assert(typeof ListSubscriptions$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof StartMedicalScribeListeningSessionCommand === "function");
assert(typeof StartMedicalScribeListeningSession$ === "object");
assert(typeof StartPatientInsightsJobCommand === "function");
assert(typeof StartPatientInsightsJob$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
// structural schemas
assert(typeof ActivateSubscriptionInput$ === "object");
assert(typeof ActivateSubscriptionOutput$ === "object");
assert(typeof ArtifactDetails$ === "object");
assert(typeof ClinicalNoteGenerationResult$ === "object");
assert(typeof ClinicalNoteGenerationSettings$ === "object");
assert(typeof ClinicalNoteGenerationSettingsResponse$ === "object");
assert(typeof CreateDomainInput$ === "object");
assert(typeof CreateDomainOutput$ === "object");
assert(typeof CreateSubscriptionInput$ === "object");
assert(typeof CreateSubscriptionOutput$ === "object");
assert(typeof CreateWebAppConfiguration$ === "object");
assert(typeof CustomTemplate$ === "object");
assert(typeof CustomTemplateResponse$ === "object");
assert(typeof DeactivateSubscriptionInput$ === "object");
assert(typeof DeactivateSubscriptionOutput$ === "object");
assert(typeof DeleteDomainInput$ === "object");
assert(typeof DeleteDomainOutput$ === "object");
assert(typeof DomainSummary$ === "object");
assert(typeof EncounterContext$ === "object");
assert(typeof EncryptionContext$ === "object");
assert(typeof FHIRServer$ === "object");
assert(typeof GetDomainInput$ === "object");
assert(typeof GetDomainOutput$ === "object");
assert(typeof GetMedicalScribeListeningSessionInput$ === "object");
assert(typeof GetMedicalScribeListeningSessionOutput$ === "object");
assert(typeof GetPatientInsightsJobRequest$ === "object");
assert(typeof GetPatientInsightsJobResponse$ === "object");
assert(typeof GetSubscriptionInput$ === "object");
assert(typeof GetSubscriptionOutput$ === "object");
assert(typeof InputDataConfig$ === "object");
assert(typeof InsightsContext$ === "object");
assert(typeof InsightsOutput$ === "object");
assert(typeof ListDomainsInput$ === "object");
assert(typeof ListDomainsOutput$ === "object");
assert(typeof ListSubscriptionsInput$ === "object");
assert(typeof ListSubscriptionsOutput$ === "object");
assert(typeof ListTagsForResourceInput$ === "object");
assert(typeof ListTagsForResourceOutput$ === "object");
assert(typeof ManagedTemplate$ === "object");
assert(typeof ManagedTemplateResponse$ === "object");
assert(typeof MedicalScribeAudioEvent$ === "object");
assert(typeof MedicalScribeChannelDefinition$ === "object");
assert(typeof MedicalScribeConfigurationEvent$ === "object");
assert(typeof MedicalScribeInputStream$ === "object");
assert(typeof MedicalScribeListeningSessionDetails$ === "object");
assert(typeof MedicalScribeOutputStream$ === "object");
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
assert(typeof S3Source$ === "object");
assert(typeof StartMedicalScribeListeningSessionInput$ === "object");
assert(typeof StartMedicalScribeListeningSessionOutput$ === "object");
assert(typeof StartPatientInsightsJobRequest$ === "object");
assert(typeof StartPatientInsightsJobResponse$ === "object");
assert(typeof SubscriptionDescription$ === "object");
assert(typeof TagResourceInput$ === "object");
assert(typeof TemplateSectionInstruction$ === "object");
assert(typeof UntagResourceInput$ === "object");
assert(typeof UserContext$ === "object");
assert(typeof WebAppConfiguration$ === "object");
// enums
assert(typeof CustomTemplateBase === "object");
assert(typeof DomainStatus === "object");
assert(typeof EncryptionType === "object");
assert(typeof InsightsType === "object");
assert(typeof JobStatus === "object");
assert(typeof ManagedNoteTemplate === "object");
assert(typeof MedicalScribeLanguageCode === "object");
assert(typeof MedicalScribeMediaEncoding === "object");
assert(typeof MedicalScribeParticipantRole === "object");
assert(typeof MedicalScribeSessionControlEventType === "object");
assert(typeof MedicalScribeStreamStatus === "object");
assert(typeof PostStreamArtifactGenerationStatus === "object");
assert(typeof Pronouns === "object");
assert(typeof ProviderRole === "object");
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
assert(typeof paginateListDomains === "function");
assert(typeof paginateListSubscriptions === "function");
console.log(`ConnectHealth index test passed.`);
