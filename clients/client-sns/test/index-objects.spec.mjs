import {
  AddPermissionCommand,
  AuthorizationErrorException,
  BatchEntryIdsNotDistinctException,
  BatchRequestTooLongException,
  CheckIfPhoneNumberIsOptedOutCommand,
  ConcurrentAccessException,
  ConfirmSubscriptionCommand,
  CreatePlatformApplicationCommand,
  CreatePlatformEndpointCommand,
  CreateSMSSandboxPhoneNumberCommand,
  CreateTopicCommand,
  DeleteEndpointCommand,
  DeletePlatformApplicationCommand,
  DeleteSMSSandboxPhoneNumberCommand,
  DeleteTopicCommand,
  EmptyBatchRequestException,
  EndpointDisabledException,
  FilterPolicyLimitExceededException,
  GetDataProtectionPolicyCommand,
  GetEndpointAttributesCommand,
  GetPlatformApplicationAttributesCommand,
  GetSMSAttributesCommand,
  GetSMSSandboxAccountStatusCommand,
  GetSubscriptionAttributesCommand,
  GetTopicAttributesCommand,
  InternalErrorException,
  InvalidBatchEntryIdException,
  InvalidParameterException,
  InvalidParameterValueException,
  InvalidSecurityException,
  InvalidStateException,
  KMSAccessDeniedException,
  KMSDisabledException,
  KMSInvalidStateException,
  KMSNotFoundException,
  KMSOptInRequired,
  KMSThrottlingException,
  LanguageCodeString,
  ListEndpointsByPlatformApplicationCommand,
  ListOriginationNumbersCommand,
  ListPhoneNumbersOptedOutCommand,
  ListPlatformApplicationsCommand,
  ListSMSSandboxPhoneNumbersCommand,
  ListSubscriptionsByTopicCommand,
  ListSubscriptionsCommand,
  ListTagsForResourceCommand,
  ListTopicsCommand,
  NotFoundException,
  NumberCapability,
  OptInPhoneNumberCommand,
  OptedOutException,
  PlatformApplicationDisabledException,
  PublishBatchCommand,
  PublishCommand,
  PutDataProtectionPolicyCommand,
  RemovePermissionCommand,
  ReplayLimitExceededException,
  ResourceNotFoundException,
  RouteType,
  SMSSandboxPhoneNumberVerificationStatus,
  SNS,
  SNSClient,
  SNSServiceException,
  SetEndpointAttributesCommand,
  SetPlatformApplicationAttributesCommand,
  SetSMSAttributesCommand,
  SetSubscriptionAttributesCommand,
  SetTopicAttributesCommand,
  StaleTagException,
  SubscribeCommand,
  SubscriptionLimitExceededException,
  TagLimitExceededException,
  TagPolicyException,
  TagResourceCommand,
  ThrottledException,
  TooManyEntriesInBatchRequestException,
  TopicLimitExceededException,
  UnsubscribeCommand,
  UntagResourceCommand,
  UserErrorException,
  ValidationException,
  VerificationException,
  VerifySMSSandboxPhoneNumberCommand,
  paginateListEndpointsByPlatformApplication,
  paginateListOriginationNumbers,
  paginateListPhoneNumbersOptedOut,
  paginateListPlatformApplications,
  paginateListSMSSandboxPhoneNumbers,
  paginateListSubscriptions,
  paginateListSubscriptionsByTopic,
  paginateListTopics,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof SNSClient === "function");
assert(typeof SNS === "function");
// commands
assert(typeof AddPermissionCommand === "function");
assert(typeof CheckIfPhoneNumberIsOptedOutCommand === "function");
assert(typeof ConfirmSubscriptionCommand === "function");
assert(typeof CreatePlatformApplicationCommand === "function");
assert(typeof CreatePlatformEndpointCommand === "function");
assert(typeof CreateSMSSandboxPhoneNumberCommand === "function");
assert(typeof CreateTopicCommand === "function");
assert(typeof DeleteEndpointCommand === "function");
assert(typeof DeletePlatformApplicationCommand === "function");
assert(typeof DeleteSMSSandboxPhoneNumberCommand === "function");
assert(typeof DeleteTopicCommand === "function");
assert(typeof GetDataProtectionPolicyCommand === "function");
assert(typeof GetEndpointAttributesCommand === "function");
assert(typeof GetPlatformApplicationAttributesCommand === "function");
assert(typeof GetSMSAttributesCommand === "function");
assert(typeof GetSMSSandboxAccountStatusCommand === "function");
assert(typeof GetSubscriptionAttributesCommand === "function");
assert(typeof GetTopicAttributesCommand === "function");
assert(typeof ListEndpointsByPlatformApplicationCommand === "function");
assert(typeof ListOriginationNumbersCommand === "function");
assert(typeof ListPhoneNumbersOptedOutCommand === "function");
assert(typeof ListPlatformApplicationsCommand === "function");
assert(typeof ListSMSSandboxPhoneNumbersCommand === "function");
assert(typeof ListSubscriptionsCommand === "function");
assert(typeof ListSubscriptionsByTopicCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTopicsCommand === "function");
assert(typeof OptInPhoneNumberCommand === "function");
assert(typeof PublishCommand === "function");
assert(typeof PublishBatchCommand === "function");
assert(typeof PutDataProtectionPolicyCommand === "function");
assert(typeof RemovePermissionCommand === "function");
assert(typeof SetEndpointAttributesCommand === "function");
assert(typeof SetPlatformApplicationAttributesCommand === "function");
assert(typeof SetSMSAttributesCommand === "function");
assert(typeof SetSubscriptionAttributesCommand === "function");
assert(typeof SetTopicAttributesCommand === "function");
assert(typeof SubscribeCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UnsubscribeCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof VerifySMSSandboxPhoneNumberCommand === "function");
// enums
assert(typeof LanguageCodeString === "object");
assert(typeof NumberCapability === "object");
assert(typeof RouteType === "object");
assert(typeof SMSSandboxPhoneNumberVerificationStatus === "object");
// errors
assert(AuthorizationErrorException.prototype instanceof SNSServiceException);
assert(BatchEntryIdsNotDistinctException.prototype instanceof SNSServiceException);
assert(BatchRequestTooLongException.prototype instanceof SNSServiceException);
assert(ConcurrentAccessException.prototype instanceof SNSServiceException);
assert(EmptyBatchRequestException.prototype instanceof SNSServiceException);
assert(EndpointDisabledException.prototype instanceof SNSServiceException);
assert(FilterPolicyLimitExceededException.prototype instanceof SNSServiceException);
assert(InternalErrorException.prototype instanceof SNSServiceException);
assert(InvalidBatchEntryIdException.prototype instanceof SNSServiceException);
assert(InvalidParameterException.prototype instanceof SNSServiceException);
assert(InvalidParameterValueException.prototype instanceof SNSServiceException);
assert(InvalidSecurityException.prototype instanceof SNSServiceException);
assert(InvalidStateException.prototype instanceof SNSServiceException);
assert(KMSAccessDeniedException.prototype instanceof SNSServiceException);
assert(KMSDisabledException.prototype instanceof SNSServiceException);
assert(KMSInvalidStateException.prototype instanceof SNSServiceException);
assert(KMSNotFoundException.prototype instanceof SNSServiceException);
assert(KMSOptInRequired.prototype instanceof SNSServiceException);
assert(KMSThrottlingException.prototype instanceof SNSServiceException);
assert(NotFoundException.prototype instanceof SNSServiceException);
assert(OptedOutException.prototype instanceof SNSServiceException);
assert(PlatformApplicationDisabledException.prototype instanceof SNSServiceException);
assert(ReplayLimitExceededException.prototype instanceof SNSServiceException);
assert(ResourceNotFoundException.prototype instanceof SNSServiceException);
assert(StaleTagException.prototype instanceof SNSServiceException);
assert(SubscriptionLimitExceededException.prototype instanceof SNSServiceException);
assert(TagLimitExceededException.prototype instanceof SNSServiceException);
assert(TagPolicyException.prototype instanceof SNSServiceException);
assert(ThrottledException.prototype instanceof SNSServiceException);
assert(TooManyEntriesInBatchRequestException.prototype instanceof SNSServiceException);
assert(TopicLimitExceededException.prototype instanceof SNSServiceException);
assert(UserErrorException.prototype instanceof SNSServiceException);
assert(ValidationException.prototype instanceof SNSServiceException);
assert(VerificationException.prototype instanceof SNSServiceException);
assert(SNSServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListEndpointsByPlatformApplication === "function");
assert(typeof paginateListOriginationNumbers === "function");
assert(typeof paginateListPhoneNumbersOptedOut === "function");
assert(typeof paginateListPlatformApplications === "function");
assert(typeof paginateListSMSSandboxPhoneNumbers === "function");
assert(typeof paginateListSubscriptions === "function");
assert(typeof paginateListSubscriptionsByTopic === "function");
assert(typeof paginateListTopics === "function");
console.log(`SNS index test passed.`);
