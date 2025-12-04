import {
  AccountAttributeName,
  AccountLimitName,
  AssociateOriginationIdentityCommand,
  AssociateProtectConfigurationCommand,
  AttachmentStatus,
  AttachmentUploadErrorReason,
  CarrierLookupCommand,
  ConfigurationSetFilterName,
  CreateConfigurationSetCommand,
  CreateEventDestinationCommand,
  CreateOptOutListCommand,
  CreatePoolCommand,
  CreateProtectConfigurationCommand,
  CreateRegistrationAssociationCommand,
  CreateRegistrationAttachmentCommand,
  CreateRegistrationCommand,
  CreateRegistrationVersionCommand,
  CreateVerifiedDestinationNumberCommand,
  DeleteAccountDefaultProtectConfigurationCommand,
  DeleteConfigurationSetCommand,
  DeleteDefaultMessageTypeCommand,
  DeleteDefaultSenderIdCommand,
  DeleteEventDestinationCommand,
  DeleteKeywordCommand,
  DeleteMediaMessageSpendLimitOverrideCommand,
  DeleteOptOutListCommand,
  DeleteOptedOutNumberCommand,
  DeletePoolCommand,
  DeleteProtectConfigurationCommand,
  DeleteProtectConfigurationRuleSetNumberOverrideCommand,
  DeleteRegistrationAttachmentCommand,
  DeleteRegistrationCommand,
  DeleteRegistrationFieldValueCommand,
  DeleteResourcePolicyCommand,
  DeleteTextMessageSpendLimitOverrideCommand,
  DeleteVerifiedDestinationNumberCommand,
  DeleteVoiceMessageSpendLimitOverrideCommand,
  DescribeAccountAttributesCommand,
  DescribeAccountLimitsCommand,
  DescribeConfigurationSetsCommand,
  DescribeKeywordsCommand,
  DescribeOptOutListsCommand,
  DescribeOptedOutNumbersCommand,
  DescribePhoneNumbersCommand,
  DescribePoolsCommand,
  DescribeProtectConfigurationsCommand,
  DescribeRegistrationAttachmentsCommand,
  DescribeRegistrationFieldDefinitionsCommand,
  DescribeRegistrationFieldValuesCommand,
  DescribeRegistrationSectionDefinitionsCommand,
  DescribeRegistrationTypeDefinitionsCommand,
  DescribeRegistrationVersionsCommand,
  DescribeRegistrationsCommand,
  DescribeSenderIdsCommand,
  DescribeSpendLimitsCommand,
  DescribeVerifiedDestinationNumbersCommand,
  DestinationCountryParameterKey,
  DisassociateOriginationIdentityCommand,
  DisassociateProtectConfigurationCommand,
  DiscardRegistrationVersionCommand,
  EventType,
  FieldRequirement,
  FieldType,
  GetProtectConfigurationCountryRuleSetCommand,
  GetResourcePolicyCommand,
  KeywordAction,
  KeywordFilterName,
  LanguageCode,
  ListPoolOriginationIdentitiesCommand,
  ListProtectConfigurationRuleSetNumberOverridesCommand,
  ListRegistrationAssociationsCommand,
  ListTagsForResourceCommand,
  MessageFeedbackStatus,
  MessageType,
  NumberCapability,
  NumberStatus,
  NumberType,
  OptedOutFilterName,
  Owner,
  PhoneNumberFilterName,
  PhoneNumberType,
  PinpointSMSVoiceV2,
  PinpointSMSVoiceV2Client,
  PinpointSMSVoiceV2ServiceException,
  PoolFilterName,
  PoolOriginationIdentitiesFilterName,
  PoolStatus,
  ProtectConfigurationFilterName,
  ProtectConfigurationRuleOverrideAction,
  ProtectConfigurationRuleSetNumberOverrideFilterName,
  ProtectStatus,
  PutKeywordCommand,
  PutMessageFeedbackCommand,
  PutOptedOutNumberCommand,
  PutProtectConfigurationRuleSetNumberOverrideCommand,
  PutRegistrationFieldValueCommand,
  PutResourcePolicyCommand,
  RegistrationAssociationBehavior,
  RegistrationAssociationFilterName,
  RegistrationAttachmentFilterName,
  RegistrationDisassociationBehavior,
  RegistrationFilterName,
  RegistrationStatus,
  RegistrationTypeFilterName,
  RegistrationVersionFilterName,
  RegistrationVersionStatus,
  ReleasePhoneNumberCommand,
  ReleaseSenderIdCommand,
  RequestPhoneNumberCommand,
  RequestSenderIdCommand,
  RequestableNumberType,
  SendDestinationNumberVerificationCodeCommand,
  SendMediaMessageCommand,
  SendTextMessageCommand,
  SendVoiceMessageCommand,
  SenderIdFilterName,
  SetAccountDefaultProtectConfigurationCommand,
  SetDefaultMessageFeedbackEnabledCommand,
  SetDefaultMessageTypeCommand,
  SetDefaultSenderIdCommand,
  SetMediaMessageSpendLimitOverrideCommand,
  SetTextMessageSpendLimitOverrideCommand,
  SetVoiceMessageSpendLimitOverrideCommand,
  SpendLimitName,
  SubmitRegistrationVersionCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateEventDestinationCommand,
  UpdatePhoneNumberCommand,
  UpdatePoolCommand,
  UpdateProtectConfigurationCommand,
  UpdateProtectConfigurationCountryRuleSetCommand,
  UpdateSenderIdCommand,
  VerificationChannel,
  VerificationStatus,
  VerifiedDestinationNumberFilterName,
  VerifyDestinationNumberCommand,
  VoiceId,
  VoiceMessageBodyTextType,
  paginateDescribeAccountAttributes,
  paginateDescribeAccountLimits,
  paginateDescribeConfigurationSets,
  paginateDescribeKeywords,
  paginateDescribeOptOutLists,
  paginateDescribeOptedOutNumbers,
  paginateDescribePhoneNumbers,
  paginateDescribePools,
  paginateDescribeProtectConfigurations,
  paginateDescribeRegistrationAttachments,
  paginateDescribeRegistrationFieldDefinitions,
  paginateDescribeRegistrationFieldValues,
  paginateDescribeRegistrationSectionDefinitions,
  paginateDescribeRegistrationTypeDefinitions,
  paginateDescribeRegistrationVersions,
  paginateDescribeRegistrations,
  paginateDescribeSenderIds,
  paginateDescribeSpendLimits,
  paginateDescribeVerifiedDestinationNumbers,
  paginateListPoolOriginationIdentities,
  paginateListProtectConfigurationRuleSetNumberOverrides,
  paginateListRegistrationAssociations,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof PinpointSMSVoiceV2Client === "function");
assert(typeof PinpointSMSVoiceV2 === "function");
// commands
assert(typeof AssociateOriginationIdentityCommand === "function");
assert(typeof AssociateProtectConfigurationCommand === "function");
assert(typeof CarrierLookupCommand === "function");
assert(typeof CreateConfigurationSetCommand === "function");
assert(typeof CreateEventDestinationCommand === "function");
assert(typeof CreateOptOutListCommand === "function");
assert(typeof CreatePoolCommand === "function");
assert(typeof CreateProtectConfigurationCommand === "function");
assert(typeof CreateRegistrationCommand === "function");
assert(typeof CreateRegistrationAssociationCommand === "function");
assert(typeof CreateRegistrationAttachmentCommand === "function");
assert(typeof CreateRegistrationVersionCommand === "function");
assert(typeof CreateVerifiedDestinationNumberCommand === "function");
assert(typeof DeleteAccountDefaultProtectConfigurationCommand === "function");
assert(typeof DeleteConfigurationSetCommand === "function");
assert(typeof DeleteDefaultMessageTypeCommand === "function");
assert(typeof DeleteDefaultSenderIdCommand === "function");
assert(typeof DeleteEventDestinationCommand === "function");
assert(typeof DeleteKeywordCommand === "function");
assert(typeof DeleteMediaMessageSpendLimitOverrideCommand === "function");
assert(typeof DeleteOptedOutNumberCommand === "function");
assert(typeof DeleteOptOutListCommand === "function");
assert(typeof DeletePoolCommand === "function");
assert(typeof DeleteProtectConfigurationCommand === "function");
assert(typeof DeleteProtectConfigurationRuleSetNumberOverrideCommand === "function");
assert(typeof DeleteRegistrationCommand === "function");
assert(typeof DeleteRegistrationAttachmentCommand === "function");
assert(typeof DeleteRegistrationFieldValueCommand === "function");
assert(typeof DeleteResourcePolicyCommand === "function");
assert(typeof DeleteTextMessageSpendLimitOverrideCommand === "function");
assert(typeof DeleteVerifiedDestinationNumberCommand === "function");
assert(typeof DeleteVoiceMessageSpendLimitOverrideCommand === "function");
assert(typeof DescribeAccountAttributesCommand === "function");
assert(typeof DescribeAccountLimitsCommand === "function");
assert(typeof DescribeConfigurationSetsCommand === "function");
assert(typeof DescribeKeywordsCommand === "function");
assert(typeof DescribeOptedOutNumbersCommand === "function");
assert(typeof DescribeOptOutListsCommand === "function");
assert(typeof DescribePhoneNumbersCommand === "function");
assert(typeof DescribePoolsCommand === "function");
assert(typeof DescribeProtectConfigurationsCommand === "function");
assert(typeof DescribeRegistrationAttachmentsCommand === "function");
assert(typeof DescribeRegistrationFieldDefinitionsCommand === "function");
assert(typeof DescribeRegistrationFieldValuesCommand === "function");
assert(typeof DescribeRegistrationsCommand === "function");
assert(typeof DescribeRegistrationSectionDefinitionsCommand === "function");
assert(typeof DescribeRegistrationTypeDefinitionsCommand === "function");
assert(typeof DescribeRegistrationVersionsCommand === "function");
assert(typeof DescribeSenderIdsCommand === "function");
assert(typeof DescribeSpendLimitsCommand === "function");
assert(typeof DescribeVerifiedDestinationNumbersCommand === "function");
assert(typeof DisassociateOriginationIdentityCommand === "function");
assert(typeof DisassociateProtectConfigurationCommand === "function");
assert(typeof DiscardRegistrationVersionCommand === "function");
assert(typeof GetProtectConfigurationCountryRuleSetCommand === "function");
assert(typeof GetResourcePolicyCommand === "function");
assert(typeof ListPoolOriginationIdentitiesCommand === "function");
assert(typeof ListProtectConfigurationRuleSetNumberOverridesCommand === "function");
assert(typeof ListRegistrationAssociationsCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof PutKeywordCommand === "function");
assert(typeof PutMessageFeedbackCommand === "function");
assert(typeof PutOptedOutNumberCommand === "function");
assert(typeof PutProtectConfigurationRuleSetNumberOverrideCommand === "function");
assert(typeof PutRegistrationFieldValueCommand === "function");
assert(typeof PutResourcePolicyCommand === "function");
assert(typeof ReleasePhoneNumberCommand === "function");
assert(typeof ReleaseSenderIdCommand === "function");
assert(typeof RequestPhoneNumberCommand === "function");
assert(typeof RequestSenderIdCommand === "function");
assert(typeof SendDestinationNumberVerificationCodeCommand === "function");
assert(typeof SendMediaMessageCommand === "function");
assert(typeof SendTextMessageCommand === "function");
assert(typeof SendVoiceMessageCommand === "function");
assert(typeof SetAccountDefaultProtectConfigurationCommand === "function");
assert(typeof SetDefaultMessageFeedbackEnabledCommand === "function");
assert(typeof SetDefaultMessageTypeCommand === "function");
assert(typeof SetDefaultSenderIdCommand === "function");
assert(typeof SetMediaMessageSpendLimitOverrideCommand === "function");
assert(typeof SetTextMessageSpendLimitOverrideCommand === "function");
assert(typeof SetVoiceMessageSpendLimitOverrideCommand === "function");
assert(typeof SubmitRegistrationVersionCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateEventDestinationCommand === "function");
assert(typeof UpdatePhoneNumberCommand === "function");
assert(typeof UpdatePoolCommand === "function");
assert(typeof UpdateProtectConfigurationCommand === "function");
assert(typeof UpdateProtectConfigurationCountryRuleSetCommand === "function");
assert(typeof UpdateSenderIdCommand === "function");
assert(typeof VerifyDestinationNumberCommand === "function");
// enums
assert(typeof AccountAttributeName === "object");
assert(typeof AccountLimitName === "object");
assert(typeof AttachmentStatus === "object");
assert(typeof AttachmentUploadErrorReason === "object");
assert(typeof ConfigurationSetFilterName === "object");
assert(typeof DestinationCountryParameterKey === "object");
assert(typeof EventType === "object");
assert(typeof FieldRequirement === "object");
assert(typeof FieldType === "object");
assert(typeof KeywordAction === "object");
assert(typeof KeywordFilterName === "object");
assert(typeof LanguageCode === "object");
assert(typeof MessageFeedbackStatus === "object");
assert(typeof MessageType === "object");
assert(typeof NumberCapability === "object");
assert(typeof NumberStatus === "object");
assert(typeof NumberType === "object");
assert(typeof OptedOutFilterName === "object");
assert(typeof Owner === "object");
assert(typeof PhoneNumberFilterName === "object");
assert(typeof PhoneNumberType === "object");
assert(typeof PoolFilterName === "object");
assert(typeof PoolOriginationIdentitiesFilterName === "object");
assert(typeof PoolStatus === "object");
assert(typeof ProtectConfigurationFilterName === "object");
assert(typeof ProtectConfigurationRuleOverrideAction === "object");
assert(typeof ProtectConfigurationRuleSetNumberOverrideFilterName === "object");
assert(typeof ProtectStatus === "object");
assert(typeof RegistrationAssociationBehavior === "object");
assert(typeof RegistrationAssociationFilterName === "object");
assert(typeof RegistrationAttachmentFilterName === "object");
assert(typeof RegistrationDisassociationBehavior === "object");
assert(typeof RegistrationFilterName === "object");
assert(typeof RegistrationStatus === "object");
assert(typeof RegistrationTypeFilterName === "object");
assert(typeof RegistrationVersionFilterName === "object");
assert(typeof RegistrationVersionStatus === "object");
assert(typeof RequestableNumberType === "object");
assert(typeof SenderIdFilterName === "object");
assert(typeof SpendLimitName === "object");
assert(typeof VerificationChannel === "object");
assert(typeof VerificationStatus === "object");
assert(typeof VerifiedDestinationNumberFilterName === "object");
assert(typeof VoiceId === "object");
assert(typeof VoiceMessageBodyTextType === "object");
// errors
assert(PinpointSMSVoiceV2ServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateDescribeAccountAttributes === "function");
assert(typeof paginateDescribeAccountLimits === "function");
assert(typeof paginateDescribeConfigurationSets === "function");
assert(typeof paginateDescribeKeywords === "function");
assert(typeof paginateDescribeOptOutLists === "function");
assert(typeof paginateDescribeOptedOutNumbers === "function");
assert(typeof paginateDescribePhoneNumbers === "function");
assert(typeof paginateDescribePools === "function");
assert(typeof paginateDescribeProtectConfigurations === "function");
assert(typeof paginateDescribeRegistrationAttachments === "function");
assert(typeof paginateDescribeRegistrationFieldDefinitions === "function");
assert(typeof paginateDescribeRegistrationFieldValues === "function");
assert(typeof paginateDescribeRegistrationSectionDefinitions === "function");
assert(typeof paginateDescribeRegistrationTypeDefinitions === "function");
assert(typeof paginateDescribeRegistrationVersions === "function");
assert(typeof paginateDescribeRegistrations === "function");
assert(typeof paginateDescribeSenderIds === "function");
assert(typeof paginateDescribeSpendLimits === "function");
assert(typeof paginateDescribeVerifiedDestinationNumbers === "function");
assert(typeof paginateListPoolOriginationIdentities === "function");
assert(typeof paginateListProtectConfigurationRuleSetNumberOverrides === "function");
assert(typeof paginateListRegistrationAssociations === "function");
console.log(`PinpointSMSVoiceV2 index test passed.`);
