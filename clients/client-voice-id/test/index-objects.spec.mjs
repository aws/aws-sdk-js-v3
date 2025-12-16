import {
  AccessDeniedException,
  AccessDeniedException$,
  AssociateFraudster$,
  AssociateFraudsterCommand,
  AssociateFraudsterRequest$,
  AssociateFraudsterResponse$,
  AuthenticationConfiguration$,
  AuthenticationDecision,
  AuthenticationResult$,
  ConflictException,
  ConflictException$,
  ConflictType,
  CreateDomain$,
  CreateDomainCommand,
  CreateDomainRequest$,
  CreateDomainResponse$,
  CreateWatchlist$,
  CreateWatchlistCommand,
  CreateWatchlistRequest$,
  CreateWatchlistResponse$,
  DeleteDomain$,
  DeleteDomainCommand,
  DeleteDomainRequest$,
  DeleteFraudster$,
  DeleteFraudsterCommand,
  DeleteFraudsterRequest$,
  DeleteSpeaker$,
  DeleteSpeakerCommand,
  DeleteSpeakerRequest$,
  DeleteWatchlist$,
  DeleteWatchlistCommand,
  DeleteWatchlistRequest$,
  DescribeDomain$,
  DescribeDomainCommand,
  DescribeDomainRequest$,
  DescribeDomainResponse$,
  DescribeFraudster$,
  DescribeFraudsterCommand,
  DescribeFraudsterRegistrationJob$,
  DescribeFraudsterRegistrationJobCommand,
  DescribeFraudsterRegistrationJobRequest$,
  DescribeFraudsterRegistrationJobResponse$,
  DescribeFraudsterRequest$,
  DescribeFraudsterResponse$,
  DescribeSpeaker$,
  DescribeSpeakerCommand,
  DescribeSpeakerEnrollmentJob$,
  DescribeSpeakerEnrollmentJobCommand,
  DescribeSpeakerEnrollmentJobRequest$,
  DescribeSpeakerEnrollmentJobResponse$,
  DescribeSpeakerRequest$,
  DescribeSpeakerResponse$,
  DescribeWatchlist$,
  DescribeWatchlistCommand,
  DescribeWatchlistRequest$,
  DescribeWatchlistResponse$,
  DisassociateFraudster$,
  DisassociateFraudsterCommand,
  DisassociateFraudsterRequest$,
  DisassociateFraudsterResponse$,
  Domain$,
  DomainStatus,
  DomainSummary$,
  DuplicateRegistrationAction,
  EnrollmentConfig$,
  EnrollmentJobFraudDetectionConfig$,
  EvaluateSession$,
  EvaluateSessionCommand,
  EvaluateSessionRequest$,
  EvaluateSessionResponse$,
  ExistingEnrollmentAction,
  FailureDetails$,
  FraudDetectionAction,
  FraudDetectionConfiguration$,
  FraudDetectionDecision,
  FraudDetectionReason,
  FraudDetectionResult$,
  FraudRiskDetails$,
  Fraudster$,
  FraudsterRegistrationJob$,
  FraudsterRegistrationJobStatus,
  FraudsterRegistrationJobSummary$,
  FraudsterSummary$,
  InputDataConfig$,
  InternalServerException,
  InternalServerException$,
  JobProgress$,
  KnownFraudsterRisk$,
  ListDomains$,
  ListDomainsCommand,
  ListDomainsRequest$,
  ListDomainsResponse$,
  ListFraudsterRegistrationJobs$,
  ListFraudsterRegistrationJobsCommand,
  ListFraudsterRegistrationJobsRequest$,
  ListFraudsterRegistrationJobsResponse$,
  ListFraudsters$,
  ListFraudstersCommand,
  ListFraudstersRequest$,
  ListFraudstersResponse$,
  ListSpeakerEnrollmentJobs$,
  ListSpeakerEnrollmentJobsCommand,
  ListSpeakerEnrollmentJobsRequest$,
  ListSpeakerEnrollmentJobsResponse$,
  ListSpeakers$,
  ListSpeakersCommand,
  ListSpeakersRequest$,
  ListSpeakersResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  ListWatchlists$,
  ListWatchlistsCommand,
  ListWatchlistsRequest$,
  ListWatchlistsResponse$,
  OptOutSpeaker$,
  OptOutSpeakerCommand,
  OptOutSpeakerRequest$,
  OptOutSpeakerResponse$,
  OutputDataConfig$,
  RegistrationConfig$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourceType,
  ServerSideEncryptionConfiguration$,
  ServerSideEncryptionUpdateDetails$,
  ServerSideEncryptionUpdateStatus,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  Speaker$,
  SpeakerEnrollmentJob$,
  SpeakerEnrollmentJobStatus,
  SpeakerEnrollmentJobSummary$,
  SpeakerStatus,
  SpeakerSummary$,
  StartFraudsterRegistrationJob$,
  StartFraudsterRegistrationJobCommand,
  StartFraudsterRegistrationJobRequest$,
  StartFraudsterRegistrationJobResponse$,
  StartSpeakerEnrollmentJob$,
  StartSpeakerEnrollmentJobCommand,
  StartSpeakerEnrollmentJobRequest$,
  StartSpeakerEnrollmentJobResponse$,
  StreamingStatus,
  Tag$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  ThrottlingException,
  ThrottlingException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateDomain$,
  UpdateDomainCommand,
  UpdateDomainRequest$,
  UpdateDomainResponse$,
  UpdateWatchlist$,
  UpdateWatchlistCommand,
  UpdateWatchlistRequest$,
  UpdateWatchlistResponse$,
  ValidationException,
  ValidationException$,
  VoiceID,
  VoiceIDClient,
  VoiceIDServiceException,
  VoiceSpoofingRisk$,
  Watchlist$,
  WatchlistDetails$,
  WatchlistSummary$,
  paginateListDomains,
  paginateListFraudsterRegistrationJobs,
  paginateListFraudsters,
  paginateListSpeakerEnrollmentJobs,
  paginateListSpeakers,
  paginateListWatchlists,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof VoiceIDClient === "function");
assert(typeof VoiceID === "function");
// commands
assert(typeof AssociateFraudsterCommand === "function");
assert(typeof AssociateFraudster$ === "object");
assert(typeof CreateDomainCommand === "function");
assert(typeof CreateDomain$ === "object");
assert(typeof CreateWatchlistCommand === "function");
assert(typeof CreateWatchlist$ === "object");
assert(typeof DeleteDomainCommand === "function");
assert(typeof DeleteDomain$ === "object");
assert(typeof DeleteFraudsterCommand === "function");
assert(typeof DeleteFraudster$ === "object");
assert(typeof DeleteSpeakerCommand === "function");
assert(typeof DeleteSpeaker$ === "object");
assert(typeof DeleteWatchlistCommand === "function");
assert(typeof DeleteWatchlist$ === "object");
assert(typeof DescribeDomainCommand === "function");
assert(typeof DescribeDomain$ === "object");
assert(typeof DescribeFraudsterCommand === "function");
assert(typeof DescribeFraudster$ === "object");
assert(typeof DescribeFraudsterRegistrationJobCommand === "function");
assert(typeof DescribeFraudsterRegistrationJob$ === "object");
assert(typeof DescribeSpeakerCommand === "function");
assert(typeof DescribeSpeaker$ === "object");
assert(typeof DescribeSpeakerEnrollmentJobCommand === "function");
assert(typeof DescribeSpeakerEnrollmentJob$ === "object");
assert(typeof DescribeWatchlistCommand === "function");
assert(typeof DescribeWatchlist$ === "object");
assert(typeof DisassociateFraudsterCommand === "function");
assert(typeof DisassociateFraudster$ === "object");
assert(typeof EvaluateSessionCommand === "function");
assert(typeof EvaluateSession$ === "object");
assert(typeof ListDomainsCommand === "function");
assert(typeof ListDomains$ === "object");
assert(typeof ListFraudsterRegistrationJobsCommand === "function");
assert(typeof ListFraudsterRegistrationJobs$ === "object");
assert(typeof ListFraudstersCommand === "function");
assert(typeof ListFraudsters$ === "object");
assert(typeof ListSpeakerEnrollmentJobsCommand === "function");
assert(typeof ListSpeakerEnrollmentJobs$ === "object");
assert(typeof ListSpeakersCommand === "function");
assert(typeof ListSpeakers$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ListWatchlistsCommand === "function");
assert(typeof ListWatchlists$ === "object");
assert(typeof OptOutSpeakerCommand === "function");
assert(typeof OptOutSpeaker$ === "object");
assert(typeof StartFraudsterRegistrationJobCommand === "function");
assert(typeof StartFraudsterRegistrationJob$ === "object");
assert(typeof StartSpeakerEnrollmentJobCommand === "function");
assert(typeof StartSpeakerEnrollmentJob$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateDomainCommand === "function");
assert(typeof UpdateDomain$ === "object");
assert(typeof UpdateWatchlistCommand === "function");
assert(typeof UpdateWatchlist$ === "object");
// structural schemas
assert(typeof AssociateFraudsterRequest$ === "object");
assert(typeof AssociateFraudsterResponse$ === "object");
assert(typeof AuthenticationConfiguration$ === "object");
assert(typeof AuthenticationResult$ === "object");
assert(typeof CreateDomainRequest$ === "object");
assert(typeof CreateDomainResponse$ === "object");
assert(typeof CreateWatchlistRequest$ === "object");
assert(typeof CreateWatchlistResponse$ === "object");
assert(typeof DeleteDomainRequest$ === "object");
assert(typeof DeleteFraudsterRequest$ === "object");
assert(typeof DeleteSpeakerRequest$ === "object");
assert(typeof DeleteWatchlistRequest$ === "object");
assert(typeof DescribeDomainRequest$ === "object");
assert(typeof DescribeDomainResponse$ === "object");
assert(typeof DescribeFraudsterRegistrationJobRequest$ === "object");
assert(typeof DescribeFraudsterRegistrationJobResponse$ === "object");
assert(typeof DescribeFraudsterRequest$ === "object");
assert(typeof DescribeFraudsterResponse$ === "object");
assert(typeof DescribeSpeakerEnrollmentJobRequest$ === "object");
assert(typeof DescribeSpeakerEnrollmentJobResponse$ === "object");
assert(typeof DescribeSpeakerRequest$ === "object");
assert(typeof DescribeSpeakerResponse$ === "object");
assert(typeof DescribeWatchlistRequest$ === "object");
assert(typeof DescribeWatchlistResponse$ === "object");
assert(typeof DisassociateFraudsterRequest$ === "object");
assert(typeof DisassociateFraudsterResponse$ === "object");
assert(typeof Domain$ === "object");
assert(typeof DomainSummary$ === "object");
assert(typeof EnrollmentConfig$ === "object");
assert(typeof EnrollmentJobFraudDetectionConfig$ === "object");
assert(typeof EvaluateSessionRequest$ === "object");
assert(typeof EvaluateSessionResponse$ === "object");
assert(typeof FailureDetails$ === "object");
assert(typeof FraudDetectionConfiguration$ === "object");
assert(typeof FraudDetectionResult$ === "object");
assert(typeof FraudRiskDetails$ === "object");
assert(typeof Fraudster$ === "object");
assert(typeof FraudsterRegistrationJob$ === "object");
assert(typeof FraudsterRegistrationJobSummary$ === "object");
assert(typeof FraudsterSummary$ === "object");
assert(typeof InputDataConfig$ === "object");
assert(typeof JobProgress$ === "object");
assert(typeof KnownFraudsterRisk$ === "object");
assert(typeof ListDomainsRequest$ === "object");
assert(typeof ListDomainsResponse$ === "object");
assert(typeof ListFraudsterRegistrationJobsRequest$ === "object");
assert(typeof ListFraudsterRegistrationJobsResponse$ === "object");
assert(typeof ListFraudstersRequest$ === "object");
assert(typeof ListFraudstersResponse$ === "object");
assert(typeof ListSpeakerEnrollmentJobsRequest$ === "object");
assert(typeof ListSpeakerEnrollmentJobsResponse$ === "object");
assert(typeof ListSpeakersRequest$ === "object");
assert(typeof ListSpeakersResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof ListWatchlistsRequest$ === "object");
assert(typeof ListWatchlistsResponse$ === "object");
assert(typeof OptOutSpeakerRequest$ === "object");
assert(typeof OptOutSpeakerResponse$ === "object");
assert(typeof OutputDataConfig$ === "object");
assert(typeof RegistrationConfig$ === "object");
assert(typeof ServerSideEncryptionConfiguration$ === "object");
assert(typeof ServerSideEncryptionUpdateDetails$ === "object");
assert(typeof Speaker$ === "object");
assert(typeof SpeakerEnrollmentJob$ === "object");
assert(typeof SpeakerEnrollmentJobSummary$ === "object");
assert(typeof SpeakerSummary$ === "object");
assert(typeof StartFraudsterRegistrationJobRequest$ === "object");
assert(typeof StartFraudsterRegistrationJobResponse$ === "object");
assert(typeof StartSpeakerEnrollmentJobRequest$ === "object");
assert(typeof StartSpeakerEnrollmentJobResponse$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateDomainRequest$ === "object");
assert(typeof UpdateDomainResponse$ === "object");
assert(typeof UpdateWatchlistRequest$ === "object");
assert(typeof UpdateWatchlistResponse$ === "object");
assert(typeof VoiceSpoofingRisk$ === "object");
assert(typeof Watchlist$ === "object");
assert(typeof WatchlistDetails$ === "object");
assert(typeof WatchlistSummary$ === "object");
// enums
assert(typeof AuthenticationDecision === "object");
assert(typeof ConflictType === "object");
assert(typeof DomainStatus === "object");
assert(typeof DuplicateRegistrationAction === "object");
assert(typeof ExistingEnrollmentAction === "object");
assert(typeof FraudDetectionAction === "object");
assert(typeof FraudDetectionDecision === "object");
assert(typeof FraudDetectionReason === "object");
assert(typeof FraudsterRegistrationJobStatus === "object");
assert(typeof ResourceType === "object");
assert(typeof ServerSideEncryptionUpdateStatus === "object");
assert(typeof SpeakerEnrollmentJobStatus === "object");
assert(typeof SpeakerStatus === "object");
assert(typeof StreamingStatus === "object");
// errors
assert(AccessDeniedException.prototype instanceof VoiceIDServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof VoiceIDServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof VoiceIDServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof VoiceIDServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof VoiceIDServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof VoiceIDServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof VoiceIDServiceException);
assert(typeof ValidationException$ === "object");
assert(VoiceIDServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListDomains === "function");
assert(typeof paginateListFraudsterRegistrationJobs === "function");
assert(typeof paginateListFraudsters === "function");
assert(typeof paginateListSpeakerEnrollmentJobs === "function");
assert(typeof paginateListSpeakers === "function");
assert(typeof paginateListWatchlists === "function");
console.log(`VoiceID index test passed.`);
