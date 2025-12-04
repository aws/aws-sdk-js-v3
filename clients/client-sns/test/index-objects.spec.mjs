import {
  AddPermissionCommand,
  CheckIfPhoneNumberIsOptedOutCommand,
  ConfirmSubscriptionCommand,
  CreatePlatformApplicationCommand,
  CreatePlatformEndpointCommand,
  CreateSMSSandboxPhoneNumberCommand,
  CreateTopicCommand,
  DeleteEndpointCommand,
  DeletePlatformApplicationCommand,
  DeleteSMSSandboxPhoneNumberCommand,
  DeleteTopicCommand,
  GetDataProtectionPolicyCommand,
  GetEndpointAttributesCommand,
  GetPlatformApplicationAttributesCommand,
  GetSMSAttributesCommand,
  GetSMSSandboxAccountStatusCommand,
  GetSubscriptionAttributesCommand,
  GetTopicAttributesCommand,
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
  NumberCapability,
  OptInPhoneNumberCommand,
  PublishBatchCommand,
  PublishCommand,
  PutDataProtectionPolicyCommand,
  RemovePermissionCommand,
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
  SubscribeCommand,
  TagResourceCommand,
  UnsubscribeCommand,
  UntagResourceCommand,
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
assert(typeof SNSClient === "function")
assert(typeof SNS === "function")
// commands
assert(typeof AddPermissionCommand === "function")
assert(typeof CheckIfPhoneNumberIsOptedOutCommand === "function")
assert(typeof ConfirmSubscriptionCommand === "function")
assert(typeof CreatePlatformApplicationCommand === "function")
assert(typeof CreatePlatformEndpointCommand === "function")
assert(typeof CreateSMSSandboxPhoneNumberCommand === "function")
assert(typeof CreateTopicCommand === "function")
assert(typeof DeleteEndpointCommand === "function")
assert(typeof DeletePlatformApplicationCommand === "function")
assert(typeof DeleteSMSSandboxPhoneNumberCommand === "function")
assert(typeof DeleteTopicCommand === "function")
assert(typeof GetDataProtectionPolicyCommand === "function")
assert(typeof GetEndpointAttributesCommand === "function")
assert(typeof GetPlatformApplicationAttributesCommand === "function")
assert(typeof GetSMSAttributesCommand === "function")
assert(typeof GetSMSSandboxAccountStatusCommand === "function")
assert(typeof GetSubscriptionAttributesCommand === "function")
assert(typeof GetTopicAttributesCommand === "function")
assert(typeof ListEndpointsByPlatformApplicationCommand === "function")
assert(typeof ListOriginationNumbersCommand === "function")
assert(typeof ListPhoneNumbersOptedOutCommand === "function")
assert(typeof ListPlatformApplicationsCommand === "function")
assert(typeof ListSMSSandboxPhoneNumbersCommand === "function")
assert(typeof ListSubscriptionsCommand === "function")
assert(typeof ListSubscriptionsByTopicCommand === "function")
assert(typeof ListTagsForResourceCommand === "function")
assert(typeof ListTopicsCommand === "function")
assert(typeof OptInPhoneNumberCommand === "function")
assert(typeof PublishCommand === "function")
assert(typeof PublishBatchCommand === "function")
assert(typeof PutDataProtectionPolicyCommand === "function")
assert(typeof RemovePermissionCommand === "function")
assert(typeof SetEndpointAttributesCommand === "function")
assert(typeof SetPlatformApplicationAttributesCommand === "function")
assert(typeof SetSMSAttributesCommand === "function")
assert(typeof SetSubscriptionAttributesCommand === "function")
assert(typeof SetTopicAttributesCommand === "function")
assert(typeof SubscribeCommand === "function")
assert(typeof TagResourceCommand === "function")
assert(typeof UnsubscribeCommand === "function")
assert(typeof UntagResourceCommand === "function")
assert(typeof VerifySMSSandboxPhoneNumberCommand === "function")
// enums
assert(typeof LanguageCodeString === "object");
assert(typeof NumberCapability === "object");
assert(typeof RouteType === "object");
assert(typeof SMSSandboxPhoneNumberVerificationStatus === "object");
// errors
assert(SNSServiceException.prototype instanceof Error)
// paginators
assert(typeof paginateListEndpointsByPlatformApplication === "function")
assert(typeof paginateListOriginationNumbers === "function")
assert(typeof paginateListPhoneNumbersOptedOut === "function")
assert(typeof paginateListPlatformApplications === "function")
assert(typeof paginateListSMSSandboxPhoneNumbers === "function")
assert(typeof paginateListSubscriptions === "function")
assert(typeof paginateListSubscriptionsByTopic === "function")
assert(typeof paginateListTopics === "function")
console.log(`SNS index test passed.`);
