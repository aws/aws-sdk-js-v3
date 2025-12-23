import {
  AccessDeniedException,
  AccessDeniedException$,
  AccessDeniedExceptionReason,
  AccountAttribute$,
  AccountAttributeName,
  AccountLimit$,
  AccountLimitName,
  AssociateOriginationIdentity$,
  AssociateOriginationIdentityCommand,
  AssociateOriginationIdentityRequest$,
  AssociateOriginationIdentityResult$,
  AssociateProtectConfiguration$,
  AssociateProtectConfigurationCommand,
  AssociateProtectConfigurationRequest$,
  AssociateProtectConfigurationResult$,
  AttachmentStatus,
  AttachmentUploadErrorReason,
  CarrierLookup$,
  CarrierLookupCommand,
  CarrierLookupRequest$,
  CarrierLookupResult$,
  CloudWatchLogsDestination$,
  ConfigurationSetFilter$,
  ConfigurationSetFilterName,
  ConfigurationSetInformation$,
  ConflictException,
  ConflictException$,
  ConflictExceptionReason,
  CreateConfigurationSet$,
  CreateConfigurationSetCommand,
  CreateConfigurationSetRequest$,
  CreateConfigurationSetResult$,
  CreateEventDestination$,
  CreateEventDestinationCommand,
  CreateEventDestinationRequest$,
  CreateEventDestinationResult$,
  CreateOptOutList$,
  CreateOptOutListCommand,
  CreateOptOutListRequest$,
  CreateOptOutListResult$,
  CreatePool$,
  CreatePoolCommand,
  CreatePoolRequest$,
  CreatePoolResult$,
  CreateProtectConfiguration$,
  CreateProtectConfigurationCommand,
  CreateProtectConfigurationRequest$,
  CreateProtectConfigurationResult$,
  CreateRegistration$,
  CreateRegistrationAssociation$,
  CreateRegistrationAssociationCommand,
  CreateRegistrationAssociationRequest$,
  CreateRegistrationAssociationResult$,
  CreateRegistrationAttachment$,
  CreateRegistrationAttachmentCommand,
  CreateRegistrationAttachmentRequest$,
  CreateRegistrationAttachmentResult$,
  CreateRegistrationCommand,
  CreateRegistrationRequest$,
  CreateRegistrationResult$,
  CreateRegistrationVersion$,
  CreateRegistrationVersionCommand,
  CreateRegistrationVersionRequest$,
  CreateRegistrationVersionResult$,
  CreateVerifiedDestinationNumber$,
  CreateVerifiedDestinationNumberCommand,
  CreateVerifiedDestinationNumberRequest$,
  CreateVerifiedDestinationNumberResult$,
  DeleteAccountDefaultProtectConfiguration$,
  DeleteAccountDefaultProtectConfigurationCommand,
  DeleteAccountDefaultProtectConfigurationRequest$,
  DeleteAccountDefaultProtectConfigurationResult$,
  DeleteConfigurationSet$,
  DeleteConfigurationSetCommand,
  DeleteConfigurationSetRequest$,
  DeleteConfigurationSetResult$,
  DeleteDefaultMessageType$,
  DeleteDefaultMessageTypeCommand,
  DeleteDefaultMessageTypeRequest$,
  DeleteDefaultMessageTypeResult$,
  DeleteDefaultSenderId$,
  DeleteDefaultSenderIdCommand,
  DeleteDefaultSenderIdRequest$,
  DeleteDefaultSenderIdResult$,
  DeleteEventDestination$,
  DeleteEventDestinationCommand,
  DeleteEventDestinationRequest$,
  DeleteEventDestinationResult$,
  DeleteKeyword$,
  DeleteKeywordCommand,
  DeleteKeywordRequest$,
  DeleteKeywordResult$,
  DeleteMediaMessageSpendLimitOverride$,
  DeleteMediaMessageSpendLimitOverrideCommand,
  DeleteMediaMessageSpendLimitOverrideRequest$,
  DeleteMediaMessageSpendLimitOverrideResult$,
  DeleteOptedOutNumber$,
  DeleteOptedOutNumberCommand,
  DeleteOptedOutNumberRequest$,
  DeleteOptedOutNumberResult$,
  DeleteOptOutList$,
  DeleteOptOutListCommand,
  DeleteOptOutListRequest$,
  DeleteOptOutListResult$,
  DeletePool$,
  DeletePoolCommand,
  DeletePoolRequest$,
  DeletePoolResult$,
  DeleteProtectConfiguration$,
  DeleteProtectConfigurationCommand,
  DeleteProtectConfigurationRequest$,
  DeleteProtectConfigurationResult$,
  DeleteProtectConfigurationRuleSetNumberOverride$,
  DeleteProtectConfigurationRuleSetNumberOverrideCommand,
  DeleteProtectConfigurationRuleSetNumberOverrideRequest$,
  DeleteProtectConfigurationRuleSetNumberOverrideResult$,
  DeleteRegistration$,
  DeleteRegistrationAttachment$,
  DeleteRegistrationAttachmentCommand,
  DeleteRegistrationAttachmentRequest$,
  DeleteRegistrationAttachmentResult$,
  DeleteRegistrationCommand,
  DeleteRegistrationFieldValue$,
  DeleteRegistrationFieldValueCommand,
  DeleteRegistrationFieldValueRequest$,
  DeleteRegistrationFieldValueResult$,
  DeleteRegistrationRequest$,
  DeleteRegistrationResult$,
  DeleteResourcePolicy$,
  DeleteResourcePolicyCommand,
  DeleteResourcePolicyRequest$,
  DeleteResourcePolicyResult$,
  DeleteTextMessageSpendLimitOverride$,
  DeleteTextMessageSpendLimitOverrideCommand,
  DeleteTextMessageSpendLimitOverrideRequest$,
  DeleteTextMessageSpendLimitOverrideResult$,
  DeleteVerifiedDestinationNumber$,
  DeleteVerifiedDestinationNumberCommand,
  DeleteVerifiedDestinationNumberRequest$,
  DeleteVerifiedDestinationNumberResult$,
  DeleteVoiceMessageSpendLimitOverride$,
  DeleteVoiceMessageSpendLimitOverrideCommand,
  DeleteVoiceMessageSpendLimitOverrideRequest$,
  DeleteVoiceMessageSpendLimitOverrideResult$,
  DescribeAccountAttributes$,
  DescribeAccountAttributesCommand,
  DescribeAccountAttributesRequest$,
  DescribeAccountAttributesResult$,
  DescribeAccountLimits$,
  DescribeAccountLimitsCommand,
  DescribeAccountLimitsRequest$,
  DescribeAccountLimitsResult$,
  DescribeConfigurationSets$,
  DescribeConfigurationSetsCommand,
  DescribeConfigurationSetsRequest$,
  DescribeConfigurationSetsResult$,
  DescribeKeywords$,
  DescribeKeywordsCommand,
  DescribeKeywordsRequest$,
  DescribeKeywordsResult$,
  DescribeOptedOutNumbers$,
  DescribeOptedOutNumbersCommand,
  DescribeOptedOutNumbersRequest$,
  DescribeOptedOutNumbersResult$,
  DescribeOptOutLists$,
  DescribeOptOutListsCommand,
  DescribeOptOutListsRequest$,
  DescribeOptOutListsResult$,
  DescribePhoneNumbers$,
  DescribePhoneNumbersCommand,
  DescribePhoneNumbersRequest$,
  DescribePhoneNumbersResult$,
  DescribePools$,
  DescribePoolsCommand,
  DescribePoolsRequest$,
  DescribePoolsResult$,
  DescribeProtectConfigurations$,
  DescribeProtectConfigurationsCommand,
  DescribeProtectConfigurationsRequest$,
  DescribeProtectConfigurationsResult$,
  DescribeRegistrationAttachments$,
  DescribeRegistrationAttachmentsCommand,
  DescribeRegistrationAttachmentsRequest$,
  DescribeRegistrationAttachmentsResult$,
  DescribeRegistrationFieldDefinitions$,
  DescribeRegistrationFieldDefinitionsCommand,
  DescribeRegistrationFieldDefinitionsRequest$,
  DescribeRegistrationFieldDefinitionsResult$,
  DescribeRegistrationFieldValues$,
  DescribeRegistrationFieldValuesCommand,
  DescribeRegistrationFieldValuesRequest$,
  DescribeRegistrationFieldValuesResult$,
  DescribeRegistrations$,
  DescribeRegistrationsCommand,
  DescribeRegistrationSectionDefinitions$,
  DescribeRegistrationSectionDefinitionsCommand,
  DescribeRegistrationSectionDefinitionsRequest$,
  DescribeRegistrationSectionDefinitionsResult$,
  DescribeRegistrationsRequest$,
  DescribeRegistrationsResult$,
  DescribeRegistrationTypeDefinitions$,
  DescribeRegistrationTypeDefinitionsCommand,
  DescribeRegistrationTypeDefinitionsRequest$,
  DescribeRegistrationTypeDefinitionsResult$,
  DescribeRegistrationVersions$,
  DescribeRegistrationVersionsCommand,
  DescribeRegistrationVersionsRequest$,
  DescribeRegistrationVersionsResult$,
  DescribeSenderIds$,
  DescribeSenderIdsCommand,
  DescribeSenderIdsRequest$,
  DescribeSenderIdsResult$,
  DescribeSpendLimits$,
  DescribeSpendLimitsCommand,
  DescribeSpendLimitsRequest$,
  DescribeSpendLimitsResult$,
  DescribeVerifiedDestinationNumbers$,
  DescribeVerifiedDestinationNumbersCommand,
  DescribeVerifiedDestinationNumbersRequest$,
  DescribeVerifiedDestinationNumbersResult$,
  DestinationCountryParameterKey,
  DisassociateOriginationIdentity$,
  DisassociateOriginationIdentityCommand,
  DisassociateOriginationIdentityRequest$,
  DisassociateOriginationIdentityResult$,
  DisassociateProtectConfiguration$,
  DisassociateProtectConfigurationCommand,
  DisassociateProtectConfigurationRequest$,
  DisassociateProtectConfigurationResult$,
  DiscardRegistrationVersion$,
  DiscardRegistrationVersionCommand,
  DiscardRegistrationVersionRequest$,
  DiscardRegistrationVersionResult$,
  EventDestination$,
  EventType,
  FieldRequirement,
  FieldType,
  GetProtectConfigurationCountryRuleSet$,
  GetProtectConfigurationCountryRuleSetCommand,
  GetProtectConfigurationCountryRuleSetRequest$,
  GetProtectConfigurationCountryRuleSetResult$,
  GetResourcePolicy$,
  GetResourcePolicyCommand,
  GetResourcePolicyRequest$,
  GetResourcePolicyResult$,
  InternalServerException,
  InternalServerException$,
  KeywordAction,
  KeywordFilter$,
  KeywordFilterName,
  KeywordInformation$,
  KinesisFirehoseDestination$,
  LanguageCode,
  ListPoolOriginationIdentities$,
  ListPoolOriginationIdentitiesCommand,
  ListPoolOriginationIdentitiesRequest$,
  ListPoolOriginationIdentitiesResult$,
  ListProtectConfigurationRuleSetNumberOverrides$,
  ListProtectConfigurationRuleSetNumberOverridesCommand,
  ListProtectConfigurationRuleSetNumberOverridesRequest$,
  ListProtectConfigurationRuleSetNumberOverridesResult$,
  ListRegistrationAssociations$,
  ListRegistrationAssociationsCommand,
  ListRegistrationAssociationsRequest$,
  ListRegistrationAssociationsResult$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResult$,
  MessageFeedbackStatus,
  MessageType,
  NumberCapability,
  NumberStatus,
  NumberType,
  OptedOutFilter$,
  OptedOutFilterName,
  OptedOutNumberInformation$,
  OptOutListInformation$,
  OriginationIdentityMetadata$,
  Owner,
  paginateDescribeAccountAttributes,
  paginateDescribeAccountLimits,
  paginateDescribeConfigurationSets,
  paginateDescribeKeywords,
  paginateDescribeOptedOutNumbers,
  paginateDescribeOptOutLists,
  paginateDescribePhoneNumbers,
  paginateDescribePools,
  paginateDescribeProtectConfigurations,
  paginateDescribeRegistrationAttachments,
  paginateDescribeRegistrationFieldDefinitions,
  paginateDescribeRegistrationFieldValues,
  paginateDescribeRegistrations,
  paginateDescribeRegistrationSectionDefinitions,
  paginateDescribeRegistrationTypeDefinitions,
  paginateDescribeRegistrationVersions,
  paginateDescribeSenderIds,
  paginateDescribeSpendLimits,
  paginateDescribeVerifiedDestinationNumbers,
  paginateListPoolOriginationIdentities,
  paginateListProtectConfigurationRuleSetNumberOverrides,
  paginateListRegistrationAssociations,
  PhoneNumberFilter$,
  PhoneNumberFilterName,
  PhoneNumberInformation$,
  PhoneNumberType,
  PinpointSMSVoiceV2,
  PinpointSMSVoiceV2Client,
  PinpointSMSVoiceV2ServiceException,
  PoolFilter$,
  PoolFilterName,
  PoolInformation$,
  PoolOriginationIdentitiesFilter$,
  PoolOriginationIdentitiesFilterName,
  PoolStatus,
  ProtectConfigurationCountryRuleSetInformation$,
  ProtectConfigurationFilter$,
  ProtectConfigurationFilterName,
  ProtectConfigurationInformation$,
  ProtectConfigurationRuleOverrideAction,
  ProtectConfigurationRuleSetNumberOverride$,
  ProtectConfigurationRuleSetNumberOverrideFilterItem$,
  ProtectConfigurationRuleSetNumberOverrideFilterName,
  ProtectStatus,
  PutKeyword$,
  PutKeywordCommand,
  PutKeywordRequest$,
  PutKeywordResult$,
  PutMessageFeedback$,
  PutMessageFeedbackCommand,
  PutMessageFeedbackRequest$,
  PutMessageFeedbackResult$,
  PutOptedOutNumber$,
  PutOptedOutNumberCommand,
  PutOptedOutNumberRequest$,
  PutOptedOutNumberResult$,
  PutProtectConfigurationRuleSetNumberOverride$,
  PutProtectConfigurationRuleSetNumberOverrideCommand,
  PutProtectConfigurationRuleSetNumberOverrideRequest$,
  PutProtectConfigurationRuleSetNumberOverrideResult$,
  PutRegistrationFieldValue$,
  PutRegistrationFieldValueCommand,
  PutRegistrationFieldValueRequest$,
  PutRegistrationFieldValueResult$,
  PutResourcePolicy$,
  PutResourcePolicyCommand,
  PutResourcePolicyRequest$,
  PutResourcePolicyResult$,
  RegistrationAssociationBehavior,
  RegistrationAssociationFilter$,
  RegistrationAssociationFilterName,
  RegistrationAssociationMetadata$,
  RegistrationAttachmentFilter$,
  RegistrationAttachmentFilterName,
  RegistrationAttachmentsInformation$,
  RegistrationDeniedReasonInformation$,
  RegistrationDisassociationBehavior,
  RegistrationFieldDefinition$,
  RegistrationFieldDisplayHints$,
  RegistrationFieldValueInformation$,
  RegistrationFilter$,
  RegistrationFilterName,
  RegistrationInformation$,
  RegistrationSectionDefinition$,
  RegistrationSectionDisplayHints$,
  RegistrationStatus,
  RegistrationTypeDefinition$,
  RegistrationTypeDisplayHints$,
  RegistrationTypeFilter$,
  RegistrationTypeFilterName,
  RegistrationVersionFilter$,
  RegistrationVersionFilterName,
  RegistrationVersionInformation$,
  RegistrationVersionStatus,
  RegistrationVersionStatusHistory$,
  ReleasePhoneNumber$,
  ReleasePhoneNumberCommand,
  ReleasePhoneNumberRequest$,
  ReleasePhoneNumberResult$,
  ReleaseSenderId$,
  ReleaseSenderIdCommand,
  ReleaseSenderIdRequest$,
  ReleaseSenderIdResult$,
  RequestableNumberType,
  RequestPhoneNumber$,
  RequestPhoneNumberCommand,
  RequestPhoneNumberRequest$,
  RequestPhoneNumberResult$,
  RequestSenderId$,
  RequestSenderIdCommand,
  RequestSenderIdRequest$,
  RequestSenderIdResult$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourceType,
  SelectOptionDescription$,
  SelectValidation$,
  SendDestinationNumberVerificationCode$,
  SendDestinationNumberVerificationCodeCommand,
  SendDestinationNumberVerificationCodeRequest$,
  SendDestinationNumberVerificationCodeResult$,
  SenderIdAndCountry$,
  SenderIdFilter$,
  SenderIdFilterName,
  SenderIdInformation$,
  SendMediaMessage$,
  SendMediaMessageCommand,
  SendMediaMessageRequest$,
  SendMediaMessageResult$,
  SendTextMessage$,
  SendTextMessageCommand,
  SendTextMessageRequest$,
  SendTextMessageResult$,
  SendVoiceMessage$,
  SendVoiceMessageCommand,
  SendVoiceMessageRequest$,
  SendVoiceMessageResult$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  ServiceQuotaExceededExceptionReason,
  SetAccountDefaultProtectConfiguration$,
  SetAccountDefaultProtectConfigurationCommand,
  SetAccountDefaultProtectConfigurationRequest$,
  SetAccountDefaultProtectConfigurationResult$,
  SetDefaultMessageFeedbackEnabled$,
  SetDefaultMessageFeedbackEnabledCommand,
  SetDefaultMessageFeedbackEnabledRequest$,
  SetDefaultMessageFeedbackEnabledResult$,
  SetDefaultMessageType$,
  SetDefaultMessageTypeCommand,
  SetDefaultMessageTypeRequest$,
  SetDefaultMessageTypeResult$,
  SetDefaultSenderId$,
  SetDefaultSenderIdCommand,
  SetDefaultSenderIdRequest$,
  SetDefaultSenderIdResult$,
  SetMediaMessageSpendLimitOverride$,
  SetMediaMessageSpendLimitOverrideCommand,
  SetMediaMessageSpendLimitOverrideRequest$,
  SetMediaMessageSpendLimitOverrideResult$,
  SetTextMessageSpendLimitOverride$,
  SetTextMessageSpendLimitOverrideCommand,
  SetTextMessageSpendLimitOverrideRequest$,
  SetTextMessageSpendLimitOverrideResult$,
  SetVoiceMessageSpendLimitOverride$,
  SetVoiceMessageSpendLimitOverrideCommand,
  SetVoiceMessageSpendLimitOverrideRequest$,
  SetVoiceMessageSpendLimitOverrideResult$,
  SnsDestination$,
  SpendLimit$,
  SpendLimitName,
  SubmitRegistrationVersion$,
  SubmitRegistrationVersionCommand,
  SubmitRegistrationVersionRequest$,
  SubmitRegistrationVersionResult$,
  SupportedAssociation$,
  Tag$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResult$,
  TextValidation$,
  ThrottlingException,
  ThrottlingException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResult$,
  UpdateEventDestination$,
  UpdateEventDestinationCommand,
  UpdateEventDestinationRequest$,
  UpdateEventDestinationResult$,
  UpdatePhoneNumber$,
  UpdatePhoneNumberCommand,
  UpdatePhoneNumberRequest$,
  UpdatePhoneNumberResult$,
  UpdatePool$,
  UpdatePoolCommand,
  UpdatePoolRequest$,
  UpdatePoolResult$,
  UpdateProtectConfiguration$,
  UpdateProtectConfigurationCommand,
  UpdateProtectConfigurationCountryRuleSet$,
  UpdateProtectConfigurationCountryRuleSetCommand,
  UpdateProtectConfigurationCountryRuleSetRequest$,
  UpdateProtectConfigurationCountryRuleSetResult$,
  UpdateProtectConfigurationRequest$,
  UpdateProtectConfigurationResult$,
  UpdateSenderId$,
  UpdateSenderIdCommand,
  UpdateSenderIdRequest$,
  UpdateSenderIdResult$,
  ValidationException,
  ValidationException$,
  ValidationExceptionField$,
  ValidationExceptionReason,
  VerificationChannel,
  VerificationStatus,
  VerifiedDestinationNumberFilter$,
  VerifiedDestinationNumberFilterName,
  VerifiedDestinationNumberInformation$,
  VerifyDestinationNumber$,
  VerifyDestinationNumberCommand,
  VerifyDestinationNumberRequest$,
  VerifyDestinationNumberResult$,
  VoiceId,
  VoiceMessageBodyTextType,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof PinpointSMSVoiceV2Client === "function");
assert(typeof PinpointSMSVoiceV2 === "function");
// commands
assert(typeof AssociateOriginationIdentityCommand === "function");
assert(typeof AssociateOriginationIdentity$ === "object");
assert(typeof AssociateProtectConfigurationCommand === "function");
assert(typeof AssociateProtectConfiguration$ === "object");
assert(typeof CarrierLookupCommand === "function");
assert(typeof CarrierLookup$ === "object");
assert(typeof CreateConfigurationSetCommand === "function");
assert(typeof CreateConfigurationSet$ === "object");
assert(typeof CreateEventDestinationCommand === "function");
assert(typeof CreateEventDestination$ === "object");
assert(typeof CreateOptOutListCommand === "function");
assert(typeof CreateOptOutList$ === "object");
assert(typeof CreatePoolCommand === "function");
assert(typeof CreatePool$ === "object");
assert(typeof CreateProtectConfigurationCommand === "function");
assert(typeof CreateProtectConfiguration$ === "object");
assert(typeof CreateRegistrationCommand === "function");
assert(typeof CreateRegistration$ === "object");
assert(typeof CreateRegistrationAssociationCommand === "function");
assert(typeof CreateRegistrationAssociation$ === "object");
assert(typeof CreateRegistrationAttachmentCommand === "function");
assert(typeof CreateRegistrationAttachment$ === "object");
assert(typeof CreateRegistrationVersionCommand === "function");
assert(typeof CreateRegistrationVersion$ === "object");
assert(typeof CreateVerifiedDestinationNumberCommand === "function");
assert(typeof CreateVerifiedDestinationNumber$ === "object");
assert(typeof DeleteAccountDefaultProtectConfigurationCommand === "function");
assert(typeof DeleteAccountDefaultProtectConfiguration$ === "object");
assert(typeof DeleteConfigurationSetCommand === "function");
assert(typeof DeleteConfigurationSet$ === "object");
assert(typeof DeleteDefaultMessageTypeCommand === "function");
assert(typeof DeleteDefaultMessageType$ === "object");
assert(typeof DeleteDefaultSenderIdCommand === "function");
assert(typeof DeleteDefaultSenderId$ === "object");
assert(typeof DeleteEventDestinationCommand === "function");
assert(typeof DeleteEventDestination$ === "object");
assert(typeof DeleteKeywordCommand === "function");
assert(typeof DeleteKeyword$ === "object");
assert(typeof DeleteMediaMessageSpendLimitOverrideCommand === "function");
assert(typeof DeleteMediaMessageSpendLimitOverride$ === "object");
assert(typeof DeleteOptedOutNumberCommand === "function");
assert(typeof DeleteOptedOutNumber$ === "object");
assert(typeof DeleteOptOutListCommand === "function");
assert(typeof DeleteOptOutList$ === "object");
assert(typeof DeletePoolCommand === "function");
assert(typeof DeletePool$ === "object");
assert(typeof DeleteProtectConfigurationCommand === "function");
assert(typeof DeleteProtectConfiguration$ === "object");
assert(typeof DeleteProtectConfigurationRuleSetNumberOverrideCommand === "function");
assert(typeof DeleteProtectConfigurationRuleSetNumberOverride$ === "object");
assert(typeof DeleteRegistrationCommand === "function");
assert(typeof DeleteRegistration$ === "object");
assert(typeof DeleteRegistrationAttachmentCommand === "function");
assert(typeof DeleteRegistrationAttachment$ === "object");
assert(typeof DeleteRegistrationFieldValueCommand === "function");
assert(typeof DeleteRegistrationFieldValue$ === "object");
assert(typeof DeleteResourcePolicyCommand === "function");
assert(typeof DeleteResourcePolicy$ === "object");
assert(typeof DeleteTextMessageSpendLimitOverrideCommand === "function");
assert(typeof DeleteTextMessageSpendLimitOverride$ === "object");
assert(typeof DeleteVerifiedDestinationNumberCommand === "function");
assert(typeof DeleteVerifiedDestinationNumber$ === "object");
assert(typeof DeleteVoiceMessageSpendLimitOverrideCommand === "function");
assert(typeof DeleteVoiceMessageSpendLimitOverride$ === "object");
assert(typeof DescribeAccountAttributesCommand === "function");
assert(typeof DescribeAccountAttributes$ === "object");
assert(typeof DescribeAccountLimitsCommand === "function");
assert(typeof DescribeAccountLimits$ === "object");
assert(typeof DescribeConfigurationSetsCommand === "function");
assert(typeof DescribeConfigurationSets$ === "object");
assert(typeof DescribeKeywordsCommand === "function");
assert(typeof DescribeKeywords$ === "object");
assert(typeof DescribeOptedOutNumbersCommand === "function");
assert(typeof DescribeOptedOutNumbers$ === "object");
assert(typeof DescribeOptOutListsCommand === "function");
assert(typeof DescribeOptOutLists$ === "object");
assert(typeof DescribePhoneNumbersCommand === "function");
assert(typeof DescribePhoneNumbers$ === "object");
assert(typeof DescribePoolsCommand === "function");
assert(typeof DescribePools$ === "object");
assert(typeof DescribeProtectConfigurationsCommand === "function");
assert(typeof DescribeProtectConfigurations$ === "object");
assert(typeof DescribeRegistrationAttachmentsCommand === "function");
assert(typeof DescribeRegistrationAttachments$ === "object");
assert(typeof DescribeRegistrationFieldDefinitionsCommand === "function");
assert(typeof DescribeRegistrationFieldDefinitions$ === "object");
assert(typeof DescribeRegistrationFieldValuesCommand === "function");
assert(typeof DescribeRegistrationFieldValues$ === "object");
assert(typeof DescribeRegistrationsCommand === "function");
assert(typeof DescribeRegistrations$ === "object");
assert(typeof DescribeRegistrationSectionDefinitionsCommand === "function");
assert(typeof DescribeRegistrationSectionDefinitions$ === "object");
assert(typeof DescribeRegistrationTypeDefinitionsCommand === "function");
assert(typeof DescribeRegistrationTypeDefinitions$ === "object");
assert(typeof DescribeRegistrationVersionsCommand === "function");
assert(typeof DescribeRegistrationVersions$ === "object");
assert(typeof DescribeSenderIdsCommand === "function");
assert(typeof DescribeSenderIds$ === "object");
assert(typeof DescribeSpendLimitsCommand === "function");
assert(typeof DescribeSpendLimits$ === "object");
assert(typeof DescribeVerifiedDestinationNumbersCommand === "function");
assert(typeof DescribeVerifiedDestinationNumbers$ === "object");
assert(typeof DisassociateOriginationIdentityCommand === "function");
assert(typeof DisassociateOriginationIdentity$ === "object");
assert(typeof DisassociateProtectConfigurationCommand === "function");
assert(typeof DisassociateProtectConfiguration$ === "object");
assert(typeof DiscardRegistrationVersionCommand === "function");
assert(typeof DiscardRegistrationVersion$ === "object");
assert(typeof GetProtectConfigurationCountryRuleSetCommand === "function");
assert(typeof GetProtectConfigurationCountryRuleSet$ === "object");
assert(typeof GetResourcePolicyCommand === "function");
assert(typeof GetResourcePolicy$ === "object");
assert(typeof ListPoolOriginationIdentitiesCommand === "function");
assert(typeof ListPoolOriginationIdentities$ === "object");
assert(typeof ListProtectConfigurationRuleSetNumberOverridesCommand === "function");
assert(typeof ListProtectConfigurationRuleSetNumberOverrides$ === "object");
assert(typeof ListRegistrationAssociationsCommand === "function");
assert(typeof ListRegistrationAssociations$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof PutKeywordCommand === "function");
assert(typeof PutKeyword$ === "object");
assert(typeof PutMessageFeedbackCommand === "function");
assert(typeof PutMessageFeedback$ === "object");
assert(typeof PutOptedOutNumberCommand === "function");
assert(typeof PutOptedOutNumber$ === "object");
assert(typeof PutProtectConfigurationRuleSetNumberOverrideCommand === "function");
assert(typeof PutProtectConfigurationRuleSetNumberOverride$ === "object");
assert(typeof PutRegistrationFieldValueCommand === "function");
assert(typeof PutRegistrationFieldValue$ === "object");
assert(typeof PutResourcePolicyCommand === "function");
assert(typeof PutResourcePolicy$ === "object");
assert(typeof ReleasePhoneNumberCommand === "function");
assert(typeof ReleasePhoneNumber$ === "object");
assert(typeof ReleaseSenderIdCommand === "function");
assert(typeof ReleaseSenderId$ === "object");
assert(typeof RequestPhoneNumberCommand === "function");
assert(typeof RequestPhoneNumber$ === "object");
assert(typeof RequestSenderIdCommand === "function");
assert(typeof RequestSenderId$ === "object");
assert(typeof SendDestinationNumberVerificationCodeCommand === "function");
assert(typeof SendDestinationNumberVerificationCode$ === "object");
assert(typeof SendMediaMessageCommand === "function");
assert(typeof SendMediaMessage$ === "object");
assert(typeof SendTextMessageCommand === "function");
assert(typeof SendTextMessage$ === "object");
assert(typeof SendVoiceMessageCommand === "function");
assert(typeof SendVoiceMessage$ === "object");
assert(typeof SetAccountDefaultProtectConfigurationCommand === "function");
assert(typeof SetAccountDefaultProtectConfiguration$ === "object");
assert(typeof SetDefaultMessageFeedbackEnabledCommand === "function");
assert(typeof SetDefaultMessageFeedbackEnabled$ === "object");
assert(typeof SetDefaultMessageTypeCommand === "function");
assert(typeof SetDefaultMessageType$ === "object");
assert(typeof SetDefaultSenderIdCommand === "function");
assert(typeof SetDefaultSenderId$ === "object");
assert(typeof SetMediaMessageSpendLimitOverrideCommand === "function");
assert(typeof SetMediaMessageSpendLimitOverride$ === "object");
assert(typeof SetTextMessageSpendLimitOverrideCommand === "function");
assert(typeof SetTextMessageSpendLimitOverride$ === "object");
assert(typeof SetVoiceMessageSpendLimitOverrideCommand === "function");
assert(typeof SetVoiceMessageSpendLimitOverride$ === "object");
assert(typeof SubmitRegistrationVersionCommand === "function");
assert(typeof SubmitRegistrationVersion$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateEventDestinationCommand === "function");
assert(typeof UpdateEventDestination$ === "object");
assert(typeof UpdatePhoneNumberCommand === "function");
assert(typeof UpdatePhoneNumber$ === "object");
assert(typeof UpdatePoolCommand === "function");
assert(typeof UpdatePool$ === "object");
assert(typeof UpdateProtectConfigurationCommand === "function");
assert(typeof UpdateProtectConfiguration$ === "object");
assert(typeof UpdateProtectConfigurationCountryRuleSetCommand === "function");
assert(typeof UpdateProtectConfigurationCountryRuleSet$ === "object");
assert(typeof UpdateSenderIdCommand === "function");
assert(typeof UpdateSenderId$ === "object");
assert(typeof VerifyDestinationNumberCommand === "function");
assert(typeof VerifyDestinationNumber$ === "object");
// structural schemas
assert(typeof AccountAttribute$ === "object");
assert(typeof AccountLimit$ === "object");
assert(typeof AssociateOriginationIdentityRequest$ === "object");
assert(typeof AssociateOriginationIdentityResult$ === "object");
assert(typeof AssociateProtectConfigurationRequest$ === "object");
assert(typeof AssociateProtectConfigurationResult$ === "object");
assert(typeof CarrierLookupRequest$ === "object");
assert(typeof CarrierLookupResult$ === "object");
assert(typeof CloudWatchLogsDestination$ === "object");
assert(typeof ConfigurationSetFilter$ === "object");
assert(typeof ConfigurationSetInformation$ === "object");
assert(typeof CreateConfigurationSetRequest$ === "object");
assert(typeof CreateConfigurationSetResult$ === "object");
assert(typeof CreateEventDestinationRequest$ === "object");
assert(typeof CreateEventDestinationResult$ === "object");
assert(typeof CreateOptOutListRequest$ === "object");
assert(typeof CreateOptOutListResult$ === "object");
assert(typeof CreatePoolRequest$ === "object");
assert(typeof CreatePoolResult$ === "object");
assert(typeof CreateProtectConfigurationRequest$ === "object");
assert(typeof CreateProtectConfigurationResult$ === "object");
assert(typeof CreateRegistrationAssociationRequest$ === "object");
assert(typeof CreateRegistrationAssociationResult$ === "object");
assert(typeof CreateRegistrationAttachmentRequest$ === "object");
assert(typeof CreateRegistrationAttachmentResult$ === "object");
assert(typeof CreateRegistrationRequest$ === "object");
assert(typeof CreateRegistrationResult$ === "object");
assert(typeof CreateRegistrationVersionRequest$ === "object");
assert(typeof CreateRegistrationVersionResult$ === "object");
assert(typeof CreateVerifiedDestinationNumberRequest$ === "object");
assert(typeof CreateVerifiedDestinationNumberResult$ === "object");
assert(typeof DeleteAccountDefaultProtectConfigurationRequest$ === "object");
assert(typeof DeleteAccountDefaultProtectConfigurationResult$ === "object");
assert(typeof DeleteConfigurationSetRequest$ === "object");
assert(typeof DeleteConfigurationSetResult$ === "object");
assert(typeof DeleteDefaultMessageTypeRequest$ === "object");
assert(typeof DeleteDefaultMessageTypeResult$ === "object");
assert(typeof DeleteDefaultSenderIdRequest$ === "object");
assert(typeof DeleteDefaultSenderIdResult$ === "object");
assert(typeof DeleteEventDestinationRequest$ === "object");
assert(typeof DeleteEventDestinationResult$ === "object");
assert(typeof DeleteKeywordRequest$ === "object");
assert(typeof DeleteKeywordResult$ === "object");
assert(typeof DeleteMediaMessageSpendLimitOverrideRequest$ === "object");
assert(typeof DeleteMediaMessageSpendLimitOverrideResult$ === "object");
assert(typeof DeleteOptedOutNumberRequest$ === "object");
assert(typeof DeleteOptedOutNumberResult$ === "object");
assert(typeof DeleteOptOutListRequest$ === "object");
assert(typeof DeleteOptOutListResult$ === "object");
assert(typeof DeletePoolRequest$ === "object");
assert(typeof DeletePoolResult$ === "object");
assert(typeof DeleteProtectConfigurationRequest$ === "object");
assert(typeof DeleteProtectConfigurationResult$ === "object");
assert(typeof DeleteProtectConfigurationRuleSetNumberOverrideRequest$ === "object");
assert(typeof DeleteProtectConfigurationRuleSetNumberOverrideResult$ === "object");
assert(typeof DeleteRegistrationAttachmentRequest$ === "object");
assert(typeof DeleteRegistrationAttachmentResult$ === "object");
assert(typeof DeleteRegistrationFieldValueRequest$ === "object");
assert(typeof DeleteRegistrationFieldValueResult$ === "object");
assert(typeof DeleteRegistrationRequest$ === "object");
assert(typeof DeleteRegistrationResult$ === "object");
assert(typeof DeleteResourcePolicyRequest$ === "object");
assert(typeof DeleteResourcePolicyResult$ === "object");
assert(typeof DeleteTextMessageSpendLimitOverrideRequest$ === "object");
assert(typeof DeleteTextMessageSpendLimitOverrideResult$ === "object");
assert(typeof DeleteVerifiedDestinationNumberRequest$ === "object");
assert(typeof DeleteVerifiedDestinationNumberResult$ === "object");
assert(typeof DeleteVoiceMessageSpendLimitOverrideRequest$ === "object");
assert(typeof DeleteVoiceMessageSpendLimitOverrideResult$ === "object");
assert(typeof DescribeAccountAttributesRequest$ === "object");
assert(typeof DescribeAccountAttributesResult$ === "object");
assert(typeof DescribeAccountLimitsRequest$ === "object");
assert(typeof DescribeAccountLimitsResult$ === "object");
assert(typeof DescribeConfigurationSetsRequest$ === "object");
assert(typeof DescribeConfigurationSetsResult$ === "object");
assert(typeof DescribeKeywordsRequest$ === "object");
assert(typeof DescribeKeywordsResult$ === "object");
assert(typeof DescribeOptedOutNumbersRequest$ === "object");
assert(typeof DescribeOptedOutNumbersResult$ === "object");
assert(typeof DescribeOptOutListsRequest$ === "object");
assert(typeof DescribeOptOutListsResult$ === "object");
assert(typeof DescribePhoneNumbersRequest$ === "object");
assert(typeof DescribePhoneNumbersResult$ === "object");
assert(typeof DescribePoolsRequest$ === "object");
assert(typeof DescribePoolsResult$ === "object");
assert(typeof DescribeProtectConfigurationsRequest$ === "object");
assert(typeof DescribeProtectConfigurationsResult$ === "object");
assert(typeof DescribeRegistrationAttachmentsRequest$ === "object");
assert(typeof DescribeRegistrationAttachmentsResult$ === "object");
assert(typeof DescribeRegistrationFieldDefinitionsRequest$ === "object");
assert(typeof DescribeRegistrationFieldDefinitionsResult$ === "object");
assert(typeof DescribeRegistrationFieldValuesRequest$ === "object");
assert(typeof DescribeRegistrationFieldValuesResult$ === "object");
assert(typeof DescribeRegistrationSectionDefinitionsRequest$ === "object");
assert(typeof DescribeRegistrationSectionDefinitionsResult$ === "object");
assert(typeof DescribeRegistrationsRequest$ === "object");
assert(typeof DescribeRegistrationsResult$ === "object");
assert(typeof DescribeRegistrationTypeDefinitionsRequest$ === "object");
assert(typeof DescribeRegistrationTypeDefinitionsResult$ === "object");
assert(typeof DescribeRegistrationVersionsRequest$ === "object");
assert(typeof DescribeRegistrationVersionsResult$ === "object");
assert(typeof DescribeSenderIdsRequest$ === "object");
assert(typeof DescribeSenderIdsResult$ === "object");
assert(typeof DescribeSpendLimitsRequest$ === "object");
assert(typeof DescribeSpendLimitsResult$ === "object");
assert(typeof DescribeVerifiedDestinationNumbersRequest$ === "object");
assert(typeof DescribeVerifiedDestinationNumbersResult$ === "object");
assert(typeof DisassociateOriginationIdentityRequest$ === "object");
assert(typeof DisassociateOriginationIdentityResult$ === "object");
assert(typeof DisassociateProtectConfigurationRequest$ === "object");
assert(typeof DisassociateProtectConfigurationResult$ === "object");
assert(typeof DiscardRegistrationVersionRequest$ === "object");
assert(typeof DiscardRegistrationVersionResult$ === "object");
assert(typeof EventDestination$ === "object");
assert(typeof GetProtectConfigurationCountryRuleSetRequest$ === "object");
assert(typeof GetProtectConfigurationCountryRuleSetResult$ === "object");
assert(typeof GetResourcePolicyRequest$ === "object");
assert(typeof GetResourcePolicyResult$ === "object");
assert(typeof KeywordFilter$ === "object");
assert(typeof KeywordInformation$ === "object");
assert(typeof KinesisFirehoseDestination$ === "object");
assert(typeof ListPoolOriginationIdentitiesRequest$ === "object");
assert(typeof ListPoolOriginationIdentitiesResult$ === "object");
assert(typeof ListProtectConfigurationRuleSetNumberOverridesRequest$ === "object");
assert(typeof ListProtectConfigurationRuleSetNumberOverridesResult$ === "object");
assert(typeof ListRegistrationAssociationsRequest$ === "object");
assert(typeof ListRegistrationAssociationsResult$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResult$ === "object");
assert(typeof OptedOutFilter$ === "object");
assert(typeof OptedOutNumberInformation$ === "object");
assert(typeof OptOutListInformation$ === "object");
assert(typeof OriginationIdentityMetadata$ === "object");
assert(typeof PhoneNumberFilter$ === "object");
assert(typeof PhoneNumberInformation$ === "object");
assert(typeof PoolFilter$ === "object");
assert(typeof PoolInformation$ === "object");
assert(typeof PoolOriginationIdentitiesFilter$ === "object");
assert(typeof ProtectConfigurationCountryRuleSetInformation$ === "object");
assert(typeof ProtectConfigurationFilter$ === "object");
assert(typeof ProtectConfigurationInformation$ === "object");
assert(typeof ProtectConfigurationRuleSetNumberOverride$ === "object");
assert(typeof ProtectConfigurationRuleSetNumberOverrideFilterItem$ === "object");
assert(typeof PutKeywordRequest$ === "object");
assert(typeof PutKeywordResult$ === "object");
assert(typeof PutMessageFeedbackRequest$ === "object");
assert(typeof PutMessageFeedbackResult$ === "object");
assert(typeof PutOptedOutNumberRequest$ === "object");
assert(typeof PutOptedOutNumberResult$ === "object");
assert(typeof PutProtectConfigurationRuleSetNumberOverrideRequest$ === "object");
assert(typeof PutProtectConfigurationRuleSetNumberOverrideResult$ === "object");
assert(typeof PutRegistrationFieldValueRequest$ === "object");
assert(typeof PutRegistrationFieldValueResult$ === "object");
assert(typeof PutResourcePolicyRequest$ === "object");
assert(typeof PutResourcePolicyResult$ === "object");
assert(typeof RegistrationAssociationFilter$ === "object");
assert(typeof RegistrationAssociationMetadata$ === "object");
assert(typeof RegistrationAttachmentFilter$ === "object");
assert(typeof RegistrationAttachmentsInformation$ === "object");
assert(typeof RegistrationDeniedReasonInformation$ === "object");
assert(typeof RegistrationFieldDefinition$ === "object");
assert(typeof RegistrationFieldDisplayHints$ === "object");
assert(typeof RegistrationFieldValueInformation$ === "object");
assert(typeof RegistrationFilter$ === "object");
assert(typeof RegistrationInformation$ === "object");
assert(typeof RegistrationSectionDefinition$ === "object");
assert(typeof RegistrationSectionDisplayHints$ === "object");
assert(typeof RegistrationTypeDefinition$ === "object");
assert(typeof RegistrationTypeDisplayHints$ === "object");
assert(typeof RegistrationTypeFilter$ === "object");
assert(typeof RegistrationVersionFilter$ === "object");
assert(typeof RegistrationVersionInformation$ === "object");
assert(typeof RegistrationVersionStatusHistory$ === "object");
assert(typeof ReleasePhoneNumberRequest$ === "object");
assert(typeof ReleasePhoneNumberResult$ === "object");
assert(typeof ReleaseSenderIdRequest$ === "object");
assert(typeof ReleaseSenderIdResult$ === "object");
assert(typeof RequestPhoneNumberRequest$ === "object");
assert(typeof RequestPhoneNumberResult$ === "object");
assert(typeof RequestSenderIdRequest$ === "object");
assert(typeof RequestSenderIdResult$ === "object");
assert(typeof SelectOptionDescription$ === "object");
assert(typeof SelectValidation$ === "object");
assert(typeof SendDestinationNumberVerificationCodeRequest$ === "object");
assert(typeof SendDestinationNumberVerificationCodeResult$ === "object");
assert(typeof SenderIdAndCountry$ === "object");
assert(typeof SenderIdFilter$ === "object");
assert(typeof SenderIdInformation$ === "object");
assert(typeof SendMediaMessageRequest$ === "object");
assert(typeof SendMediaMessageResult$ === "object");
assert(typeof SendTextMessageRequest$ === "object");
assert(typeof SendTextMessageResult$ === "object");
assert(typeof SendVoiceMessageRequest$ === "object");
assert(typeof SendVoiceMessageResult$ === "object");
assert(typeof SetAccountDefaultProtectConfigurationRequest$ === "object");
assert(typeof SetAccountDefaultProtectConfigurationResult$ === "object");
assert(typeof SetDefaultMessageFeedbackEnabledRequest$ === "object");
assert(typeof SetDefaultMessageFeedbackEnabledResult$ === "object");
assert(typeof SetDefaultMessageTypeRequest$ === "object");
assert(typeof SetDefaultMessageTypeResult$ === "object");
assert(typeof SetDefaultSenderIdRequest$ === "object");
assert(typeof SetDefaultSenderIdResult$ === "object");
assert(typeof SetMediaMessageSpendLimitOverrideRequest$ === "object");
assert(typeof SetMediaMessageSpendLimitOverrideResult$ === "object");
assert(typeof SetTextMessageSpendLimitOverrideRequest$ === "object");
assert(typeof SetTextMessageSpendLimitOverrideResult$ === "object");
assert(typeof SetVoiceMessageSpendLimitOverrideRequest$ === "object");
assert(typeof SetVoiceMessageSpendLimitOverrideResult$ === "object");
assert(typeof SnsDestination$ === "object");
assert(typeof SpendLimit$ === "object");
assert(typeof SubmitRegistrationVersionRequest$ === "object");
assert(typeof SubmitRegistrationVersionResult$ === "object");
assert(typeof SupportedAssociation$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResult$ === "object");
assert(typeof TextValidation$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResult$ === "object");
assert(typeof UpdateEventDestinationRequest$ === "object");
assert(typeof UpdateEventDestinationResult$ === "object");
assert(typeof UpdatePhoneNumberRequest$ === "object");
assert(typeof UpdatePhoneNumberResult$ === "object");
assert(typeof UpdatePoolRequest$ === "object");
assert(typeof UpdatePoolResult$ === "object");
assert(typeof UpdateProtectConfigurationCountryRuleSetRequest$ === "object");
assert(typeof UpdateProtectConfigurationCountryRuleSetResult$ === "object");
assert(typeof UpdateProtectConfigurationRequest$ === "object");
assert(typeof UpdateProtectConfigurationResult$ === "object");
assert(typeof UpdateSenderIdRequest$ === "object");
assert(typeof UpdateSenderIdResult$ === "object");
assert(typeof ValidationExceptionField$ === "object");
assert(typeof VerifiedDestinationNumberFilter$ === "object");
assert(typeof VerifiedDestinationNumberInformation$ === "object");
assert(typeof VerifyDestinationNumberRequest$ === "object");
assert(typeof VerifyDestinationNumberResult$ === "object");
// enums
assert(typeof AccessDeniedExceptionReason === "object");
assert(typeof AccountAttributeName === "object");
assert(typeof AccountLimitName === "object");
assert(typeof AttachmentStatus === "object");
assert(typeof AttachmentUploadErrorReason === "object");
assert(typeof ConfigurationSetFilterName === "object");
assert(typeof ConflictExceptionReason === "object");
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
assert(typeof ResourceType === "object");
assert(typeof SenderIdFilterName === "object");
assert(typeof ServiceQuotaExceededExceptionReason === "object");
assert(typeof SpendLimitName === "object");
assert(typeof ValidationExceptionReason === "object");
assert(typeof VerificationChannel === "object");
assert(typeof VerificationStatus === "object");
assert(typeof VerifiedDestinationNumberFilterName === "object");
assert(typeof VoiceId === "object");
assert(typeof VoiceMessageBodyTextType === "object");
// errors
assert(AccessDeniedException.prototype instanceof PinpointSMSVoiceV2ServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof PinpointSMSVoiceV2ServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof PinpointSMSVoiceV2ServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof PinpointSMSVoiceV2ServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof PinpointSMSVoiceV2ServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof PinpointSMSVoiceV2ServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof PinpointSMSVoiceV2ServiceException);
assert(typeof ValidationException$ === "object");
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
