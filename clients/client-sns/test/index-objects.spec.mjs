import {
  AddPermission$,
  AddPermissionCommand,
  AddPermissionInput$,
  AuthorizationErrorException,
  AuthorizationErrorException$,
  BatchEntryIdsNotDistinctException,
  BatchEntryIdsNotDistinctException$,
  BatchRequestTooLongException,
  BatchRequestTooLongException$,
  BatchResultErrorEntry$,
  CheckIfPhoneNumberIsOptedOut$,
  CheckIfPhoneNumberIsOptedOutCommand,
  CheckIfPhoneNumberIsOptedOutInput$,
  CheckIfPhoneNumberIsOptedOutResponse$,
  ConcurrentAccessException,
  ConcurrentAccessException$,
  ConfirmSubscription$,
  ConfirmSubscriptionCommand,
  ConfirmSubscriptionInput$,
  ConfirmSubscriptionResponse$,
  CreateEndpointResponse$,
  CreatePlatformApplication$,
  CreatePlatformApplicationCommand,
  CreatePlatformApplicationInput$,
  CreatePlatformApplicationResponse$,
  CreatePlatformEndpoint$,
  CreatePlatformEndpointCommand,
  CreatePlatformEndpointInput$,
  CreateSMSSandboxPhoneNumber$,
  CreateSMSSandboxPhoneNumberCommand,
  CreateSMSSandboxPhoneNumberInput$,
  CreateSMSSandboxPhoneNumberResult$,
  CreateTopic$,
  CreateTopicCommand,
  CreateTopicInput$,
  CreateTopicResponse$,
  DeleteEndpoint$,
  DeleteEndpointCommand,
  DeleteEndpointInput$,
  DeletePlatformApplication$,
  DeletePlatformApplicationCommand,
  DeletePlatformApplicationInput$,
  DeleteSMSSandboxPhoneNumber$,
  DeleteSMSSandboxPhoneNumberCommand,
  DeleteSMSSandboxPhoneNumberInput$,
  DeleteSMSSandboxPhoneNumberResult$,
  DeleteTopic$,
  DeleteTopicCommand,
  DeleteTopicInput$,
  EmptyBatchRequestException,
  EmptyBatchRequestException$,
  Endpoint$,
  EndpointDisabledException,
  EndpointDisabledException$,
  FilterPolicyLimitExceededException,
  FilterPolicyLimitExceededException$,
  GetDataProtectionPolicy$,
  GetDataProtectionPolicyCommand,
  GetDataProtectionPolicyInput$,
  GetDataProtectionPolicyResponse$,
  GetEndpointAttributes$,
  GetEndpointAttributesCommand,
  GetEndpointAttributesInput$,
  GetEndpointAttributesResponse$,
  GetPlatformApplicationAttributes$,
  GetPlatformApplicationAttributesCommand,
  GetPlatformApplicationAttributesInput$,
  GetPlatformApplicationAttributesResponse$,
  GetSMSAttributes$,
  GetSMSAttributesCommand,
  GetSMSAttributesInput$,
  GetSMSAttributesResponse$,
  GetSMSSandboxAccountStatus$,
  GetSMSSandboxAccountStatusCommand,
  GetSMSSandboxAccountStatusInput$,
  GetSMSSandboxAccountStatusResult$,
  GetSubscriptionAttributes$,
  GetSubscriptionAttributesCommand,
  GetSubscriptionAttributesInput$,
  GetSubscriptionAttributesResponse$,
  GetTopicAttributes$,
  GetTopicAttributesCommand,
  GetTopicAttributesInput$,
  GetTopicAttributesResponse$,
  InternalErrorException,
  InternalErrorException$,
  InvalidBatchEntryIdException,
  InvalidBatchEntryIdException$,
  InvalidParameterException,
  InvalidParameterException$,
  InvalidParameterValueException,
  InvalidParameterValueException$,
  InvalidSecurityException,
  InvalidSecurityException$,
  InvalidStateException,
  InvalidStateException$,
  KMSAccessDeniedException,
  KMSAccessDeniedException$,
  KMSDisabledException,
  KMSDisabledException$,
  KMSInvalidStateException,
  KMSInvalidStateException$,
  KMSNotFoundException,
  KMSNotFoundException$,
  KMSOptInRequired,
  KMSOptInRequired$,
  KMSThrottlingException,
  KMSThrottlingException$,
  LanguageCodeString,
  ListEndpointsByPlatformApplication$,
  ListEndpointsByPlatformApplicationCommand,
  ListEndpointsByPlatformApplicationInput$,
  ListEndpointsByPlatformApplicationResponse$,
  ListOriginationNumbers$,
  ListOriginationNumbersCommand,
  ListOriginationNumbersRequest$,
  ListOriginationNumbersResult$,
  ListPhoneNumbersOptedOut$,
  ListPhoneNumbersOptedOutCommand,
  ListPhoneNumbersOptedOutInput$,
  ListPhoneNumbersOptedOutResponse$,
  ListPlatformApplications$,
  ListPlatformApplicationsCommand,
  ListPlatformApplicationsInput$,
  ListPlatformApplicationsResponse$,
  ListSMSSandboxPhoneNumbers$,
  ListSMSSandboxPhoneNumbersCommand,
  ListSMSSandboxPhoneNumbersInput$,
  ListSMSSandboxPhoneNumbersResult$,
  ListSubscriptions$,
  ListSubscriptionsByTopic$,
  ListSubscriptionsByTopicCommand,
  ListSubscriptionsByTopicInput$,
  ListSubscriptionsByTopicResponse$,
  ListSubscriptionsCommand,
  ListSubscriptionsInput$,
  ListSubscriptionsResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  ListTopics$,
  ListTopicsCommand,
  ListTopicsInput$,
  ListTopicsResponse$,
  MessageAttributeValue$,
  NotFoundException,
  NotFoundException$,
  NumberCapability,
  OptedOutException,
  OptedOutException$,
  OptInPhoneNumber$,
  OptInPhoneNumberCommand,
  OptInPhoneNumberInput$,
  OptInPhoneNumberResponse$,
  paginateListEndpointsByPlatformApplication,
  paginateListOriginationNumbers,
  paginateListPhoneNumbersOptedOut,
  paginateListPlatformApplications,
  paginateListSMSSandboxPhoneNumbers,
  paginateListSubscriptions,
  paginateListSubscriptionsByTopic,
  paginateListTopics,
  PhoneNumberInformation$,
  PlatformApplication$,
  PlatformApplicationDisabledException,
  PlatformApplicationDisabledException$,
  Publish$,
  PublishBatch$,
  PublishBatchCommand,
  PublishBatchInput$,
  PublishBatchRequestEntry$,
  PublishBatchResponse$,
  PublishBatchResultEntry$,
  PublishCommand,
  PublishInput$,
  PublishResponse$,
  PutDataProtectionPolicy$,
  PutDataProtectionPolicyCommand,
  PutDataProtectionPolicyInput$,
  RemovePermission$,
  RemovePermissionCommand,
  RemovePermissionInput$,
  ReplayLimitExceededException,
  ReplayLimitExceededException$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  RouteType,
  SetEndpointAttributes$,
  SetEndpointAttributesCommand,
  SetEndpointAttributesInput$,
  SetPlatformApplicationAttributes$,
  SetPlatformApplicationAttributesCommand,
  SetPlatformApplicationAttributesInput$,
  SetSMSAttributes$,
  SetSMSAttributesCommand,
  SetSMSAttributesInput$,
  SetSMSAttributesResponse$,
  SetSubscriptionAttributes$,
  SetSubscriptionAttributesCommand,
  SetSubscriptionAttributesInput$,
  SetTopicAttributes$,
  SetTopicAttributesCommand,
  SetTopicAttributesInput$,
  SMSSandboxPhoneNumber$,
  SMSSandboxPhoneNumberVerificationStatus,
  SNS,
  SNSClient,
  SNSServiceException,
  StaleTagException,
  StaleTagException$,
  Subscribe$,
  SubscribeCommand,
  SubscribeInput$,
  SubscribeResponse$,
  Subscription$,
  SubscriptionLimitExceededException,
  SubscriptionLimitExceededException$,
  Tag$,
  TagLimitExceededException,
  TagLimitExceededException$,
  TagPolicyException,
  TagPolicyException$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  ThrottledException,
  ThrottledException$,
  TooManyEntriesInBatchRequestException,
  TooManyEntriesInBatchRequestException$,
  Topic$,
  TopicLimitExceededException,
  TopicLimitExceededException$,
  Unsubscribe$,
  UnsubscribeCommand,
  UnsubscribeInput$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UserErrorException,
  UserErrorException$,
  ValidationException,
  ValidationException$,
  VerificationException,
  VerificationException$,
  VerifySMSSandboxPhoneNumber$,
  VerifySMSSandboxPhoneNumberCommand,
  VerifySMSSandboxPhoneNumberInput$,
  VerifySMSSandboxPhoneNumberResult$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof SNSClient === "function");
assert(typeof SNS === "function");
// commands
assert(typeof AddPermissionCommand === "function");
assert(typeof AddPermission$ === "object");
assert(typeof CheckIfPhoneNumberIsOptedOutCommand === "function");
assert(typeof CheckIfPhoneNumberIsOptedOut$ === "object");
assert(typeof ConfirmSubscriptionCommand === "function");
assert(typeof ConfirmSubscription$ === "object");
assert(typeof CreatePlatformApplicationCommand === "function");
assert(typeof CreatePlatformApplication$ === "object");
assert(typeof CreatePlatformEndpointCommand === "function");
assert(typeof CreatePlatformEndpoint$ === "object");
assert(typeof CreateSMSSandboxPhoneNumberCommand === "function");
assert(typeof CreateSMSSandboxPhoneNumber$ === "object");
assert(typeof CreateTopicCommand === "function");
assert(typeof CreateTopic$ === "object");
assert(typeof DeleteEndpointCommand === "function");
assert(typeof DeleteEndpoint$ === "object");
assert(typeof DeletePlatformApplicationCommand === "function");
assert(typeof DeletePlatformApplication$ === "object");
assert(typeof DeleteSMSSandboxPhoneNumberCommand === "function");
assert(typeof DeleteSMSSandboxPhoneNumber$ === "object");
assert(typeof DeleteTopicCommand === "function");
assert(typeof DeleteTopic$ === "object");
assert(typeof GetDataProtectionPolicyCommand === "function");
assert(typeof GetDataProtectionPolicy$ === "object");
assert(typeof GetEndpointAttributesCommand === "function");
assert(typeof GetEndpointAttributes$ === "object");
assert(typeof GetPlatformApplicationAttributesCommand === "function");
assert(typeof GetPlatformApplicationAttributes$ === "object");
assert(typeof GetSMSAttributesCommand === "function");
assert(typeof GetSMSAttributes$ === "object");
assert(typeof GetSMSSandboxAccountStatusCommand === "function");
assert(typeof GetSMSSandboxAccountStatus$ === "object");
assert(typeof GetSubscriptionAttributesCommand === "function");
assert(typeof GetSubscriptionAttributes$ === "object");
assert(typeof GetTopicAttributesCommand === "function");
assert(typeof GetTopicAttributes$ === "object");
assert(typeof ListEndpointsByPlatformApplicationCommand === "function");
assert(typeof ListEndpointsByPlatformApplication$ === "object");
assert(typeof ListOriginationNumbersCommand === "function");
assert(typeof ListOriginationNumbers$ === "object");
assert(typeof ListPhoneNumbersOptedOutCommand === "function");
assert(typeof ListPhoneNumbersOptedOut$ === "object");
assert(typeof ListPlatformApplicationsCommand === "function");
assert(typeof ListPlatformApplications$ === "object");
assert(typeof ListSMSSandboxPhoneNumbersCommand === "function");
assert(typeof ListSMSSandboxPhoneNumbers$ === "object");
assert(typeof ListSubscriptionsCommand === "function");
assert(typeof ListSubscriptions$ === "object");
assert(typeof ListSubscriptionsByTopicCommand === "function");
assert(typeof ListSubscriptionsByTopic$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ListTopicsCommand === "function");
assert(typeof ListTopics$ === "object");
assert(typeof OptInPhoneNumberCommand === "function");
assert(typeof OptInPhoneNumber$ === "object");
assert(typeof PublishCommand === "function");
assert(typeof Publish$ === "object");
assert(typeof PublishBatchCommand === "function");
assert(typeof PublishBatch$ === "object");
assert(typeof PutDataProtectionPolicyCommand === "function");
assert(typeof PutDataProtectionPolicy$ === "object");
assert(typeof RemovePermissionCommand === "function");
assert(typeof RemovePermission$ === "object");
assert(typeof SetEndpointAttributesCommand === "function");
assert(typeof SetEndpointAttributes$ === "object");
assert(typeof SetPlatformApplicationAttributesCommand === "function");
assert(typeof SetPlatformApplicationAttributes$ === "object");
assert(typeof SetSMSAttributesCommand === "function");
assert(typeof SetSMSAttributes$ === "object");
assert(typeof SetSubscriptionAttributesCommand === "function");
assert(typeof SetSubscriptionAttributes$ === "object");
assert(typeof SetTopicAttributesCommand === "function");
assert(typeof SetTopicAttributes$ === "object");
assert(typeof SubscribeCommand === "function");
assert(typeof Subscribe$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UnsubscribeCommand === "function");
assert(typeof Unsubscribe$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof VerifySMSSandboxPhoneNumberCommand === "function");
assert(typeof VerifySMSSandboxPhoneNumber$ === "object");
// structural schemas
assert(typeof AddPermissionInput$ === "object");
assert(typeof BatchResultErrorEntry$ === "object");
assert(typeof CheckIfPhoneNumberIsOptedOutInput$ === "object");
assert(typeof CheckIfPhoneNumberIsOptedOutResponse$ === "object");
assert(typeof ConfirmSubscriptionInput$ === "object");
assert(typeof ConfirmSubscriptionResponse$ === "object");
assert(typeof CreateEndpointResponse$ === "object");
assert(typeof CreatePlatformApplicationInput$ === "object");
assert(typeof CreatePlatformApplicationResponse$ === "object");
assert(typeof CreatePlatformEndpointInput$ === "object");
assert(typeof CreateSMSSandboxPhoneNumberInput$ === "object");
assert(typeof CreateSMSSandboxPhoneNumberResult$ === "object");
assert(typeof CreateTopicInput$ === "object");
assert(typeof CreateTopicResponse$ === "object");
assert(typeof DeleteEndpointInput$ === "object");
assert(typeof DeletePlatformApplicationInput$ === "object");
assert(typeof DeleteSMSSandboxPhoneNumberInput$ === "object");
assert(typeof DeleteSMSSandboxPhoneNumberResult$ === "object");
assert(typeof DeleteTopicInput$ === "object");
assert(typeof Endpoint$ === "object");
assert(typeof GetDataProtectionPolicyInput$ === "object");
assert(typeof GetDataProtectionPolicyResponse$ === "object");
assert(typeof GetEndpointAttributesInput$ === "object");
assert(typeof GetEndpointAttributesResponse$ === "object");
assert(typeof GetPlatformApplicationAttributesInput$ === "object");
assert(typeof GetPlatformApplicationAttributesResponse$ === "object");
assert(typeof GetSMSAttributesInput$ === "object");
assert(typeof GetSMSAttributesResponse$ === "object");
assert(typeof GetSMSSandboxAccountStatusInput$ === "object");
assert(typeof GetSMSSandboxAccountStatusResult$ === "object");
assert(typeof GetSubscriptionAttributesInput$ === "object");
assert(typeof GetSubscriptionAttributesResponse$ === "object");
assert(typeof GetTopicAttributesInput$ === "object");
assert(typeof GetTopicAttributesResponse$ === "object");
assert(typeof ListEndpointsByPlatformApplicationInput$ === "object");
assert(typeof ListEndpointsByPlatformApplicationResponse$ === "object");
assert(typeof ListOriginationNumbersRequest$ === "object");
assert(typeof ListOriginationNumbersResult$ === "object");
assert(typeof ListPhoneNumbersOptedOutInput$ === "object");
assert(typeof ListPhoneNumbersOptedOutResponse$ === "object");
assert(typeof ListPlatformApplicationsInput$ === "object");
assert(typeof ListPlatformApplicationsResponse$ === "object");
assert(typeof ListSMSSandboxPhoneNumbersInput$ === "object");
assert(typeof ListSMSSandboxPhoneNumbersResult$ === "object");
assert(typeof ListSubscriptionsByTopicInput$ === "object");
assert(typeof ListSubscriptionsByTopicResponse$ === "object");
assert(typeof ListSubscriptionsInput$ === "object");
assert(typeof ListSubscriptionsResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof ListTopicsInput$ === "object");
assert(typeof ListTopicsResponse$ === "object");
assert(typeof MessageAttributeValue$ === "object");
assert(typeof OptInPhoneNumberInput$ === "object");
assert(typeof OptInPhoneNumberResponse$ === "object");
assert(typeof PhoneNumberInformation$ === "object");
assert(typeof PlatformApplication$ === "object");
assert(typeof PublishBatchInput$ === "object");
assert(typeof PublishBatchRequestEntry$ === "object");
assert(typeof PublishBatchResponse$ === "object");
assert(typeof PublishBatchResultEntry$ === "object");
assert(typeof PublishInput$ === "object");
assert(typeof PublishResponse$ === "object");
assert(typeof PutDataProtectionPolicyInput$ === "object");
assert(typeof RemovePermissionInput$ === "object");
assert(typeof SetEndpointAttributesInput$ === "object");
assert(typeof SetPlatformApplicationAttributesInput$ === "object");
assert(typeof SetSMSAttributesInput$ === "object");
assert(typeof SetSMSAttributesResponse$ === "object");
assert(typeof SetSubscriptionAttributesInput$ === "object");
assert(typeof SetTopicAttributesInput$ === "object");
assert(typeof SMSSandboxPhoneNumber$ === "object");
assert(typeof SubscribeInput$ === "object");
assert(typeof SubscribeResponse$ === "object");
assert(typeof Subscription$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof Topic$ === "object");
assert(typeof UnsubscribeInput$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof VerifySMSSandboxPhoneNumberInput$ === "object");
assert(typeof VerifySMSSandboxPhoneNumberResult$ === "object");
// enums
assert(typeof LanguageCodeString === "object");
assert(typeof NumberCapability === "object");
assert(typeof RouteType === "object");
assert(typeof SMSSandboxPhoneNumberVerificationStatus === "object");
// errors
assert(AuthorizationErrorException.prototype instanceof SNSServiceException);
assert(typeof AuthorizationErrorException$ === "object");
assert(BatchEntryIdsNotDistinctException.prototype instanceof SNSServiceException);
assert(typeof BatchEntryIdsNotDistinctException$ === "object");
assert(BatchRequestTooLongException.prototype instanceof SNSServiceException);
assert(typeof BatchRequestTooLongException$ === "object");
assert(ConcurrentAccessException.prototype instanceof SNSServiceException);
assert(typeof ConcurrentAccessException$ === "object");
assert(EmptyBatchRequestException.prototype instanceof SNSServiceException);
assert(typeof EmptyBatchRequestException$ === "object");
assert(EndpointDisabledException.prototype instanceof SNSServiceException);
assert(typeof EndpointDisabledException$ === "object");
assert(FilterPolicyLimitExceededException.prototype instanceof SNSServiceException);
assert(typeof FilterPolicyLimitExceededException$ === "object");
assert(InternalErrorException.prototype instanceof SNSServiceException);
assert(typeof InternalErrorException$ === "object");
assert(InvalidBatchEntryIdException.prototype instanceof SNSServiceException);
assert(typeof InvalidBatchEntryIdException$ === "object");
assert(InvalidParameterException.prototype instanceof SNSServiceException);
assert(typeof InvalidParameterException$ === "object");
assert(InvalidParameterValueException.prototype instanceof SNSServiceException);
assert(typeof InvalidParameterValueException$ === "object");
assert(InvalidSecurityException.prototype instanceof SNSServiceException);
assert(typeof InvalidSecurityException$ === "object");
assert(InvalidStateException.prototype instanceof SNSServiceException);
assert(typeof InvalidStateException$ === "object");
assert(KMSAccessDeniedException.prototype instanceof SNSServiceException);
assert(typeof KMSAccessDeniedException$ === "object");
assert(KMSDisabledException.prototype instanceof SNSServiceException);
assert(typeof KMSDisabledException$ === "object");
assert(KMSInvalidStateException.prototype instanceof SNSServiceException);
assert(typeof KMSInvalidStateException$ === "object");
assert(KMSNotFoundException.prototype instanceof SNSServiceException);
assert(typeof KMSNotFoundException$ === "object");
assert(KMSOptInRequired.prototype instanceof SNSServiceException);
assert(typeof KMSOptInRequired$ === "object");
assert(KMSThrottlingException.prototype instanceof SNSServiceException);
assert(typeof KMSThrottlingException$ === "object");
assert(NotFoundException.prototype instanceof SNSServiceException);
assert(typeof NotFoundException$ === "object");
assert(OptedOutException.prototype instanceof SNSServiceException);
assert(typeof OptedOutException$ === "object");
assert(PlatformApplicationDisabledException.prototype instanceof SNSServiceException);
assert(typeof PlatformApplicationDisabledException$ === "object");
assert(ReplayLimitExceededException.prototype instanceof SNSServiceException);
assert(typeof ReplayLimitExceededException$ === "object");
assert(ResourceNotFoundException.prototype instanceof SNSServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(StaleTagException.prototype instanceof SNSServiceException);
assert(typeof StaleTagException$ === "object");
assert(SubscriptionLimitExceededException.prototype instanceof SNSServiceException);
assert(typeof SubscriptionLimitExceededException$ === "object");
assert(TagLimitExceededException.prototype instanceof SNSServiceException);
assert(typeof TagLimitExceededException$ === "object");
assert(TagPolicyException.prototype instanceof SNSServiceException);
assert(typeof TagPolicyException$ === "object");
assert(ThrottledException.prototype instanceof SNSServiceException);
assert(typeof ThrottledException$ === "object");
assert(TooManyEntriesInBatchRequestException.prototype instanceof SNSServiceException);
assert(typeof TooManyEntriesInBatchRequestException$ === "object");
assert(TopicLimitExceededException.prototype instanceof SNSServiceException);
assert(typeof TopicLimitExceededException$ === "object");
assert(UserErrorException.prototype instanceof SNSServiceException);
assert(typeof UserErrorException$ === "object");
assert(ValidationException.prototype instanceof SNSServiceException);
assert(typeof ValidationException$ === "object");
assert(VerificationException.prototype instanceof SNSServiceException);
assert(typeof VerificationException$ === "object");
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
