import {
  AssociateFraudsterCommand,
  AuthenticationDecision,
  CreateDomainCommand,
  CreateWatchlistCommand,
  DeleteDomainCommand,
  DeleteFraudsterCommand,
  DeleteSpeakerCommand,
  DeleteWatchlistCommand,
  DescribeDomainCommand,
  DescribeFraudsterCommand,
  DescribeFraudsterRegistrationJobCommand,
  DescribeSpeakerCommand,
  DescribeSpeakerEnrollmentJobCommand,
  DescribeWatchlistCommand,
  DisassociateFraudsterCommand,
  DomainStatus,
  DuplicateRegistrationAction,
  EvaluateSessionCommand,
  ExistingEnrollmentAction,
  FraudDetectionAction,
  FraudDetectionDecision,
  FraudDetectionReason,
  FraudsterRegistrationJobStatus,
  ListDomainsCommand,
  ListFraudsterRegistrationJobsCommand,
  ListFraudstersCommand,
  ListSpeakerEnrollmentJobsCommand,
  ListSpeakersCommand,
  ListTagsForResourceCommand,
  ListWatchlistsCommand,
  OptOutSpeakerCommand,
  ServerSideEncryptionUpdateStatus,
  SpeakerEnrollmentJobStatus,
  SpeakerStatus,
  StartFraudsterRegistrationJobCommand,
  StartSpeakerEnrollmentJobCommand,
  StreamingStatus,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateDomainCommand,
  UpdateWatchlistCommand,
  VoiceID,
  VoiceIDClient,
  VoiceIDServiceException,
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
assert(typeof CreateDomainCommand === "function");
assert(typeof CreateWatchlistCommand === "function");
assert(typeof DeleteDomainCommand === "function");
assert(typeof DeleteFraudsterCommand === "function");
assert(typeof DeleteSpeakerCommand === "function");
assert(typeof DeleteWatchlistCommand === "function");
assert(typeof DescribeDomainCommand === "function");
assert(typeof DescribeFraudsterCommand === "function");
assert(typeof DescribeFraudsterRegistrationJobCommand === "function");
assert(typeof DescribeSpeakerCommand === "function");
assert(typeof DescribeSpeakerEnrollmentJobCommand === "function");
assert(typeof DescribeWatchlistCommand === "function");
assert(typeof DisassociateFraudsterCommand === "function");
assert(typeof EvaluateSessionCommand === "function");
assert(typeof ListDomainsCommand === "function");
assert(typeof ListFraudsterRegistrationJobsCommand === "function");
assert(typeof ListFraudstersCommand === "function");
assert(typeof ListSpeakerEnrollmentJobsCommand === "function");
assert(typeof ListSpeakersCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListWatchlistsCommand === "function");
assert(typeof OptOutSpeakerCommand === "function");
assert(typeof StartFraudsterRegistrationJobCommand === "function");
assert(typeof StartSpeakerEnrollmentJobCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateDomainCommand === "function");
assert(typeof UpdateWatchlistCommand === "function");
// enums
assert(typeof AuthenticationDecision === "object");
assert(typeof DomainStatus === "object");
assert(typeof DuplicateRegistrationAction === "object");
assert(typeof ExistingEnrollmentAction === "object");
assert(typeof FraudDetectionAction === "object");
assert(typeof FraudDetectionDecision === "object");
assert(typeof FraudDetectionReason === "object");
assert(typeof FraudsterRegistrationJobStatus === "object");
assert(typeof ServerSideEncryptionUpdateStatus === "object");
assert(typeof SpeakerEnrollmentJobStatus === "object");
assert(typeof SpeakerStatus === "object");
assert(typeof StreamingStatus === "object");
// errors
assert(VoiceIDServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListDomains === "function");
assert(typeof paginateListFraudsterRegistrationJobs === "function");
assert(typeof paginateListFraudsters === "function");
assert(typeof paginateListSpeakerEnrollmentJobs === "function");
assert(typeof paginateListSpeakers === "function");
assert(typeof paginateListWatchlists === "function");
console.log(`VoiceID index test passed.`);
